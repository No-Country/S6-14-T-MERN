import React, { useEffect, useState } from "react";
import styled from "styled-components";
import addIcon from "./icons/addIcon.png";
import { Player } from "./Player";
import useOrders from "../../hooks/useOrder";

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
`;

const BoxSet = styled.div`
  margin: 10px auto;
  border: 1px solid white;
  width: 89vw;
  border-radius: 10px;
  padding: 1rem;
`;

const ContainerAddIcon = styled.div`
  margin: 1.5rem auto 0;
  width: 41px;
  height: 41px;
`;

const AddIcon = styled.img`
  cursor: pointer;
  filter: invert(73%) sepia(76%) saturate(4990%) hue-rotate(81deg)
    brightness(115%) contrast(128%);
`;

const PlayersSet = () => {
  const newPlayer = {
    name: "",
    number: "",
    shirtSize: "",
    pantsSize: "",
    socks: false,
    goalkeeper: false
  }
  const [players, setPlayers] = useState([newPlayer]);

  const handleAddPlayer = () => {
    setPlayers([...players, newPlayer]);
  };
  
  useEffect(() => {
    const playersStorage = JSON.parse(localStorage.getItem("players"));
    if (playersStorage) {
      setPlayers(playersStorage)
    }
  }, [])
  return (
    <>
      <Title>Conjunto</Title>
      <BoxSet>
        {players.map((player, index) => (
          <Player key={index} player={player} index={index} players={players} setPlayers={setPlayers} />
        ))}
        <ContainerAddIcon>
          <AddIcon src={addIcon} onClick={handleAddPlayer} />
        </ContainerAddIcon>
      </BoxSet>
      <button>Guardar jugadores</button>
    </>
  );
};

export { PlayersSet };