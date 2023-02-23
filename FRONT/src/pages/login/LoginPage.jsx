import { SignIn } from '../../components/login/SignIn'
import { SignUp } from '../../components/login/SignUp'
import { Containt, H2 } from '../../components/login/Variables'

const LoginPage = () => {
  return (

    <main>
      <H2>Iniciar sesión</H2>
      <Containt>
        <SignIn />
        <SignUp />
      </Containt>
    </main>
  )
}

export { LoginPage }
