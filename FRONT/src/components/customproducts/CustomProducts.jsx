import styled from "styled-components";
import "./CustomProducts.css";
import { Colors } from "./colors/Colors";
import { Numbers } from "./numbers/Numbers";
import { Designs } from "./designs/Designs";
import Base from "./designs/Base";
import Modelo from "./designs/Modelo";
import Numero from "./designs/Numero";
import { useState } from "react";

const CustomProducts = () => {
  const Interfaz = styled.div`
    width: 99.4vw;
    height: auto;

    hr {
      height: 3px;
      width: 115px;
      background-color: #ffffff;
      margin-top: 20px;
    }
  `;
  const SectionHeader = styled.div`
    ${"" /* width: 87.375rem; */}
    ${"" /* height:300px; */}
background-color: #090808;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  `;
  const TituloCustomProduct = styled.h1`
    ${"" /* width: 500px; */}
    ${"" /* height: 48px; */}
${"" /* font-family: 'Inter'; */}
font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    letter-spacing: -0.6px;
    color: #ffffff;
  `;
  const SelectCustom = styled.div`
    margin-top: 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
  `;
  const SelectProduct = styled.div`
    width: 80px;
    height: 70px;
    margin-bottom: 3rem;
  `;

  const ImgSelectCamiseta = styled.img`
    background: #ffffff;
    border-radius: 8px 8px 0px 0px;
    padding: 0.8rem;
  `;
  const ImgSelect = styled.img`
    ${
      "" /* width: 50px;
height: 65px; */
    }
    background: #FFFFFF;
    border-radius: 8px 8px 0px 0px;
    padding: 0.3rem;
  `;
  const TextSelect = styled.div`
    width: 80px;
    background-color: #0047ff;
    border-radius: 0px 0px 8px 8px;
    ${"" /* font-family: 'Inter'; */}
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.6px;
    color: #ffffff;
  `;

  const SectionDiseño = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    min-height: 500px;
    ${"" /* width: 87.375rem; */}
  `;
  const SectionResult = styled.div`
    background-color: #d3d3d3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 65%;
  `;
  const SectionOption = styled.div`
    border-left: 1px solid #000000;
    width: 35%;
  `;
  const Switch = styled.label`
    width: 60px;
    height: 25px;
    position: relative;

    .switch input {
      display: none;
    }

    .slider {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 30px;
      box-shadow: 0 0 0 2px #777, 0 0 4px #777;
      cursor: pointer;
      border: 4px solid transparent;
      overflow: hidden;
      transition: 0.2s;
    }
    .slider:before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background-color: #777;
      border-radius: 30px;
      transform: translateX(-30px);
      /*translateX(-(w-h))*/
      transition: 0.2s;
    }
    input:checked + .slider:before {
      transform: translateX(30px);
      /*translateX(w-h)*/
      background-color: #d9ff3d;
    }

    input:checked + .slider {
      box-shadow: 0 0 0 2px #d9ff3d, 0 0 8px #d9ff3d;
    }

    .switch200 .slider:before {
      width: 200%;
      transform: translateX(-82px);
      /*translateX(-(w-h))*/
      background-color: #d9ff3d;
    }

    .switch200 input:checked + .slider:before {
      background-color: #d9ff3d;
    }

    .switch200 input:checked + .slider {
      box-shadow: 0 0 0 2px red, 0 0 8px #d9ff3d;
    }
  `;
  const ImagesDefault = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
  `;
  const Position = styled.span`
    ${"" /* font-family: 'Inter'; */}
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    letter-spacing: -0.6px;
    color: #000000;
  `;

  const SectionSig = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #090808;

    span {
      color: #ffffff;
    }
  `;
  const PasosSig = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1.5rem 0;
  `;
  const BtnSig = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin: 1.5rem 0;
  `;
  const SigText = styled.button`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: -0.6px;
    color: #ffffff;
  `;
  const BtnFlecha = styled.button`
    width: 30px;
    height: 30px;
    color: #ffffff;
  `;
  const PasosNumSig = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: -0.6px;
    color: #000000;
    background: #ffffff;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    width: 50px;
    height: 50px;

    ${
      "" /* &:active{
  background-color: #D9FF3D;
  color: #000000;
} */
    }

    &:first-child {
      background-color: #d9ff3d;
      color: #000000;
    }
  `;
  const ContenedorCamiseta = styled.div`
    position: absolute;
    z-index: ${(props) => props.zIndex || 0};
  `;

  const [config, setConfig] = useState({
    base: "#000",
    modelColor: "#fff",
    numberColor: "#58585A",
    numberOption: 0,
    modelOption: 0,
  });

  const ordenDeCompra = config;

  localStorage.setItem("camisas",JSON.stringify({ordenDeCompra}))

  const baseColors = [
    "#DACD4A",
    "#293E7A",
    "#1E263F",
    "#FFFFFF",
    "#6D0B1C",
    "#6B96A6",
    "#4D8FCC",
    "#F392CC",
    "#909195",
    "#58585A",
    "#786092",
    "#62472D",
    "#D56326",
    "#000000",
    "#C72424",
    "#E00086",
    "#54988C",
    "#468146",
    "#263E32",
    "#874997",
  ];

  

  return (
    <Interfaz>
      <SectionHeader>
        <TituloCustomProduct>Personalizar Camisetas</TituloCustomProduct>
        <SelectCustom>
          <SelectProduct>
            <ImgSelectCamiseta
              src="https://res.cloudinary.com/carina-bosio/image/upload/v1676649279/camisetaBlanca_kknvhb.svg"
              alt="Camiseta Jugador"
            />
            <TextSelect>Jugador</TextSelect>
          </SelectProduct>
          <SelectProduct>
            <ImgSelectCamiseta
              src="https://res.cloudinary.com/carina-bosio/image/upload/v1676649279/camisetaBlanca_kknvhb.svg"
              alt="Camiseta Arquero"
            />
            <TextSelect>Arquero</TextSelect>
          </SelectProduct>
          <SelectProduct>
            <ImgSelect
              src="https://res.cloudinary.com/carina-bosio/image/upload/v1676649290/pantalonBlanco_kaj7sd.svg"
              alt="Pantalón Jugador"
            />
            <TextSelect>Jugador</TextSelect>
          </SelectProduct>
          <SelectProduct>
            <ImgSelect
              src="https://res.cloudinary.com/carina-bosio/image/upload/v1676649290/pantalonBlanco_kaj7sd.svg"
              alt="Pantalón Arquero"
            />
            <TextSelect>Arquero</TextSelect>
          </SelectProduct>
          <SelectProduct>
            <ImgSelect
              src="https://res.cloudinary.com/carina-bosio/image/upload/v1676649302/mediasBlancas_vnh4kk.svg"
              alt="Medias"
            />
            <TextSelect>Medias</TextSelect>
          </SelectProduct>
        </SelectCustom>
      </SectionHeader>
      <SectionDiseño>
        <SectionResult>
          <div>
            <span>Agregar</span>
            <Switch className="switch">
              <input type="checkbox" />
              <span class="slider" />
            </Switch>
          </div>
          <ImagesDefault>
            <ContenedorCamiseta>
              <Base fill={config.base} />
            </ContenedorCamiseta>
            <ContenedorCamiseta zIndex={10}>
              <Modelo fill={config.modelColor} option={config.modelOption}/>
            </ContenedorCamiseta>
            <ContenedorCamiseta zIndex={20}>
              <Numero fill={config.numberColor} option={config.numberOption}/>
            </ContenedorCamiseta>
            <ContenedorCamiseta zIndex={30}>
              <img
                style={{
                  width: "64.9vw",
                  position: "relative",
                }}
                src="/img/camiseta-sombra-doble.png"
                alt=""
              />
            </ContenedorCamiseta>
            {/* <div>
              <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='Frente' />
              <Position>Frente</Position>
            </div>
            <div>
              <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651271/espalda_tes0th.svg' alt='Espalda' />
              <Position>Espalda</Position>
            </div> */}
          </ImagesDefault>
        </SectionResult>
        <SectionOption>
          <div class="tabs">
            <div class="tab-container">
              <div id="tab3" class="tab">
                <a href="#tab3">Números</a>
                <div class="tab-content">
                  <Numbers
                    baseColors={baseColors}
                    onChangeConfig={(val) =>
                      setConfig((prev) => ({ ...prev, ...val }))
                    }
                  />
                </div>
              </div>
              <div id="tab2" class="tab">
                <a href="#tab2">Colores</a>
                <div class="tab-content">
                  <Colors
                    baseColors={baseColors}
                    onChangeConfig={(val) =>
                      setConfig((prev) => ({ ...prev, ...val }))
                    }
                  />
                </div>
              </div>
              <div id="tab1" class="tab">
                <a href="#tab1">Diseño</a>
                <div class="tab-content">
                  {/* <SectionImagesDesign>
                    <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='1' />
                    <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='2' />
                    <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='3' />
                    <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='4' />
                    <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='5' />
                    <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='6' />
                    <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='7' />
                    <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='8' />
                    <ImageDesign src='https://res.cloudinary.com/carina-bosio/image/upload/v1676651263/frente_hdm9js.svg' alt='9' />
                  </SectionImagesDesign> */}
                  <Designs 
                    onChangeConfig={(val) =>
                      setConfig((prev) => ({ ...prev, ...val }))
                    }/>
                </div>
              </div>
            </div>
          </div>
        </SectionOption>
      </SectionDiseño>
      <SectionSig>
        <BtnSig>
          <a href="">
            <SigText>Siguiente</SigText>
          </a>
          <a href="">
            <BtnFlecha>
              <img
                src="https://res.cloudinary.com/carina-bosio/image/upload/v1676755392/Flecha_vnyn9c.svg"
                alt="Flecha"
              />
            </BtnFlecha>
          </a>
        </BtnSig>
        <PasosSig>
          <PasosNumSig>1</PasosNumSig>
          <hr />
          <PasosNumSig>2</PasosNumSig>
          <hr />
          <PasosNumSig>3</PasosNumSig>
        </PasosSig>
      </SectionSig>
    </Interfaz>
  );
};

export { CustomProducts };
