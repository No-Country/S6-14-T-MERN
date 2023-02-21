import styled from 'styled-components'

const Colors = () => {
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
  const Base1 = styled(Paleta)`
    background-color:#DACD4A;
    width: 35px;
  height: 35px;
  border: 1px solid #000000;
`
  const Base2 = styled(Paleta)`
    background-color:#293E7A;
    width: 35px;
  height: 35px;
  border: 1px solid #000000;
`
  const Base3 = styled(Paleta)`
    background-color:#1E263F;
    width: 35px;
  height: 35px;
  border: 1px solid #000000;
`
  const Base4 = styled(Paleta)`
    background-color:#FFFFFF;
    width: 35px;
  height: 35px;
  border: 1px solid #000000;
`
  const Base5 = styled(Paleta)`
    background-color:#6D0B1C;
    width: 35px;
  height: 35px;
  border: 1px solid #000000;
`
  const Base6 = styled(Paleta)`
    background-color:#6B96A6;
    width: 35px;
  height: 35px;
  border: 1px solid #000000;
`
  const Base7 = styled(Paleta)`
    background-color:#4D8FCC;
    width: 35px;
  height: 35px;
  border: 1px solid #000000;
`
  const Base8 = styled(Paleta)`
    background-color:#F392CC;
    width: 35px;
  height: 35px;
  border: 1px solid #000000;
`
  const Base9 = styled(Paleta)`
    background-color:#909195;
    width: 35px;
  height: 35px;
  border: 1px solid #000000;
`
  const Base10 = styled(Paleta)`
    background-color:#58585A;
    width: 35px;
  height: 35px;
  border: 1px solid #000000;
`
  const Base11 = styled(Paleta)`
    background-color:#786092;
    width: 35px;
  height: 35px;
    border: 1px solid #000000;
    
`
  const Base12 = styled(Paleta)`
    background-color:#62472D;
    width: 35px;
  height: 35px;
    border: 1px solid #000000;
`
  const Base13 = styled(Paleta)`
    background-color:#D56326;
    width: 35px;
  height: 35px;
    border: 1px solid #000000;
`
  const Base14 = styled(Paleta)`
    background-color:#000000;
    width: 35px;
  height: 35px;
    border: 1px solid #000000;
`
  const Base15 = styled(Paleta)`
    background-color:#C72424;
    width: 35px;
  height: 35px;
    border: 1px solid #000000;
`
  const Base16 = styled(Paleta)`
    background-color:#E00086;
    width: 35px;
  height: 35px;
    border: 1px solid #000000;
`
  const Base17 = styled(Paleta)`
    background-color:#54988C;
    width: 35px;
  height: 35px;
    border: 1px solid #000000;
`
  const Base18 = styled(Paleta)`
    background-color:#468146;
    width: 35px;
  height: 35px;
    border: 1px solid #000000;
`
  const Base19 = styled(Paleta)`
    background-color:#263E32;
    width: 35px;
  height: 35px;
    border: 1px solid #000000;
`
  const Base20 = styled(Paleta)`
    background-color:#874997;
    width: 35px;
  height: 35px;
    border: 1px solid #000000;
`

  return (
    <Content>
      <Paletas>
        <h2>Color Base</h2>
        <Paleta>
          <Base1 />
          <Base2 />
          <Base3 />
          <Base4 />
          <Base5 />
          <Base6 />
          <Base7 />
          <Base8 />
          <Base9 />
          <Base10 />
          <Base11 />
          <Base12 />
          <Base13 />
          <Base14 />
          <Base15 />
          <Base16 />
          <Base17 />
          <Base18 />
          <Base19 />
          <Base20 />
        </Paleta>
        <h2>Color Principal</h2>
        <Paleta>
          <Base1 />
          <Base2 />
          <Base3 />
          <Base4 />
          <Base5 />
          <Base6 />
          <Base7 />
          <Base8 />
          <Base9 />
          <Base10 />
          <Base11 />
          <Base12 />
          <Base13 />
          <Base14 />
          <Base15 />
          <Base16 />
          <Base17 />
          <Base18 />
          <Base19 />
          <Base20 />
        </Paleta>
      </Paletas>
    </Content>
  )
}

export { Colors }
