import { useEffect, useCallback } from "react";
import useInitialState from "./useInitialState";
import instance from "../services/axios";
import endPoints from "../services/api";
import Cookies from "js-cookie";

const useAuth = () => {
  const { state, setState } = useInitialState();

  const fetchUser = useCallback(async () => {
    try {
      const token = Cookies.get("token");

      if (token) {
        setState({
          ...state,
          loading: true,
        });
        instance()
          .get(endPoints.users.getMyUser)
          .then((res) => {
            console.log({res})
            setState({
              ...state,
              user: res.data.data.user,
              loading: false,
            });
          })
          .catch((err) => {
            setState({
              ...state,
              error: err.response.data,
              loading: false,
            });
          });
      }
    } catch (error) {
      setUser(null);
      throw error;
    }
  }, []);

  const signIn = async (email, password) => {
    setState({
      ...state,
      loading: true,
    });
    instance()
      .post(endPoints.auth.login, { email, password })
      .then((res) => {
        const token = res.data.token;
        if (token) {
          Cookies.set("token", token, { expires: 5 });
        }
        setState({
          ...state,
          user: res.data.user,
          loading: false,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          error: err.response.data,
          loading: false,
        });
      });
  };
  useEffect(() => {
    return fetchUser;
  }, [fetchUser])
  return {
    signIn,
    state,
  };
};

export default useAuth;
