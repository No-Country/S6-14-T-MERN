import { useEffect, useCallback, useContext } from "react";
import instance from "../services/axios";
import endPoints from "../services/api";
import Cookies from "js-cookie";
import AppContext from "../context/AppContext";

const useAuth = () => {
  const { state, setState } = useContext(AppContext);

  const fetchUser = useCallback(async () => {
    try {
      const token = Cookies.get("token");
      if (token) {
        setState.setLoading(true);
        instance()
          .get(endPoints.users.getMyUser)
          .then((res) => {
            setState.setUser(res.data.data.user);
          })
          .catch((err) => {
            setState.setAlert({
              type: "error",
              message: err.response.data.message,
            });
          })
          .finally(() => {
            setState.setLoading(false);
          });
      }
    } catch (error) {
      setState.setUser(null);
      setState.setCart(null);
      throw error;
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const signIn = async (email, password) => {
    setState.setLoading(true);
    try {
      const response = await instance().post(endPoints.auth.login, {
        email,
        password,
      });
      const { user, token } = response.data;
      if (token) {
        Cookies.set("token", token, { expires: 5 });
      }
      setState.setUser(user);
      setState.setAlert({
        type: "success",
        message: `Welcome ${user.firstName}! :D`,
      });
    } catch (error) {
      setState.setAlert({
        type: "error",
        message: error.response?.data?.message,
      });
    } finally {
      setState.setLoading(false);
    }
  };

  const signUp = async (email, password) => {
    setState.setLoading(true);
    try {
      const response = await instance().post(endPoints.auth.login, {
        email,
        password,
      });
      const { user, token } = response.data;
      if (token) {
        Cookies.set("token", token, { expires: 5 });
      }
      setState.setUser(user);
      setState.setAlert({
        type: "success",
        message: `Welcome ${user.firstName}! :D`,
      });
    } catch (error) {
      setState.setAlert({
        type: "error",
        message: error.response?.data?.message,
      });
    } finally {
      setState.setLoading(false);
    }
  };

  return {
    signIn
  };
};

export default useAuth;
