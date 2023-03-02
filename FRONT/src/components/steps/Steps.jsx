import styled from 'styled-components'

const WrapperSteps = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`
const StepButton = styled('button')`
  color: var(--text-two);
  font-weight: 600;
  border-radius: 100%;
  background-color: var(--background-three);
  ${({ isActive }) => isActive && 'background-color: var(--bg-component-one);'}
  padding: 0.5rem 1rem;
`
const StepLine = styled('span')`
  height: 0.125rem;
  width: clamp(3rem, 6.25vw, 12.5rem);
  background-color: var(--background-three);
  ${({ isActive }) => isActive && 'background-color: var(--bg-component-one);'}
`
const Steps = ({ two, three }) => {
  return (
    <WrapperSteps>
      <StepButton isActive>1</StepButton>
      <StepLine isActive />
      <StepButton isActive={two}>2</StepButton>
      <StepLine isActive={two} />
      <StepButton isActive={three}>3</StepButton>
    </WrapperSteps>
  )
}

export { Steps }
