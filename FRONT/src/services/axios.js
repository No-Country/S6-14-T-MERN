import axios from "axios";
import Cookie from "js-cookie";

const instance = () => {
  const token = Cookie.get("token")
  console.log(token);
  return axios.create({
    baseURL: `http://localhost:3000/api/v1`,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookie.get("token")}`,
    },
  });
};
export default instance;
