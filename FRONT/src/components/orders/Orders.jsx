import React from 'react';
import styled from 'styled-components';


const Orders = () => {


  const Formulario = styled.form`
    display: flex;
  flex-direction: column;
  width: 800px;
  height: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 15px;

  label {
    margin-bottom: 5px;
  }

  input, textarea {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%; /* ajusta el ancho al 100% del contenedor */
  }

  textarea {
    resize: vertical; /* permite al usuario cambiar la altura */
  }
`;

const Titulo = styled.h2`
  text-align: center;
  margin-bottom: 5px;
`;


  return (
    <>
    <Formulario>
    <Titulo>Datos de envio</Titulo>
  <label htmlFor="nombre y apellido">Nombre:</label>
  <input type="text" id="nombre" name="nombre" />

  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" />

  <label htmlFor="telefono">Teléfono:</label>
  <input type="tel" id="telefono" name="telefono" />

  <label htmlFor="direccion">Dirección de envío:</label>
  <input type="text" id="direccion" name="direccion" />

  <label htmlFor="comentarios">Comentarios:</label>
  <textarea id="comentarios" name="comentarios" rows="4" />
</Formulario>
</>
  )
}

export default Orders