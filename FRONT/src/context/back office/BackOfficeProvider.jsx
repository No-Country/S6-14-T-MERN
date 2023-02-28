import axios from "axios";
import { useEffect, useState } from "react";
import { BackOfficeContext } from "./BackOfficeContext";
import { HEADER_CONFIG_AUTHORIZATION } from "../../services/const";

const BackOfficeProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getProducts();
    getUsers();
    getOrders();
  }, []);

  const getProducts = async () => {
    const res = await axios.get(`products/all`, HEADER_CONFIG_AUTHORIZATION);
    setProducts(res.data.data.products);
  };

  const getUsers = async () => {
    const res = await axios.get(`users/all`, HEADER_CONFIG_AUTHORIZATION);
    setUsers(res.data.data.users);
  };

  const getOrders = async () => {
    const res = await axios.get(`orders/all`, HEADER_CONFIG_AUTHORIZATION);
    setOrders(res.data.data.orders);
  };

  const getLastOrder = async()=>{
    const res = await axiox.get(`orders/last`, HEADER_CONFIG_AUTHORIZATION);

    return res.data.data
  }

  const data = {
    products,
    users,
    orders,
    getLastOrder
  };

  return (
    <BackOfficeContext.Provider value={data}>
      {children}
    </BackOfficeContext.Provider>
  );
};

export { BackOfficeProvider };
