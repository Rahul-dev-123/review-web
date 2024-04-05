import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
