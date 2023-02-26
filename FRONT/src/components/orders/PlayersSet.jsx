import React, { useContext } from "react";
import styled from "styled-components";
import addIcon from "./icons/addIcon.png";
import { Player } from "./Player";
import { OrderContext } from "../../context/order/OrderContext";

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
  const { players, addPlayer, price } = useContext(OrderContext)
  return (
    <>
      <div> ${price()} </div>
      <Title>Conjunto</Title>
      <BoxSet>
        {players.map((player, index) => (
          <Player key={index} index={index} player={player} />
        ))}
        <ContainerAddIcon>
          <AddIcon src={addIcon} onClick={addPlayer} />
        </ContainerAddIcon>
      </BoxSet>
      <button>Guardar jugadores</button>
    </>
  );
};

export { PlayersSet };