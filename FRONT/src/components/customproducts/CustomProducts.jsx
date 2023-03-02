import styled from 'styled-components'
import { useState } from 'react'
import { Colors, Designs, Numbers } from './export'
import Base from './designs/Base'
import Modelo from './designs/Modelo'
import Numero from './designs/Numero'
import { Steps } from '../export'
import { Link } from 'react-router-dom'

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
  gap: clamp(1.5rem, 3vw, 6rem);
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
const WrapperCustomizer = styled('div')`
  display: grid;
  grid-template: 
  "models options" 90vh
  "next next" auto
  / 2fr 1fr;

 @media screen and (max-width: 64rem) {
    grid-template: 
    "models" 70vw
    "options" auto
    "next" auto
    / 1fr;
 }
`
const WrapperModels = styled('div')`
  background-color: var(--background-three);
  grid-area: models;
  position: relative;
  overflow: hidden;

  & > div {
    width: 100%;
  }
`
const WrapperOptions = styled('div')`
  grid-area: options;
  background-color: var(--background-two);
`
const WrapperTabs = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: var(--background-one);
`
const Tabs = styled('button')`
  padding: clamp(.5rem, 1vw, 2rem) clamp(1rem, 2vw, 4rem);
  ${({ isActive }) => isActive && 'color: var(--bg-component-one)'}
`
const ContenedorCamiseta = styled.div`
  position: absolute;
  z-index: ${(props) => props.zIndex || 0};
`
const LinkNext = styled(Link)`
  grid-area: next;
  justify-self: center;
  color: var(--text-two);
  border-radius: 3rem;
  background-color: var(--bg-component-one);
  margin: 1rem 0;
  padding: 0.5rem 3rem;
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

  const [options, updateOptions] = useState({
    diseño: true,
    colores: false,
    numero: false
  })

  const handleOnOptions = (option) => {
    updateOptions({
      diseño: false,
      colores: false,
      numero: false,
      [option]: true
    })
  }

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
      <WrapperCustomizer>
        <WrapperModels>
          <ContenedorCamiseta>
            <Base fill={config.base} />
          </ContenedorCamiseta>
          <ContenedorCamiseta zIndex={10}>
            <Modelo fill={config.modelColor} option={config.modelOption} />
          </ContenedorCamiseta>
          <ContenedorCamiseta zIndex={20}>
            <Numero fill={config.numberColor} option={config.numberOption} />
          </ContenedorCamiseta>
        </WrapperModels>
        <WrapperOptions>
          <WrapperTabs>
            <Tabs isActive={options.diseño} onClick={() => handleOnOptions('diseño')}>Diseño</Tabs>
            <Tabs isActive={options.colores} onClick={() => handleOnOptions('colores')}>Colores</Tabs>
            <Tabs isActive={options.numero} onClick={() => handleOnOptions('numero')}>Números</Tabs>
          </WrapperTabs>
          {options.diseño &&
            <Designs
              onChangeConfig={(val) => setConfig((prev) => ({ ...prev, ...val }))}
            />}
          {options.colores &&
            <Colors
              baseColors={baseColors}
              onChangeConfig={(val) =>
                setConfig((prev) => ({ ...prev, ...val }))}
            />}
          {options.numero &&
            <Numbers
              baseColors={baseColors}
              onChangeConfig={(val) =>
                setConfig((prev) => ({ ...prev, ...val }))}
            />}
        </WrapperOptions>
        <LinkNext to='/order'>Siguiente</LinkNext>
      </WrapperCustomizer>
      <Steps />
    </main>
  )
}

export { CustomProducts }
