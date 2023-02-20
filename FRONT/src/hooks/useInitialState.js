import { useState } from 'react';

const useInitialState = () => {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  return {
    state: {
      user,
      cart,
      loading,
      alert,
    },
    setState: {
      setUser,
      setCart,
      setLoading,
      setAlert,
    },
  }
}

export default useInitialState;