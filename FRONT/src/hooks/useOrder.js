import { useState, useEffect } from "react";

const useOrder = () => {
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
    const newPlayers = [...players, newPlayer]
    setPlayers(newPlayers);
    localStorage.setItem("players", JSON.stringify(newPlayers));
  };

  const removePlayer = (index) => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1);
    setPlayers(newPlayers);
    localStorage.setItem("players", JSON.stringify(newPlayers));
  };

  return { players, handlePlayerChange, addPlayer, removePlayer };
};

export { useOrder };