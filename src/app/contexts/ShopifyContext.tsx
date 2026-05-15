import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";

// Shopify Buy SDK types
interface ShopifyProduct {
  id: string;
  title: string;
  variants: Array<{
    id: string;
    price: string;
    available: boolean;
  }>;
  images: Array<{
    src: string;
  }>;
}

interface ShopifyLineItem {
  id: string;
  title: string;
  quantity: number;
  variant: {
    id: string;
    price: {
      amount: string;
    };
    image?: {
      src: string;
    };
  };
}

interface ShopifyCheckout {
  id: string;
  webUrl: string;
  lineItems: ShopifyLineItem[];
  subtotalPrice: {
    amount: string;
  };
  totalPrice: {
    amount: string;
  };
}

interface ShopifyContextType {
  checkout: ShopifyCheckout | null;
  addToCart: (productId: string, quantity?: number) => Promise<void>;
  removeFromCart: (lineItemId: string) => Promise<void>;
  updateQuantity: (lineItemId: string, quantity: number) => Promise<void>;
  proceedToCheckout: () => void;
  totalItems: number;
  isLoading: boolean;
}

const ShopifyContext = createContext<ShopifyContextType | undefined>(undefined);

// Mock Shopify configuration - Replace with your actual Shopify credentials
const SHOPIFY_CONFIG = {
  domain: "your-store.myshopify.com", // Replace with your Shopify store domain
  storefrontAccessToken: "YOUR_STOREFRONT_ACCESS_TOKEN", // Replace with your token
};

