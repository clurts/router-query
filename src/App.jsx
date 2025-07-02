import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import './App.css'
import Layout from "./Layout";
import Home from "./pages/Home"
import Todo, { loader as singleLoader } from "./pages/todo";
import About from "./pages/About";
import Loader from "./Loading";
import NotFound from "./pages/NotFound";
import { getTodos, getSingleTodo } from "./api/todos";
import Contact from "./pages/contact";

function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Layout />,
      hydrateFallbackElement: <Loader />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: getTodos

        },
        {
          path: "todo/:id",
          element: <Todo />,
          loader: getSingleTodo
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact", 
          element: <Contact />
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
