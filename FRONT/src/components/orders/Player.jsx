import React, { useState } from "react";
import styled from "styled-components";
import trashIcon from "./icons/trashIcon.png";
import useOrders from "../../hooks/useOrder";

const DivEachPlayer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1.3rem;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 8px;
  padding: 6px 8px;
`;

const InputName = styled(Input)`
  max-width: 400px;
`;

const InputNumber = styled(Input)`
  max-width: 4rem;
`;

const InputSizes = styled(Input)`
  max-width: 220px;
`;

const DivCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;

const DivCheckBoxContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const InputCheckBox = styled.input.attrs()`
  border: 0.5px solid gray;
  cursor: pointer;
  border-radius: 3px;
  height: 24px;
  width: 24px;
  cursor: pointer;

  &:checked {
    background-color: red;
  }
`;

const LabelCheckBox = styled.label`
  cursor: pointer;
  font-size: 0.9rem;
`;

const TrashContainer = styled.div`
  width: 20px;
  height: 22.5px;
`;

const TrashImg = styled.img`
  margin-left: 0.8rem;
  cursor: pointer;
  filter: invert(27%) sepia(81%) saturate(7428%) hue-rotate(355deg)
    brightness(99%) contrast(120%);
`;

const Player = ({player, index, players, setPlayers}) => {
  const handlePlayerChange = (e, index) => {
    console.log({index})
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

  return (
      <DivEachPlayer>
        <InputName
          name="name"
          value={player.name}
          placeholder="Nombre"
          type="text"
          onChange={(e) => handlePlayerChange(e, index)}
        />
        <InputNumber
          name="number"
          value={player.number}
          placeholder="N°"
          type="number"
          min="1"
          max="99"
          onChange={(e) => handlePlayerChange(e, index)}
        />
        <InputSizes
          name="shirtSize"
          value={player.shirtSize}
          placeholder="Talla Camiseta"
          type="text"
          onChange={(e) => handlePlayerChange(e, index)}
        />
        <InputSizes
          name="pantsSize"
          value={player.pantsSize}
          placeholder="Talla Pantalón"
          type="text"
          onChange={(e) => handlePlayerChange(e, index)}
        />
        <DivCheckBoxContainer>
          <DivCheckBox>
            <InputCheckBox
              name="socks"
              id={`sock-${index}`}
              type="checkbox"
              value={player.socks}
              checked={player.socks}
              onChange={(e) => handlePlayerChange(e, index)}
            />
            <LabelCheckBox htmlFor={`sock-${index}`}>Medias</LabelCheckBox>
          </DivCheckBox>
          <DivCheckBox>
            <InputCheckBox
              name="goalkeeper"
              id={`goalkeeper-${index}`}
              type="checkbox"
              value={player.goalkeeper}
              checked={player.goalkeeper}
              onChange={(e) => handlePlayerChange(e, index)}
            />
            <LabelCheckBox htmlFor={`goalkeeper-${index}`}>
              Arquero
            </LabelCheckBox>
          </DivCheckBox>
        </DivCheckBoxContainer>
        <TrashContainer>
          <TrashImg src={trashIcon} />
        </TrashContainer>
      </DivEachPlayer>
  );
};

export { Player };