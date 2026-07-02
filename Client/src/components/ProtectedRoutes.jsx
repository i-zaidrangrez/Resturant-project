import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = (props) => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("AccessToken");
  const sessionToken = localStorage.getItem("sessionToken");
  useEffect(() => {
    if (!accessToken && !sessionToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);
  
  return <div>{props.children}</div>;
};

export default ProtectedRoutes;
