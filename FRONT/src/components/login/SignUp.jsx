import styled from 'styled-components'
import { Submit } from './Variables'

const Register = styled.div`
width: 24rem;
padding: 20px 0 0 90px;`

const Ul = styled.ul`
padding: 17px;`

const Li = styled.li`
list-style: disc;
`

const SignUp = () => {
  return (
    // <form>
    //   example
    // </form>
    <Register>
      <h2><strong>Registrarse</strong></h2>
      <p>Crearse una cuenta tiene muchos beneficios</p>
      <Ul>
        <Li>Guardar diseños</Li>
        <Li>Seguiemiento de pedidos</Li>
        <Li>Accede a descuentos</Li>
      </Ul>
      <Submit type='submit' value='Registrarse' />
    </Register>
  )
}

export { SignUp }
