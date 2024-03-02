import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/signin") {
      navigate("/signin");
    }
  }, [navigate, location.pathname]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
