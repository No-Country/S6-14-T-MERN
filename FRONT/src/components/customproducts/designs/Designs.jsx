import styled from 'styled-components'

const SectionImagesDesign = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin: 1rem 0;
gap:1rem;
z-index: -5;
height: 30rem;
`

const ImageDesign = styled.img`
width: clamp(1.875rem, -0.17rem + 10.23vw, 7.5rem); 
height:clamp(2.188rem, -0.199rem + 11.93vw, 8.75rem);
background: #D9D9D9;
box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
border-radius: 8px;
padding: clamp(0.188rem, 0.074rem + 0.57vw, 0.5rem);
cursor: pointer;



`

const Designs = ({ onChangeConfig }) => {
  return (
    <SectionImagesDesign>
      <ImageDesign src='https://res.cloudinary.com/dwschrksm/image/upload/v1677192194/custom-sports/images/miniaturas/Miniatura1_rbjwab.svg' alt='1' onClick={() => onChangeConfig({ modelOption: 0 })} />
      <ImageDesign src='https://res.cloudinary.com/dwschrksm/image/upload/v1677192192/custom-sports/images/miniaturas/Miniatura2_fpldoq.svg' alt='2' onClick={() => onChangeConfig({ modelOption: 1 })} />
      <ImageDesign src='https://res.cloudinary.com/dwschrksm/image/upload/v1677192192/custom-sports/images/miniaturas/Miniatura3_xjoxog.svg' alt='3' onClick={() => onChangeConfig({ modelOption: 2 })} />
      <ImageDesign src='https://res.cloudinary.com/dwschrksm/image/upload/v1677192192/custom-sports/images/miniaturas/Miniatura4_mylxfw.svg' alt='4' onClick={() => onChangeConfig({ modelOption: 3 })} />
      <ImageDesign src='https://res.cloudinary.com/dwschrksm/image/upload/v1677192192/custom-sports/images/miniaturas/Miniatura5_glok3d.svg' alt='5' onClick={() => onChangeConfig({ modelOption: 4 })} />
      <ImageDesign src='https://res.cloudinary.com/dwschrksm/image/upload/v1677192192/custom-sports/images/miniaturas/Miniatura6_z3f9kt.svg' alt='6' onClick={() => onChangeConfig({ modelOption: 5 })} />
      <ImageDesign src='https://res.cloudinary.com/dwschrksm/image/upload/v1677192192/custom-sports/images/miniaturas/Miniatura7_vbwjjj.svg' alt='7' onClick={() => onChangeConfig({ modelOption: 6 })} />
      <ImageDesign src='https://res.cloudinary.com/dwschrksm/image/upload/v1677192193/custom-sports/images/miniaturas/Miniatura8_dhy41n.svg' alt='8' onClick={() => onChangeConfig({ modelOption: 7 })} />
      <ImageDesign src='https://res.cloudinary.com/dwschrksm/image/upload/v1677192193/custom-sports/images/miniaturas/Miniatura9_p7exzl.svg' alt='9' onClick={() => onChangeConfig({ modelOption: 8 })} />
    </SectionImagesDesign>
  )
}

export { Designs }
