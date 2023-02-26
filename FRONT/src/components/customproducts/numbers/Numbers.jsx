import styled from 'styled-components'

const Numbers = ({baseColors, onChangeConfig}) => {
  const ContentNum = styled.div`

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
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  
`
  const Muestra = styled.div`
  width: 120px;
  height: 140px;
  background: #D9D9D9;
box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
border-radius: 8px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
padding: 15px;
cursor: pointer;
`
  const Paleta = styled.div`
  display: grid;
grid-template-columns: repeat(10, 1fr);
grid-template-rows: repeat(2, 1fr);
${'' /* grid-column-gap: 7px;
grid-row-gap: 7px; */}
gap: 2px;
cursor: pointer;
transition: all 0.1s linear;

 & :hover {
    border: 3px solid #000000;
    transform: scale(1.25);

 }
`
const Base = styled(Paleta)`
background-color: ${props => props.color || "#000"};
  width: 35px;
height: 35px;
border: 1px solid #000000;
`

  return (
    <ContentNum>
      <ContentExamples>
        <Muestra onClick={() => onChangeConfig({ numberOption: 0 })}>
          <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1676840298/NOMBRE1_myvlym.svg' />
          <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1676840296/Num1_teyblu.svg' />
        </Muestra>
        <Muestra onClick={() => onChangeConfig({ numberOption: 1 })}>
          <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1676840298/NOMBRE2_eadh1l.svg' />
          <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1676840296/Num2_yrvq8m.svg' />
        </Muestra>
        <Muestra onClick={() => onChangeConfig({ numberOption: 2 })}>
          <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1676840296/NOMBRE3_uw02ci.svg' />
          <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1676840296/Num3_rskrvg.svg' />
        </Muestra>
        <Muestra onClick={() => onChangeConfig({ numberOption: 3 })}>
          <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1676840296/NOMBRE4_wa3wzc.svg' />
          <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1676840296/Num4_wmw6wi.svg' />
        </Muestra>
        <Muestra onClick={() => onChangeConfig({ numberOption: 4 })}>
          <img src='' />
          <img src='' />
        </Muestra>
        <Muestra onClick={() => onChangeConfig({ numberOption: 5 })}>
          <img src='' />
          <img src='' />
        </Muestra>
      </ContentExamples>
      <h2>Color Base</h2>
      <Paleta>
          {baseColors?.map(color => (
            <Base key={color} color={color} onClick={() => onChangeConfig({ numberColor: color })}/>
          ))}
      </Paleta>
    </ContentNum>
  )
}

export { Numbers }
