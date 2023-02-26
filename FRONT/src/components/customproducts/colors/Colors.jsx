import styled from 'styled-components'

const Colors = ({ baseColors, onChangeConfig}) => {
  const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  


  h2{
    font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
margin-top: 40px;
margin-bottom: 20px;

letter-spacing: -0.6px;
${'' /* margin-bottom: 15px; */}

color: #000000;
  }
`

  const Paletas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${'' /* margin-bottom: 100px; */}



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
console.log(baseColors)
  return (
    <Content>
      <Paletas>
        <h2>Color Base</h2>
        <Paleta>
          {baseColors?.map(color => (
            <Base key={color} color={color} onClick={() => onChangeConfig({ base: color })}/>
          ))}
        </Paleta>
        <h2>Color Principal</h2>
        <Paleta>
          {baseColors.map((color) => (
            <Base color={color} onClick={() => onChangeConfig({ modelColor: color})} />
          ))}
        </Paleta>
      </Paletas>
    </Content>
  )
}

export { Colors }
