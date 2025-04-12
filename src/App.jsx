import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import './App.css'
import Layout from "./Layout";
import Home, { loader as homeLoader } from "./pages/Home"
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
          loader: homeLoader,
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
