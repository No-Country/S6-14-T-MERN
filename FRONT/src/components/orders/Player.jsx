import React, { useEffect, useState } from "react";
import styled from "styled-components";
import trashIcon from "./icons/trashIcon.png";
import { useOrder } from "../../hooks/useOrder";
import { useForm } from "react-hook-form";

const DivEachPlayer = styled.form`
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

const Player = ({ index }) => {
  const { handlePlayerChange, removePlayer, players } = useOrder()
  const { register, handleSubmit, formState: {errors} } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
      <DivEachPlayer onSubmit={handleSubmit(onSubmit)}>
        <InputName
          name="name"
          value={players[index]?.name ? players[index]?.name : "" }
          placeholder="Nombre"
          {...register("nombre", {required: true})}
          type="text"
          onChange={(e) => handlePlayerChange(e, index)}
        />
        {errors.nombre && <span>Este campo es obligatorio</span>}
        <InputNumber
          name="number"
          value={players[index]?.number ? players[index].number : ""}
          placeholder="N°"
          {...register("numero_jugador", {required: true})}
          type="number"
          min="1"
          max="99"
          onChange={(e) => handlePlayerChange(e, index)}
        />
        {errors.numero_jugador && <span>Este campo es obligatorio</span>}
        <InputSizes
          name="shirtSize"
          value={players[index]?.shirtSize ? players[index].shirtSize : ""}
          placeholder="Talla Camiseta"
          {...register("talla_camiseta", {required: true})}
          type="text"
          onChange={(e) => handlePlayerChange(e, index)}
        />
        {errors.talla_camiseta && <span>Este campo es obligatorio</span>}
        <InputSizes
          name="pantsSize"
          value={players[index]?.pantsSize ? players[index].pantsSize : ""}
          placeholder="Talla Pantalón"
          {...register("talla_pantalon", {required: true})}
          type="text"
          onChange={(e) => handlePlayerChange(e, index)}
        />
        {errors.talla_pantalon && <span>Este campo es obligatorio</span>}
        <DivCheckBoxContainer>
          <DivCheckBox>
            <InputCheckBox
              name="socks"
              id={`sock-${index}`}
              type="checkbox"
              {...register("opcion1", {
                validates: {
                  atLeastOne: (value, {opcion2}) => value || opcion2 || "Selecione al menos una opción"
                }
              })}
              value={players[index]?.socks ? players[index].socks : false}
              checked={players[index]?.socks ? players[index].socks : false}
              onChange={(e) => handlePlayerChange(e, index)}
            />
            <LabelCheckBox htmlFor={`sock-${index}`}>Medias</LabelCheckBox>
          </DivCheckBox>
          <DivCheckBox>
            <InputCheckBox
              name="goalkeeper"
              id={`goalkeeper-${index}`}
              type="checkbox"
              {...register("opcion2")}
              value={players[index]?.goalkeeper ? players[index].goalkeeper : false}
              checked={players[index]?.goalkeeper ? players[index].goalkeeper : false}
              onChange={(e) => handlePlayerChange(e, index)}
            />
            <LabelCheckBox htmlFor={`goalkeeper-${index}`}>
              Arquero
            </LabelCheckBox>
          </DivCheckBox>
        </DivCheckBoxContainer>
        <TrashContainer onClick={(e) => removePlayer(e)}>
          <TrashImg src={trashIcon} />
        </TrashContainer>
      </DivEachPlayer>
  );
};

export { Player };