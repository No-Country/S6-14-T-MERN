import { SignIn } from "../../components/login/SignIn"
import { SignUp } from "../../components/login/SignUp"
import { Containt } from "../../components/login/Variables"

const Login = () => {
  return (

    <main>
      <h2>Iniciar sesión</h2>
      <Containt>
        <SignIn />
        <SignUp />
      </Containt>
    </main>
  )
}

export { Login }
