import styled from 'styled-components'

const Paletas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  h2{
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--text-two);
  }
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
const Colors = ({ baseColors, onChangeConfig }) => {
  return (
    <Paletas>
      <h2>Color Base</h2>
      <Paleta>
        {baseColors?.map(color => (
          <Base key={color} color={color} onClick={() => onChangeConfig({ base: color })} />
        ))}
      </Paleta>
      <h2>Color Principal</h2>
      <Paleta>
        {baseColors.map((color) => (
          <Base key={color} color={color} onClick={() => onChangeConfig({ modelColor: color })} />
        ))}
      </Paleta>
    </Paletas>
  )
}

export { Colors }
