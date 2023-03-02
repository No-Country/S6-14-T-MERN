import styled from 'styled-components'
import { LinkStyled } from '../export'

const HeroStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: clamp(0.313rem, -0.46rem + 3.86vw, 2.438rem);
    grid-row-gap: 0px;
    justify-content: center; 
    align-items: center;
    margin: clamp(0.938rem, 0.188rem + 3.75vw, 3rem) clamp(2.5rem, 1.324rem + 5.88vw, 7.5rem);
  `

const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.938rem, 0.452rem + 2.43vw, 3rem);
  `

const TitleHero = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: clamp(2.813rem, 1.739rem + 5.37vw, 7.375rem);
  line-height: 91.02%;
  color: #D9FF3D;
  `
const DescriptionHero = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: clamp(0.75rem, 0.485rem + 1.32vw, 1.875rem);
  line-height: 91.02%;
  color: #FFFFFF;
  `
const LinkBuy = styled(LinkStyled)`
    margin: 0 auto;
  `

const SectionImage = styled.div`
  display: flex;
  justify-content: center;
  `
const ImageHero = styled.img`
  width: 700px;
  `
const Hero = () => {
  return (
    <HeroStyled>
      <SectionText>
        <TitleHero>Custom <br />Sports</TitleHero>
        <DescriptionHero>Las camisetas son 100% sublimadas, con diseños personalizados tal cual figuran en las imágenes</DescriptionHero>
        <LinkBuy to='/diseñador'>Comprar</LinkBuy>
      </SectionText>
      <SectionImage>
        <ImageHero src='https://res.cloudinary.com/carina-bosio/image/upload/v1676571483/pngwing_1_f8zd1s.svg' />
      </SectionImage>
    </HeroStyled>
  )
}

export { Hero }
