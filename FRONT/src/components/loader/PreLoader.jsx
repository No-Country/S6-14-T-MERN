import { IconPreLoader } from '../export'
import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const reveal = keyframes`
  0% {
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`
const wrap = keyframes`
  0% {
    gap: 25rem;
  }
  100% {
    opacity: 1;
    gap: 1rem;
  }
`
const close = keyframes`
  0%{
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  100%{
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
  }
`
const PreLoaderStyled = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: var(--background-one);
  animation: ${close} 1500ms forwards ease-in 2500ms;
`
const WrapperLogo = styled('div')`
  animation: ${reveal} 2500ms forwards ease-in-out;
`
const WrapperSpan = styled('div')`
  display: flex;
  opacity: 0;
  animation: ${wrap} 2000ms forwards cubic-bezier(0.24,-0.67,0.01,0.8) 500ms;

  @media screen and (max-width: 30rem) {
    & {
      display: none;
    }
  }
`
const Span = styled('span')`
  color: var(--bg-component-one);
  font-size: clamp(1rem, 2vw, 4rem);
  font-weight: bold;
`
const PreLoader = () => {
  const [show, updateShow] = useState(true)

  useEffect(() => {
    const showPreLoader = setTimeout(() => updateShow(false), 4000)
    return () => clearTimeout(showPreLoader)
  }, [])

  return show &&
    <PreLoaderStyled>
      <WrapperLogo>
        <IconPreLoader />
      </WrapperLogo>
      <WrapperSpan>
        <Span>@</Span>
        <Span>C</Span>
        <Span>U</Span>
        <Span>S</Span>
        <Span>T</Span>
        <Span>O</Span>
        <Span>M</Span>
        <Span>_</Span>
        <Span>S</Span>
        <Span>P</Span>
        <Span>O</Span>
        <Span>R</Span>
        <Span>T</Span>
        <Span>S</Span>
      </WrapperSpan>
    </PreLoaderStyled>
}

export { PreLoader }
