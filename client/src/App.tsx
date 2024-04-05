// import { useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import { AdminLayout } from "./layouts/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "create",
        element: <CreateUser />,
      },
      {
        path: "edit/:client_id",
        element: <EditUser />,
      },
    ],
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
