import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import About from "../pages/about/About";
import User from "../pages/user/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            {/* <Hero /> */}
            <User />
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
