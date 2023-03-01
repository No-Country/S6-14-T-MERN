import axios from "axios";
import Cookie from "js-cookie";

const instance = () => {
  const token = Cookie.get("token")
  console.log(token);
  return axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookie.get("token")}`,
    },
  });
};
export default instance;
