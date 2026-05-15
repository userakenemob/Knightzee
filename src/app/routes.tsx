import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Media } from "./pages/Media";
import { BlogDetail } from "./pages/BlogDetail";
import { Shop } from "./pages/Shop";
import { Contact } from "./pages/Contact";
import { Checkout } from "./pages/Checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "projects", Component: Projects },
      { path: "projects/:projectId", Component: ProjectDetail },
      { path: "media", Component: Media },
      { path: "blog/:blogId", Component: BlogDetail },
      { path: "shop", Component: Shop },
      { path: "checkout", Component: Checkout },
      { path: "contact", Component: Contact },
    ],
  },
]);
