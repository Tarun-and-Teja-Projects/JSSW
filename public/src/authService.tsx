import { Outlet, Navigate } from "react-router-dom";

const AuthService = () => {
  const token = sessionStorage.getItem('accessToken');

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthService;
