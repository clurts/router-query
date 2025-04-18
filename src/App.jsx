import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import './App.css'
import Layout from "./Layout";
// import Home, { loader as homeLoader } from "./pages/Home"
import Home, { loader as homeLoader } from "./pages/OtherHome"
import Todo, { getSingleTodo } from "./pages/todo";
import About from "./pages/About";

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
          loader: getSingleTodo
        },
        {
          path: "about",
          element: <About />
        }
      ]
    }

  ])

  return <RouterProvider router={router}/>
}

export default App
