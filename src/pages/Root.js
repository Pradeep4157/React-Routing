import { Outlet } from "react-router-dom";
import Navbar from "./../components/Navbar.js";
export const RootLayer = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
