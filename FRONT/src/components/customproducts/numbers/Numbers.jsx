import styled from 'styled-components'

const ContentNum = styled.div`
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
width: 100%;
height: 100%;
  h2{
  font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
margin-top: 50px;
margin-bottom: 20px;
letter-spacing: -0.6px;
${'' /* margin-bottom: 15px; */}
color: #000000;
}
`
const ContentExamples = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
gap: 10px;
width: 100%;
`
const Muestra = styled.div`
width: 26.66%;
height: auto;
background: #D9D9D9;
box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
border-radius: 8px;
/* display: flex;
flex-direction: column;
justify-content: center;
align-items: center; */
/* gap: 15px;
padding: 15px; */
cursor: pointer;
`
const Paleta = styled.div`
width: 21.875rem;
display: flex;
flex-wrap: wrap;
cursor: pointer;
transition: all 0.1s linear;
& :hover {
  border: 3px solid #000000;
  transform: scale(1.25);
}
`
const Base = styled(Paleta)`
background-color: ${props => props.color || '#000'};
width: 35px;
height: 35px;
border: 1px solid #000000;
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