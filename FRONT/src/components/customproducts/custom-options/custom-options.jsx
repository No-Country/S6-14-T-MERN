import styled from "styled-components";
import React from "react";

const CustomOptionsContainer = styled.div`
div{
  display: flex;
  span{
    width: calc(100%);
    background-color: #E6E3EE;
    height: 4.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.813rem;
    letter-spacing: -0.038rem;
    color: #000000;
    cursor: pointer;
    @media (max-width: 768px){
      font-size: 1rem;
    }
  }
}
`

const CustomOptions = React.memo(({ children }) => {
  const [activePageIndex, setActivePageIndex] = React.useState(0);
  const pages = React.Children.toArray(children);
  const currentPage = pages[activePageIndex];

  const onHandleClickDesings = () => {
    setActivePageIndex(0);
  };
  const onHandleClickColours = () => {
    setActivePageIndex(1);
  };
  const onHandleClickNumbers = () => {
    setActivePageIndex(2);
  };

  const selectedStyle = {
    backgroundColor: "#090808",
    color: "#D9FF3D",
    zIndex: 2,
    border: "3px solid #D9FF3D",
  }

  return (
    <CustomOptionsContainer>
      <div>
        <span
          onClick={onHandleClickDesings}
          style={activePageIndex === 0 ? selectedStyle : null}
        >Diseño</span>
        <span
          onClick={onHandleClickColours}
          style={activePageIndex === 1 ? selectedStyle : null}
        >Colores</span>
        <span
          onClick={onHandleClickNumbers}
          style={activePageIndex === 2 ? selectedStyle : null}
        >Numero</span>
      </div>
      <div>{currentPage}</div>
    </CustomOptionsContainer >
  );
})

export default CustomOptions;