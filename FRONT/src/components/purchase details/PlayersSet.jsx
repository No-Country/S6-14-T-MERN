import React from "react";
import styled from "styled-components";
import trashIcon from "./icons/trashIcon.png";
import addIcon from "./icons/addIcon.png";
import { useState } from "react";

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
  cursor: pointer:
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

  return (
    <>
      <Title>Conjunto</Title>
      <BoxSet>
        <DivEachPlayer>
          <InputName placeholder="Nombre" type="text" />
          <InputNumber placeholder="N°" type="number" min="1" max="99" />
          <InputSizes placeholder="Talla Camiseta" type="text" />
          <InputSizes placeholder="Talla Pantalón" type="text" />
          <DivCheckBoxContainer>
            <DivCheckBox>
              <InputCheckBox id="sock" type="checkbox" value="sock" />
              <LabelCheckBox htmlFor="sock">Medias</LabelCheckBox>
            </DivCheckBox>
            <DivCheckBox>
              <InputCheckBox
                id="goalkeeper"
                type="checkbox"
                value="goalkeeper"
              />
              <LabelCheckBox htmlFor="goalkeeper">Arquero</LabelCheckBox>
            </DivCheckBox>
          </DivCheckBoxContainer>
          <TrashContainer>
            <TrashImg src={trashIcon} />
          </TrashContainer>
        </DivEachPlayer>
        <ContainerAddIcon>
          <AddIcon src={addIcon} />
        </ContainerAddIcon>
      </BoxSet>
    </>
  );
};

export { PlayersSet };
