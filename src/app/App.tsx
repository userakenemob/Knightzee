import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner";
import { ShopifyProvider } from "./contexts/ShopifyContext";

export default function App() {
  return (
    <ShopifyProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </ShopifyProvider>
  );
}