import Numero1 from './numero1'
import Numero2 from './numero2'
import Numero3 from './numero3'
import Numero4 from './numero4'
import Numero5 from './numero5'
import Numero6 from './numero6'

const numeros = [
  Numero1,
  Numero2,
  Numero3,
  Numero4,
  Numero5,
  Numero6
]

const Numero = ({ option = 0, ...props }) => {
  const NumeroSeleccionado = numeros[option] || numeros[0]
  return (
    <NumeroSeleccionado {...props} />
  )
}

export default Numero
