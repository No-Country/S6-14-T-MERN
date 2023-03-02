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
            // setState.setAlert({
            //   type: "error",
            //   message: err.response.data.message,
            // });
            console.log({ err });
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
      setState.setLoading(false);
      return true;
    } catch (error) {
      setState.setAlert({
        type: "error",
        message: error.response?.data?.message,
      });
      setState.setLoading(false);
      return false;
    }
  };

  const signUp = async ({ firstName, lastName, email, password }) => {
    setState.setLoading(true);
    try {
      await instance().post(endPoints.auth.signUp, {
        firstName,
        lastName,
        email,
        password,
      });
      setState.setAlert({
        type: "success",
        message: "account created",
      });
      setState.setLoading(false);
      return true;
    } catch (error) {
      setState.setAlert({
        type: "error",
        message: error.response?.data?.message,
      });
      setState.setLoading(false);
      return false;
    }
  };

  const signInGoogle = async () => {
    window.location.href = `${import.meta.env.VITE_API_URL}${
      endPoints.auth.logInGoogle
    }`;
  };

  const signOut = async () => {
    Cookies.remove("token");
    setState.setUser({});
    setState.setCart([]);
  };

  const sendMail = async (email) => {
    const rta = await instance().post(endPoints.auth.sendRecoveryMail, {
      email,
    });
    if (rta.status === 200) {
      setState.setAlert({
        type: "success",
        message: rta.data.message,
      });
    }
  };

  const sendNewPassword = async (token, password) => {
    const rta = await instance().post(endPoints.auth.resetPassword, { token, password });
    console.log({rta})
    if (rta.status === 200) {
      setState.setAlert({
        type: "success",
        message: rta.data.message.message,
      });
    }
  };

  return {
    sendMail,
    sendNewPassword,
    signIn,
    signUp,
    signInGoogle,
    signOut,
  };
};

export default useAuth;
