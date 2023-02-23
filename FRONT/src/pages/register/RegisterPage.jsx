import { FormRegister } from '../../components/login/FormRegister'
import StyleRegister from '../../components/login/StyleRegister'
import { Containt, H2 } from '../../components/login/Variables'

const RegisterPage = () => {
  return (
    <main>
      <H2>Registrate</H2>
      <Containt>
        <FormRegister />
        <StyleRegister />
      </Containt>
    </main>
  )
}

export { RegisterPage }
