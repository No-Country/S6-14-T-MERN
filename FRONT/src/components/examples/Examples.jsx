import styled from 'styled-components'

const Examples = () => {
  const SectionExamples = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 3.5rem;
      line-height: 3.875rem;
      text-align: center;
      letter-spacing: -0.15rem;
      margin-bottom: 1.188rem;


    }

    h4 {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.75rem;
      letter-spacing: 0.025rem;
      text-align: center;
      margin-bottom: 4rem;
    }

    button {
      width: 11.938rem;
      height: 3.125rem;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.375rem;
      letter-spacing: -0.025rem;
      text-align: center;
      border: 1px solid #0d0d0d;
      margin-bottom: 3rem;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
  
      width: 100%;
      height: 100%;

      img {
        ${'' /* width: 23rem;
        height: 32.563rem; */}
        width: 30%;
        height: 100%;
      }
    }
  `

  const ImgCenter = styled.img`
  margin-bottom: 6rem;
  `

  return (
    <SectionExamples>
      <h2>Ejemplos</h2>
      <h4>Descripción</h4>
      <button>Ver más</button>
      <div>
        <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1675902877/D_NQ_NP_648350-MLA53619239208_022023-O_m576mu.webp' />
        <ImgCenter src='https://res.cloudinary.com/carina-bosio/image/upload/v1675902928/D_NQ_NP_724474-MLA50512325834_062022-O_oghwvw.webp' />
        <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1675902942/D_NQ_NP_934371-MLA50213371934_062022-O_ixzl7p.webp' />
      </div>
    </SectionExamples>
  )
}

export { Examples }
