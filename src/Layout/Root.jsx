import { Outlet } from "react-router-dom";
import { Navbar } from "../shared/Navbar";

const Root = () => {
  return (
    <div className="font-inter min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