export function ShopifyProvider({ children }: { children: ReactNode }) {
  const [checkout, setCheckout] = useState<ShopifyCheckout | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize checkout on mount
  useEffect(() => {
    initializeCheckout();
  }, []);

  const initializeCheckout = async () => {
    // Check if there's an existing checkout ID in localStorage
    const existingCheckoutId = localStorage.getItem("shopify_checkout_id");

    if (existingCheckoutId) {
      // Fetch existing checkout
      try {
        const existingCheckout = await fetchCheckout(existingCheckoutId);
        if (existingCheckout && !existingCheckout.completedAt) {
          setCheckout(existingCheckout);
          return;
        }
      } catch (error) {
        console.error("Error fetching existing checkout:", error);
      }
    }

    // Create new checkout
    const newCheckout = await createCheckout();
    setCheckout(newCheckout);
    if (newCheckout) {
      localStorage.setItem("shopify_checkout_id", newCheckout.id);
    }
  };

  const createCheckout = async (): Promise<ShopifyCheckout | null> => {
    // Mock checkout creation - Replace with actual Shopify API call
    const mockCheckout: ShopifyCheckout = {
      id: "mock-checkout-" + Date.now(),
      webUrl: `https://${SHOPIFY_CONFIG.domain}/cart`,
      lineItems: [],
      subtotalPrice: { amount: "0" },
      totalPrice: { amount: "0" },
    };
    return mockCheckout;
  };

  const fetchCheckout = async (checkoutId: string): Promise<ShopifyCheckout | null> => {
    // Mock fetch - Replace with actual Shopify API call
    return null;
  };

  const addToCart = async (productId: string, quantity: number = 1) => {
    setIsLoading(true);
    try {
      // In a real implementation, this would call Shopify's API
      // For now, we'll use a mock implementation

      // Mock product data mapping
      const productMap: Record<string, { name: string; price: number; image: string }> = {
        "flir-vp50-2": { name: "FLIR VP50-2", price: 1000, image: "https://images.unsplash.com/photo-1615630859219-0459703c34e6?w=400" },
        "l-feets-80mm": { name: "L Feets 80mm", price: 0, image: "https://images.unsplash.com/photo-1629726797843-618688139f5a?w=400" },
        "solar-300n": { name: "Solar 300N", price: 3000, image: "https://images.unsplash.com/photo-1774927334511-c2d1cf654b08?w=400" },
        "fluke-1735": { name: "Fluke 1735 Power Logger", price: 3000, image: "https://images.unsplash.com/photo-1670519808728-335b1eb2ef52?w=400" },
        "fluke-1732": { name: "Fluke 1732 Energy Logger", price: 3000, image: "https://images.unsplash.com/photo-1776918570438-886f538edd93?w=400" },
        "fluke-1730": { name: "Fluke 1730 Energy Logger", price: 3000, image: "https://images.unsplash.com/photo-1771178301028-49a922aefccd?w=400" },
        "evse-adapter": { name: "EVSE Adapter", price: 2000, image: "https://images.unsplash.com/photo-1774542916400-77f2dd1744d7?w=400" },
        "eva-500": { name: "EVA 500 UK AMPROBE", price: 2000, image: "https://images.unsplash.com/photo-1756511332583-99fc0d4bf7cf?w=400" },
        "ev-charge-check": { name: "EV Charge Check", price: 2000, image: "https://images.unsplash.com/photo-1726221062287-fda475b85493?w=400" },
      };

      const product = productMap[productId];
      if (!product) {
        toast.error("Product not found");
        return;
      }

      // Mock line item
      const lineItem: ShopifyLineItem = {
        id: `line-${Date.now()}`,
        title: product.name,
        quantity,
        variant: {
          id: productId,
          price: { amount: product.price.toString() },
          image: { src: product.image },
        },
      };

      // Update checkout
      if (checkout) {
        const updatedLineItems = [...checkout.lineItems];
        const existingItemIndex = updatedLineItems.findIndex(
          (item) => item.variant.id === productId
        );

        if (existingItemIndex >= 0) {
          updatedLineItems[existingItemIndex].quantity += quantity;
        } else {
          updatedLineItems.push(lineItem);
        }

        const subtotal = updatedLineItems.reduce(
          (sum, item) => sum + parseFloat(item.variant.price.amount) * item.quantity,
          0
        );

        setCheckout({
          ...checkout,
          lineItems: updatedLineItems,
          subtotalPrice: { amount: subtotal.toString() },
          totalPrice: { amount: subtotal.toString() },
        });

        toast.success(`${product.name} added to cart!`);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add item to cart");
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromCart = async (lineItemId: string) => {
    setIsLoading(true);
    try {
      if (checkout) {
        const item = checkout.lineItems.find((item) => item.id === lineItemId);
        const updatedLineItems = checkout.lineItems.filter(
          (item) => item.id !== lineItemId
        );

        const subtotal = updatedLineItems.reduce(
          (sum, item) => sum + parseFloat(item.variant.price.amount) * item.quantity,
          0
        );

        setCheckout({
          ...checkout,
          lineItems: updatedLineItems,
          subtotalPrice: { amount: subtotal.toString() },
          totalPrice: { amount: subtotal.toString() },
        });

        if (item) {
          toast.success(`${item.title} removed from cart`);
        }
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
      toast.error("Failed to remove item");
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuantity = async (lineItemId: string, quantity: number) => {
    if (quantity <= 0) {
      await removeFromCart(lineItemId);
      return;
    }

    setIsLoading(true);
    try {
      if (checkout) {
        const updatedLineItems = checkout.lineItems.map((item) =>
          item.id === lineItemId ? { ...item, quantity } : item
        );

        const subtotal = updatedLineItems.reduce(
          (sum, item) => sum + parseFloat(item.variant.price.amount) * item.quantity,
          0
        );

        setCheckout({
          ...checkout,
          lineItems: updatedLineItems,
          subtotalPrice: { amount: subtotal.toString() },
          totalPrice: { amount: subtotal.toString() },
        });
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
      toast.error("Failed to update quantity");
    } finally {
      setIsLoading(false);
    }
  };

  const proceedToCheckout = () => {
    if (checkout && checkout.lineItems.length > 0) {
      // Redirect to Shopify checkout
      // In production, this would be checkout.webUrl from Shopify
      // For now, we'll show a message
      toast.success("Redirecting to Shopify checkout...");

      // Uncomment this line when you have actual Shopify integration:
      // window.location.href = checkout.webUrl;

      // For demo purposes, redirect to a mock checkout page
      window.location.href = "/checkout";
    } else {
      toast.error("Your cart is empty");
    }
  };

  const totalItems = checkout?.lineItems.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <ShopifyContext.Provider
      value={{
        checkout,
        addToCart,
        removeFromCart,
        updateQuantity,
        proceedToCheckout,
        totalItems,
        isLoading,
      }}
    >
      {children}
    </ShopifyContext.Provider>
  );
}

export function useShopify() {
  const context = useContext(ShopifyContext);
  if (!context) {
    throw new Error("useShopify must be used within ShopifyProvider");
  }
  return context;
}
