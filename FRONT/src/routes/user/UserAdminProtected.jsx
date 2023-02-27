import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/user/UserContext";

const UserAdminProtected = () => {
  const { user } = useContext(UserContext);

  if (user.isAdmin === false) return <Navigate to="/" />;

  return <Outlet />;
};

export { UserAdminProtected };
