import styled from 'styled-components'

const SectionImagesDesign = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin: 1rem 0;
gap:1rem;
z-index: -5;

`

const ImageDesign = styled.img`
width: 120px;
height:140px;
background: #D9D9D9;
box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
border-radius: 8px;
padding: 0.5rem;

`

const Designs = () => {
  return (
    <SectionImagesDesign>
      <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='1' />
      <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='2' />
      <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='3' />
      <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='4' />
      <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='5' />
      <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='6' />
      <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='7' />
      <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='8' />
      <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='9' />
    </SectionImagesDesign>
  )
}

export { Designs }
