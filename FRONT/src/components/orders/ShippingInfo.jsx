import React, { useState } from "react";
import styled from "styled-components";
const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 89vw;
  height: 600px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;

  label {
    margin-bottom: 5px;
  }

  input,
  textarea {
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
  font-size: 24px;
  margin-bottom: 5px;
`;

const ShippingInfo = () => {

  const order = {
    shipping_full_name: '',
    shipping_email: '',
    shipping_phone: 0,
    shipping_address: '',
    shipping_comments: ''
  }

  const [inputs, setInputs] = useState(order)


const handleChange = (e) => {
  setInputs({
    ...inputs,
    [e.target.name] : e.target.value
  })
}

const handleSubmit = (e) => {
  e.preventDefault()
  
  
}


  return (
    <>
  {/* <input type="text"  name="shipping_full_name" value={inputs.shipping_full_name}  onChange={handleChange} /> */}
    
   <Formulario onSubmit={handleSubmit} >
    <Titulo>Datos de envio</Titulo>
    <label htmlFor="shipping_full_name">Nombre:</label>
    <input type="text"  name="shipping_full_name" value={inputs.shipping_full_name}  onChange={handleChange} />

    <label htmlFor="shipping_email">Email:</label>
    <input type="email" id="shipping_email" name="shipping_email" value={inputs.shipping_email}  onChange={handleChange} />

    <label htmlFor="shipping_phone">Teléfono:</label>
    <input type="tel" id="shipping_phone" name="shipping_phone" value={inputs.shipping_phone}  onChange={handleChange} />

    <label htmlFor="shipping_address">Dirección de envío:</label>
    <input type="text" id="shipping_address" name="shipping_address" value={inputs.shipping_address}  onChange={handleChange} />

    <label htmlFor="shipping_comments">Comentarios:</label>
    <textarea id="shipping_comments" name="shipping_comments" rows="4" value={inputs.shipping_comments} onChange={handleChange}/>
    <button type='submit' > Enviar </button>
</Formulario>
</>
  )
}

 

export { ShippingInfo };