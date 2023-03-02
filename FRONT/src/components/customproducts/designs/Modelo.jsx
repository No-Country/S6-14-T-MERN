import Modelo1 from './modelo1'
import Modelo2 from './modelo2'
import Modelo3 from './modelo3'
import Modelo4 from './modelo4'
import Modelo5 from './modelo5'
import Modelo6 from './modelo6'
import Modelo7 from './modelo7'
import Modelo8 from './modelo8'
import Modelo9 from './modelo9'

const modelos = [
  Modelo1,
  Modelo2,
  Modelo3,
  Modelo4,
  Modelo5,
  Modelo6,
  Modelo7,
  Modelo8,
  Modelo9
]

const Modelo = ({ option = 0, ...props }) => {
  const ModeloSeleccionado = modelos[option] || modelos[0]
  return (
    <ModeloSeleccionado {...props} />
  )
}

export default Modelo
