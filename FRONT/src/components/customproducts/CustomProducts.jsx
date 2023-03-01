import styled from 'styled-components'
import './CustomProducts.css'
import { Colors } from './colors/Colors'
import { Numbers } from './numbers/Numbers'
import { Designs } from './designs/Designs'
import Base from './designs/Base'
import Modelo from './designs/Modelo'
import Numero from './designs/Numero'
import { useState } from 'react'

const SectionStyled = styled('section')`
  color: var(--text-two);
  background-color: var(--background-two);
  padding: clamp(3rem, 3vw, 6rem) clamp(1rem,5vw,10rem);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
const Heading = styled('h2')`
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
`
const ProductsUl = styled('ul')`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`
const ProductsLi = styled('li')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  background-color: var(--background-one);
  border-radius: 1rem;
  overflow: hidden;
`

const ProductsImage = styled('img')`
  width: 5rem;
  height: 5rem;
  object-fit: contain;
`
const ProductsText = styled('span')`
  text-align: center;
  color: var(--text-one);
  font-size: 0.875rem;
  background-color: #0047ff;
`
const SectionDiseño = styled.div`
background-color: #ffffff;
display: flex;
flex-direction: row;
min-height: 500px;
height: 40rem;

${'' /* width: 87.375rem; */}
`
const SectionResult = styled.div`
background-color: #d3d3d3;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 65%;
`

const ImagesDefault = styled.div`
${'' /* position: relative; */}
height: 100%;
width: 100%;
padding:clamp(0.313rem, -0.119rem + 2.16vw, 1.5rem) 0;
display: flex; 
flex-direction: column;
`
const Vistas = styled.div`
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
padding: 0rem 0 2rem 0;

`
const Position = styled.span`
font-style: normal;
font-weight: 700;
font-size: clamp(0.938rem, 0.369rem + 2.84vw, 2.5rem);
line-height: 48px;
text-align: center;
letter-spacing: -0.6px;
color: #000000;
width:100%;
`
const SectionOption = styled.div`
border-left: 1px solid #000000;
width: 35%;
display: inline-flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`

const SectionSig = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #090808;

span {
  color: #ffffff;
}
`
const PasosSig = styled.div`
display: flex;
justify-content: center;
gap: 1rem;
margin: 1.5rem 0;
`
const BtnSig = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
margin: 1.5rem 0;
`
const SigText = styled.button`
font-style: normal;
font-weight: 700;
font-size: clamp(0.75rem, 0.477rem + 1.36vw, 1.5rem);
line-height: 29px;
text-align: center;
letter-spacing: -0.6px;
color: #ffffff;
`
const BtnFlecha = styled.button`
width: clamp(0.75rem, 0.341rem + 2.05vw, 1.875rem);
height: clamp(0.75rem, 0.341rem + 2.05vw, 1.875rem);
color: #ffffff;
`
const PasosNumSig = styled.div`
font-style: normal;
font-weight: 700;
font-size: clamp(1rem, 0.545rem + 2.27vw, 2.25rem);
line-height: 44px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
letter-spacing: -0.6px;
color: #000000;
background: #ffffff;
box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
border-radius: 50px;
width: 50px;
height: 50px;

${
  '' /* &:active{
background-color: #D9FF3D;
color: #000000;
} */
}

&:first-child {
  background-color: #d9ff3d;
  color: #000000;
}
`
const ContenedorCamiseta = styled.div`
  position: absolute;
  z-index: ${(props) => props.zIndex || 0};
`

