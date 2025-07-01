import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Layout from "./Layout";
import Home, { loader as homeLoader } from "./pages/Home"
import Todo, {loader as todoLoader} from "./pages/todo";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { createContactMessage } from "./api/contact";

function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: homeLoader
        },
        {
          path: "todo/:todoId",
          element: <Todo />,
          loader: todoLoader
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />,
          action: createContactMessage
        }
      ]
    }

  ])

  return <RouterProvider router={router}/>
}

export default App
