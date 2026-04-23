import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.js";
import Error from "./pages/Error.js";
import Todos from "./pages/TodosPage.js";
import { Products } from "./pages/Products.js";
import { RootLayer } from "./pages/Root.js";
import ProductInfo from "./pages/ProductInfo.js";
import { todosLoader } from "./pages/TodosPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayer />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/todos",
        element: <Todos />,
        loader: todosLoader,
      },
      {
        path: "/products/:productId",
        element: <ProductInfo />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
