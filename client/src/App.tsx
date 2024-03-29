// import { useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateUser from "./pages/CreateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/create",
    element: <CreateUser />,
  },
]);

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
