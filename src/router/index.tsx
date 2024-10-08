import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Hero from "../shared/Hero";
import About from "../pages/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
          </>
        ),
      },
      {
        path: "about-us",
        element: <About />,
      },
    ],
  },
]);

export default router;
