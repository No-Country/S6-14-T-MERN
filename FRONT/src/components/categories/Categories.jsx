import React from 'react';
import styled from 'styled-components';


const CategorySection = styled.section `
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
    margin-top: 20px;
    text-align: center;
    width: 600px;
    height: 70px;
    color: #979797; 
}

`;

const CardContainer = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 60vh;
`;

const CardBox = styled.div `
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 420px;

img {
    display: flex;
    width: 370px;
    height: 319.76px;
    background-color: #C4C4C4; 
}

div {
    display: flex;
    align-items: center;
    flex-direction: column;

}

div h4 {
    font-style: normal;
    font-weight: 700;
    color: #000000;
    height: 40px;
}

div p {
    font-style: normal;
    font-weight: 500;
    color: #000000;
}
`;




const Categories = () => {
  return (
    <CategorySection>
            <h2>¿Cómo personalizar?</h2>
            <h4>Para personalizar las prendas debes seguir los siguientes pasos que se detallan acontinuación</h4>
                <CardContainer>
                    <CardBox>
                        <img/>
                        <div>
                            <h4>Elegir un producto</h4>
                            <p>Escoge una prenda que te gustaria personalizar</p>
                        </div>
                    </CardBox>
                    <CardBox>
                        <img/>
                        <div>
                            <h4>Personalizar</h4>
                            <p>Puedes elegir un diseño y personalizarlo con el color que más te guste</p>
                        </div>
                    </CardBox>
                    <CardBox>
                        <img/>
                        <div>
                            <h4>Recibe tu pedido</h4>
                            <p>Una vez finalizado tu diseño, puedes pedirlo y nosotros te lo enviamos!</p>
                        </div>
                    </CardBox>
                </CardContainer>
            
        </CategorySection>
  );
}

export { Categories };
