import styled from 'styled-components'

const Hero = () => {
  const SectionHero = styled.section`
   width: 87.375rem;
height: 33.563rem;
left: 0rem;
top: 5rem;
background: #090808;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
margin: 0 auto 5rem;
;

h2{
 
width: 23.063rem;
height: 10.875rem;
left: 11rem;
top: 5.25rem;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 6rem;
line-height: 91.02%;
color: #D9FF3D;
margin:0 0 2rem 8rem;
}

h4{

width: 35.813rem;
height: 4.688rem;
left: 11rem;
top: 17.375rem;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 1.75rem;
line-height: 91.02%;
margin:0 0 0 8rem;
color: #FFFFFF;
}

img{
position: absolute;
width: 35.813rem;
height: 30.813rem;
left: 42.063rem;
top: 6.375rem;
}
`

  return (
    <SectionHero>
      <h2>Custom Sport</h2>
      <h4>Las camisetas son 100% sublimadas, con diseños personalizados tal cual figuran en las imágenes</h4>
      <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1676571483/pngwing_1_f8zd1s.svg' />
    </SectionHero>
  )
}

export { Hero }
