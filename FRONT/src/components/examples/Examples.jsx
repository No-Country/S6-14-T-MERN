import styled from 'styled-components'
import { LinkStyled } from '../export'

const SectionExamples = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #080808;
    padding: 2rem;

    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 3.5rem;
      line-height: 3.875rem;
      text-align: center;
      letter-spacing: -0.15rem;
      margin-bottom: 1.188rem;
      color: #FFFFFF;

    }

    h4 {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.75rem;
      letter-spacing: 0.025rem;
      text-align: center;
      margin-bottom: 4rem;
      color: #FFFFFF;
    }
`
const Images = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    
     img {
    margin: 30px;
    padding-top: 15px;
    width: clamp(6.25rem, 0.159rem + 30.45vw, 23rem);
    border-radius: 16px;
    justify-items: center;
    background: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.50) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    z-index: 1;
  
      &:hover {
      transform: scale(1.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  }
`
const Examples = () => {
  return (
    <SectionExamples>
      <h2>Ejemplos</h2>
      <h4>Descripción</h4>
      <LinkStyled to='/diseñador'>Ver mas</LinkStyled>
      <Images>
        <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1676600429/camisetas__2_-removebg-preview_nijz4d.png' />
        <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1676600432/camisetas__3_-removebg-preview_nblrj6.png' />
        <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1676600438/camisetas__4_-removebg-preview_vdj08c.png' />
      </Images>
    </SectionExamples>
  )
}

export { Examples }
