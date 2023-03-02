import styled from 'styled-components'

const ContentNum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 1rem;
  padding: 1rem;

    h2{
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--text-two);
  }
`
const ContentExamples = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
const Muestra = styled.div`
  width: 25%;
  box-shadow: 0.1875rem 0.1875rem 0.1875rem rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  cursor: pointer;
`
const Paleta = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: border 100ms, transform 100ms ease-in-out;

  & :hover {
    border: 0.1875rem solid #000000;
    transform: scale(1.25);
  }
`
const Base = styled(Paleta)`
  background-color: ${props => props.color || '#000'};
  width: 2.25rem;
  height: 2.25rem;
  border: 0.0625rem solid #000000;
`
const Numbers = ({ baseColors, onChangeConfig }) => {
  return (
    <ContentNum>
      <ContentExamples>
        <Muestra onClick={() => onChangeConfig({ numberOption: 0 })}>
          <img src='https://res.cloudinary.com/dwschrksm/image/upload/v1677683919/custom-sports/images/miniaturas/Miniatura_numero1_duhbis.svg' />
        </Muestra>
        <Muestra onClick={() => onChangeConfig({ numberOption: 1 })}>
          <img src='https://res.cloudinary.com/dwschrksm/image/upload/v1677683919/custom-sports/images/miniaturas/Miniatura_numero2_xip0lo.svg' />
        </Muestra>
        <Muestra onClick={() => onChangeConfig({ numberOption: 2 })}>
          <img src='https://res.cloudinary.com/dwschrksm/image/upload/v1677683919/custom-sports/images/miniaturas/Miniatura_numero3_n1s6wf.svg' />
        </Muestra>
        <Muestra onClick={() => onChangeConfig({ numberOption: 3 })}>
          <img src='https://res.cloudinary.com/dwschrksm/image/upload/v1677683919/custom-sports/images/miniaturas/Miniatura_numero4_eu2fe6.svg' />
        </Muestra>
        <Muestra onClick={() => onChangeConfig({ numberOption: 4 })}>
          <img src='https://res.cloudinary.com/dwschrksm/image/upload/v1677683919/custom-sports/images/miniaturas/Miniatura_numero5_rogrna.svg' />
        </Muestra>
        <Muestra onClick={() => onChangeConfig({ numberOption: 5 })}>
          <img src='https://res.cloudinary.com/dwschrksm/image/upload/v1677683919/custom-sports/images/miniaturas/Miniatura_numero6_tfht7s.svg' />
        </Muestra>
        {/* <Muestra onClick={() => onChangeConfig({ numberOption: 4 })}>
          <img src='' />
          <img src='' />
        </Muestra>
        <Muestra onClick={() => onChangeConfig({ numberOption: 5 })}>
          <img src='' />
          <img src='' />
        </Muestra> */}
      </ContentExamples>
      <h2>Color Base</h2>
      <Paleta>
        {baseColors?.map(color => (
          <Base key={color} color={color} onClick={() => onChangeConfig({ numberColor: color })} />
        ))}
      </Paleta>
    </ContentNum>
  )
}

export { Numbers }
