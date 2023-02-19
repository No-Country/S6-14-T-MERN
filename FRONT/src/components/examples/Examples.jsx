import styled from 'styled-components'

const Examples = () => {
  const SectionExamples = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #080808;
    padding: 2rem;
    width: 87.375rem;

    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 3.5rem;
      line-height: 3.875rem;
      text-align: center;
      letter-spacing: -0.15rem;
      margin-bottom: 1.188rem;
      color: #FFFFFF;

    }

    h4 {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.75rem;
      letter-spacing: 0.025rem;
      text-align: center;
      margin-bottom: 4rem;
      color: #FFFFFF;
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
      background: #0047FF;
border-radius: 10px;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      
  
      width: 100%;
      height: 100%;

      img {
        width: 23rem;
        height: 32.563rem;      
        ${'' /* width: 30%;
        height: 100%; */}
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
      }
    }
  `

  return (
    <SectionExamples>
      <h2>Ejemplos</h2>
      <h4>Descripción</h4>
      <button>Ver más</button>
      <div>
        <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1676600429/camisetas__2_-removebg-preview_nijz4d.png' />
        <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1676600432/camisetas__3_-removebg-preview_nblrj6.png' />
        <img src='https://res.cloudinary.com/carina-bosio/image/upload/v1676600438/camisetas__4_-removebg-preview_vdj08c.png' />
      </div>
    </SectionExamples>
  )
}

export { Examples }
