import { SignIn } from "../../components/login/SignIn"
import { SignUp } from "../../components/login/SignUp"

const Login = () => {
  return (
    <main>
      <h2>LOGIN</h2>
      <Containt>
        <SignIn />
        <SignUp />
      </Containt>

    </main>
  )
}

export { Login }
