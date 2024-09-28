import { Outlet } from "react-router-dom";
import { Navbar } from "../shared/Navbar";

const Root = () => {
  return (
    <div className="font-inter container mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
