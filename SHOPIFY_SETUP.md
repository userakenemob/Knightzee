# Shopify Integration Setup Guide

This application is set up to integrate with Shopify for e-commerce functionality. Follow these steps to complete the integration:

## 1. Create a Shopify Store

1. Go to [shopify.com](https://www.shopify.com) and create an account
2. Set up your store with your products
3. Note your store domain (e.g., `your-store.myshopify.com`)

## 2. Get Shopify Storefront API Access Token

1. In your Shopify admin, go to **Apps** → **Develop apps**
2. Click **Create an app**
3. Name your app (e.g., "Knights Energy Website")
4. Click **Configure Storefront API scopes**
5. Enable the following scopes:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_checkouts`
   - `unauthenticated_write_checkouts`
6. Click **Save**
7. Click **Install app**
8. Copy the **Storefront API access token**

## 3. Create Products in Shopify

1. Go to **Products** in your Shopify admin
2. Add your products with:
   - Product names matching those in the app
   - Images
   - Prices in KSh (Kenyan Shillings)
   - Inventory tracking

## 4. Update the Application Code

Open `src/app/contexts/ShopifyContext.tsx` and update the configuration:

```typescript
const SHOPIFY_CONFIG = {
  domain: "your-store.myshopify.com", // Replace with your actual domain
  storefrontAccessToken: "your_actual_token_here", // Replace with your token
};
```

## 5. Install Shopify Buy SDK (Optional but Recommended)

For production use, install the official Shopify Buy SDK:

```bash
pnpm add shopify-buy
```

Then update the ShopifyContext to use the official SDK instead of the mock implementation.

## 6. Product ID Mapping

You'll need to map your product IDs in the app to Shopify product variant IDs:

1. In Shopify admin, get the variant IDs for each product
2. Update the product list in `src/app/pages/Shop.tsx`:

```typescript
const products = [
  { 
    id: "gid://shopify/ProductVariant/ACTUAL_SHOPIFY_ID", // Use actual Shopify variant ID
    name: "Product Name",
    price: 1000,
    image: "..."
  },
  // ... more products
];
```

## 7. Testing

1. Test adding products to cart
2. Verify cart drawer shows items correctly
3. Test proceeding to checkout
4. Verify redirect to Shopify checkout works

## 8. Production Deployment

Before deploying to production:

1. ✅ Replace mock implementation with real Shopify API calls
2. ✅ Add environment variables for API credentials
3. ✅ Test all payment flows
4. ✅ Enable SSL/HTTPS
5. ✅ Configure Shopify checkout domain

## Current Implementation Status

- ✅ Cart management with add/remove/update
- ✅ Cart drawer UI
- ✅ Checkout redirect flow
- ⚠️ Using mock Shopify integration (needs real API credentials)
- ⚠️ Products need to be synced with actual Shopify store

## Support

For Shopify API documentation:
- [Shopify Storefront API](https://shopify.dev/api/storefront)
- [Shopify Buy SDK](https://shopify.dev/custom-storefronts/tools/js-buy-sdk)

For Knights Energy specific questions, contact your development team.
