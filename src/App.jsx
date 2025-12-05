import { Home } from "./pages/Home";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";


const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]); 

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
