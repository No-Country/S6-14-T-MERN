import Cookies from "js-cookie";

const HEADER_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
};

const HEADER_CONFIG_AUTHORIZATION = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
};

export { HEADER_CONFIG, HEADER_CONFIG_AUTHORIZATION };
