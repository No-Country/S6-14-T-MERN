import styled from 'styled-components'
import { Card } from './Card'

const CategorySection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000000;
`

const TitleCat = styled.h2`
    margin: 0;
    font-size: 56px;
    line-height: 62px;
`

const DescCat = styled.h2`
    color: #979797;
`

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    width: 100vw;
    height: 60vh;
`

const Categories = () => {
  return (
    <CategorySection>
      <TitleCat>Categoria</TitleCat>
      <DescCat>descripción</DescCat>
      <CardContainer>
        <Card name='Remeras' />
        <Card name='Pantalones' />
        <Card name='Objeto 3' />
      </CardContainer>
    </CategorySection>
  )
}

export { Categories }
