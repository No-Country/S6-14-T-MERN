import styled from 'styled-components'
import { Submit } from './Variables'

const Register = styled.div`
width: 24rem;
padding: 70px 0 0 90px;`

const Ul = styled.ul`
padding: 17px;`

// const Li = styled.li`
// `

const SignUp = () => {

  return (
    // <form>
    //   example
    // </form>
    <Register>
    <h2>Registrarse</h2>
    <p>Crearse una cuenta tiene muchos beneficios</p>
    <Ul>
      <Li>Guardar diseños</Li>
      <Li>Seguiemiento de pedidos</Li>
      <Li>Accede a descuentos</Li>
    </Ul>
    <Submit className='registeri' type="submit" value="Registrarse" />
  </Register>
  )
}

export { SignUp }
