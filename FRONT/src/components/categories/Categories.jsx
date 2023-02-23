import styled from 'styled-components'

const CategorySection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
h2 {
    font-weight: 700;
    font-size: 56px;
    line-height: 62px;
}

h4 {
    display:flex;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
    width: 600px;
    height: 70px;
    color: #fdfdff; 
}

@media(max-width: 600px) {
  display:flex;
  padding-top: 20px;

h2 {
  font-size: 30px;
  text-align: center;
}  
}

h4 {
  display:flex;
  width: 70%;
  font-size: 15px;
}
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 420px;
    max-width: 100%;
    height: auto;
    object-fit: cover;

img {
    display: flex;
    border-radius: 10px;
    width: 370px;
    height: 319.76px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.42);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.42);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.42);
}

div {
    display: flex;
    align-items: center;
    flex-direction: column;

}

div h4 {
    font-style: normal;
    font-weight: 700;
    color: #fdfdff;
    height: 40px;
}

div p {
    font-style: normal;
    text-align: center;
    font-weight: 500;
    color: #fdfdff;
}
`

const Categories = () => {
  return (
    <CategorySection>
      <h2>¿Cómo personalizar?</h2>
      <h4>Para personalizar las prendas debes seguir los siguientes pasos que se detallan acontinuación</h4>
      <CardContainer>
        <CardBox>
          <img src='https://res.cloudinary.com/dx7jgyz9f/image/upload/v1676575240/img1_bzrfex.png' />
          <div>
            <h4>Elegir un producto</h4>
            <p>Escoge una prenda que te gustaria personalizar</p>
          </div>
        </CardBox>
        <CardBox>
          <img src='https://res.cloudinary.com/dx7jgyz9f/image/upload/v1676575256/img2_ibxqti.png' />
          <div>
            <h4>Personalizar</h4>
            <p>Puedes elegir un diseño y personalizarlo con el color que más te guste</p>
          </div>
        </CardBox>
        <CardBox>
          <img src='https://res.cloudinary.com/dx7jgyz9f/image/upload/v1676575266/img3_iblkcy.png' />
          <div>
            <h4>Recibe tu pedido</h4>
            <p>Una vez finalizado tu diseño, puedes pedirlo y nosotros te lo enviamos!</p>
          </div>
        </CardBox>
      </CardContainer>
    </CategorySection>
  )
}

export { Categories }