const CustomProducts = () => {
  const [config, setConfig] = useState({
    base: '#000',
    modelColor: '#fff',
    numberColor: '#58585A',
    numberOption: 0,
    modelOption: 0
  })

  const ordenDeCompra = config

  window.localStorage.setItem('camisas', JSON.stringify({ ordenDeCompra }))

  const baseColors = [
    '#DACD4A',
    '#293E7A',
    '#1E263F',
    '#FFFFFF',
    '#6D0B1C',
    '#6B96A6',
    '#4D8FCC',
    '#F392CC',
    '#909195',
    '#58585A',
    '#786092',
    '#62472D',
    '#D56326',
    '#000000',
    '#C72424',
    '#E00086',
    '#54988C',
    '#468146',
    '#263E32',
    '#874997'
  ]

  return (
    <main>
      <SectionStyled>
        <Heading>Personalizar Camisetas</Heading>
        <ProductsUl>
          <ProductsLi>
            <ProductsImage
              src='https://res.cloudinary.com/carina-bosio/image/upload/v1676649279/camisetaBlanca_kknvhb.svg'
              alt='Camiseta Jugador'
            />
            <ProductsText>Jugador</ProductsText>
          </ProductsLi>
          <ProductsLi>
            <ProductsImage
              src='https://res.cloudinary.com/carina-bosio/image/upload/v1676649279/camisetaBlanca_kknvhb.svg'
              alt='Camiseta Arquero'
            />
            <ProductsText>Arquero</ProductsText>
          </ProductsLi>
          <ProductsLi>
            <ProductsImage
              src='https://res.cloudinary.com/carina-bosio/image/upload/v1676649290/pantalonBlanco_kaj7sd.svg'
              alt='Pantalón Jugador'
            />
            <ProductsText>Jugador</ProductsText>
          </ProductsLi>
          <ProductsLi>
            <ProductsImage
              src='https://res.cloudinary.com/carina-bosio/image/upload/v1676649290/pantalonBlanco_kaj7sd.svg'
              alt='Pantalón Arquero'
            />
            <ProductsText>Arquero</ProductsText>
          </ProductsLi>
          <ProductsLi>
            <ProductsImage
              src='https://res.cloudinary.com/carina-bosio/image/upload/v1676649302/mediasBlancas_vnh4kk.svg'
              alt='Medias'
            />
            <ProductsText>Medias</ProductsText>
          </ProductsLi>
        </ProductsUl>
      </SectionStyled>
      {/* <SectionDiseño>
        <SectionResult>

          <ImagesDefault>
            <ContenedorCamiseta>
              <Base fill={config.base} />
            </ContenedorCamiseta>
            <ContenedorCamiseta zIndex={10}>
              <Modelo fill={config.modelColor} option={config.modelOption} />
            </ContenedorCamiseta>
            <ContenedorCamiseta zIndex={20}>
              <Numero fill={config.numberColor} option={config.numberOption} />
            </ContenedorCamiseta>
            <ContenedorCamiseta zIndex={30}>
              <img
                style={{
                  width: '64.9vw',
                  position: 'relative',
                  left: '0.05vw',
                  top: '-0.082vw'

                }}
                src='/img/camiseta-sombra-doble.png'
                alt=''
              />
            </ContenedorCamiseta>

          </ImagesDefault>
          <Vistas>

            <Position>Frente</Position>

            <Position>Espalda</Position>

          </Vistas>
        </SectionResult>
        <SectionOption>
          <div className='tabs'>
            <div class='tab-container'>
              <div id='tab3' class='tab'>
                <a href='#tab3'>Números</a>
                <div class='tab-content'>
                  <Numbers
                    baseColors={baseColors}
                    onChangeConfig={(val) =>
                      setConfig((prev) => ({ ...prev, ...val }))}
                  />
                </div>
              </div>
              <div id='tab2' class='tab'>
                <a href='#tab2'>Colores</a>
                <div class='tab-content'>
                  <Colors
                    baseColors={baseColors}
                    onChangeConfig={(val) =>
                      setConfig((prev) => ({ ...prev, ...val }))}
                  />
                </div>
              </div>
              <div id='tab1' class='tab'>
                <a href='#tab1'>Diseño</a>
                <div class='tab-content'>
                  <Designs
                    onChangeConfig={(val) =>
                      setConfig((prev) => ({ ...prev, ...val }))}
                  />
                </div>
              </div>
            </div>
          </div>
        </SectionOption>
      </SectionDiseño> */}
      {/* <SectionSig>
        <BtnSig>
          <a href=''>
            <SigText>Siguiente</SigText>
          </a>
          <a href=''>
            <BtnFlecha>
              <img
                src='https://res.cloudinary.com/carina-bosio/image/upload/v1676755392/Flecha_vnyn9c.svg'
                alt='Flecha'
              />
            </BtnFlecha>
          </a>
        </BtnSig>
        <PasosSig>
          <PasosNumSig>1</PasosNumSig>
          <hr />
          <PasosNumSig>2</PasosNumSig>
          <hr />
          <PasosNumSig>3</PasosNumSig>
        </PasosSig>
      </SectionSig> */}
    </main>
  )
}

export { CustomProducts }
