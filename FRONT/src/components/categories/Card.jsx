import React from 'react';
import styled from 'styled-components';

const ProductCard = styled.div `
    display:flex;
    flex-direction: column;
    width: 370px;
    height: 400px;
`
const CardImg = styled.img `
    width: 370px;
    height: 319.76px;
    background-color: #C4C4C4;
`
const CardTitle = styled.h3 `
    font-size: 22px;
    line-heigth: 28px;
    text-align: center;
    letter-spacing: -0.4px;
` 

export const Card = ({ name }) => {
    return (
        <ProductCard>
            <CardImg/>
            <CardTitle>{name}</CardTitle>
        </ProductCard>
    );
}

