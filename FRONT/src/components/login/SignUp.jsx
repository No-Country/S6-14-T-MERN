import styled from 'styled-components'
import { Submit } from './Variables'

const Register = styled.div`
width: 24rem;
padding: 70px 0 0 90px;`

const Ul = styled.ul`
padding: 17px;`

const SignUp = () => {

  return (
    // <form>
    //   example
    // </form>
    <Register>
    <h2>Registrarse</h2>
    <p>Crearse una cuenta tiene muchos beneficios</p>
    <Ul>
      <li>Guardar diseños</li>
      <li>Seguiemiento de pedidos</li>
      <li>Accede a descuentos</li>
    </Ul>
    <Submit className='registeri' type="submit" value="Registrarse" />
  </Register>
  )
}

export { SignUp }
