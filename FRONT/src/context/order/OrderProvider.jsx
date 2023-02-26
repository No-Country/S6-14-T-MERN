import axios from "axios";
import { useEffect, useState } from "react";
import { OrderContext } from "./OrderContext";

const OrderProvider = ({ children }) => {
  const newPlayer = {
    name: "",
    number: "",
    shirtSize: "",
    pantsSize: "",
    socks: false,
    goalkeeper: false,
  };
  const [players, setPlayers] = useState([newPlayer]);

  const handlePlayerChange = (e, index) => {
    const { name, value, type, checked } = e.target;

    const newPlayers = [...players];
    const player = newPlayers[index];

    if (type === "checkbox") {
      player[name] = checked;
    } else {
      player[name] = value;
    }

    setPlayers(newPlayers);
    localStorage.setItem("players", JSON.stringify(newPlayers));
  };

  useEffect(() => {
    const playersStorage = JSON.parse(localStorage.getItem("players"));
    if (playersStorage && playersStorage.length > 0) {
      setPlayers(playersStorage);
    } else {
      setPlayers([newPlayer]);
      localStorage.setItem("players", JSON.stringify([newPlayer]));
    }
  }, []);

  const addPlayer = () => {
    const newPlayers = [...players, newPlayer];
    setPlayers(newPlayers);
    localStorage.setItem("players", JSON.stringify(newPlayers));
  };

  const removePlayer = (index) => {
    const newPlayers = players.filter((player, i) => i !== index);
    localStorage.setItem("players", JSON.stringify(newPlayers));
    setPlayers(newPlayers);
  };
  const price = () => {
    try {
        let total = 0;
        players.forEach((player) => {
          if (player?.shirtSize) {
            total += 1200;
          }
          if (player?.pantsSize) {
            total += 1000;
          }
          if (player?.socks) {
            total += 200;
          }
        });
        return total;
        
    } catch (error) {
        console.log({error})
    }
  };

  const data = { players, handlePlayerChange, addPlayer, removePlayer, price };

  return <OrderContext.Provider value={data}>{children}</OrderContext.Provider>;
};

export { OrderProvider };
