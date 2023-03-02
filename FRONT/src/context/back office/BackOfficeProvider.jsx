import axios from "axios";
import { useEffect, useState } from "react";
import { BackOfficeContext } from "./BackOfficeContext";
import { HEADER_CONFIG_AUTHORIZATION } from "../../services/const";

const BackOfficeProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [lastProduct, setLastProduct] = useState({});
  const [lastOrder, setLastOrder] = useState({});
  const [lastUser, setLastUser] = useState({});
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    getAllInfo();
  }, []);

  const getAllInfo = async () => {
    try {
      setIsloading(true);
      await getProducts();
      await getUsers();
      await getOrders();
      await getLastProduct();
      await getLastOrder();
      await getLastUser();
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  const getProducts = async () => {
    const res = await axios.get(`products/all`, HEADER_CONFIG_AUTHORIZATION);
    setProducts(res.data.data.products);
  };

  const deleteProduct = async (id) => {
    try {
      setIsloading(true);
      await axios.delete(`products/${id}`, HEADER_CONFIG_AUTHORIZATION);
      await getProducts();
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  const getUsers = async () => {
    const res = await axios.get(`users/all`, HEADER_CONFIG_AUTHORIZATION);
    setUsers(res.data.data.users);
  };

  const deleteUser = async (id) => {
    try {
      setIsloading(true);
      alert("Cannot delete users");
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  const getOrders = async () => {
    const res = await axios.get(`orders/all`, HEADER_CONFIG_AUTHORIZATION);
    setOrders(res.data.data.orders);
  };

  const deleteOrder = async (id) => {
    try {
      setIsloading(true);
      await axios.delete(`orders/${id}`, HEADER_CONFIG_AUTHORIZATION);
      await getOrders();
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  const getLastOrder = async () => {
    try {
      const res = await axios.get("orders/last", HEADER_CONFIG_AUTHORIZATION);

      setLastOrder(res.data.data.lastOrder[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getLastProduct = async () => {
    try {
      const res = await axios.get("products/last", HEADER_CONFIG_AUTHORIZATION);
      setLastProduct(res.data.data.lastProduct[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getLastUser = async () => {
    try {
      const res = await axios.get("users/last", HEADER_CONFIG_AUTHORIZATION);

      setLastUser(res.data.data.lastUser[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
    products,
    users,
    orders,
    lastProduct,
    lastOrder,
    lastUser,
    isLoading,
    deleteProduct,
    deleteUser,
    deleteOrder
  };

  return (
    <BackOfficeContext.Provider value={data}>
      {children}
    </BackOfficeContext.Provider>
  );
};

export { BackOfficeProvider };
