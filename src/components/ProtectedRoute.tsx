import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.isLogged) {
      navigate("/login");
    }
  }, [auth.isLogged]);

  if (!auth.isLogged) return null;

  return (
    <div className="bg-black">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
