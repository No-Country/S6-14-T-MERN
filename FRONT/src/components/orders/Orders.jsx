import React, { useState } from 'react';
import styled from 'styled-components';


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
`;

const Label = styled.label` {
margin-bottom: 5px;
}
`
const Input =  styled.input` {
padding: 10px;
margin-bottom: 10px;
border-radius: 5px;
border: 1px solid #ccc;
width: 100%; /* ajusta el ancho al 100% del contenedor */
}
`

const Textarea = styled.textarea` {
padding: 10px;
margin-bottom: 10px;
border-radius: 5px;
border: 1px solid #ccc;
width: 100%; /* ajusta el ancho al 100% del contenedor */
}
`

// textarea {
//   resize: vertical; /* permite al usuario cambiar la altura */
// }

const Titulo = styled.h2`
text-align: center;
margin-bottom: 5px;
`;
const Orders = () => {

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
    <Label htmlFor="shipping_full_name">Nombre:</Label>
    <Input type="text"  name="shipping_full_name" value={inputs.shipping_full_name}  onChange={handleChange} />

    <Label htmlFor="shipping_email">Email:</Label>
    <Input type="email" id="shipping_email" name="shipping_email" value={inputs.shipping_email}  onChange={handleChange} />

    <Label htmlFor="shipping_phone">Teléfono:</Label>
    <Input type="tel" id="shipping_phone" name="shipping_phone" value={inputs.shipping_phone}  onChange={handleChange} />

    <Label htmlFor="shipping_address">Dirección de envío:</Label>
    <Input type="text" id="shipping_address" name="shipping_address" value={inputs.shipping_address}  onChange={handleChange} />

    <Label htmlFor="shipping_comments">Comentarios:</Label>
    <Textarea id="shipping_comments" name="shipping_comments" rows="4" value={inputs.shipping_comments} onChange={handleChange}/>
    <button type='submit' > Enviar </button>
</Formulario>
</>
  )
}

export default Orders