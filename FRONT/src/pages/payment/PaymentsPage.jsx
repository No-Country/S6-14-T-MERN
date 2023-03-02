import TotalCompra from '../../components/orders/TotalCompra'
import PayPalButton from '../../buttons/PaypalButton'
import { Steps } from '../../components/steps/Steps'

const PaymentsPage = () => {
  return (
    <main>
      <TotalCompra />
      <PayPalButton />
      <Steps two three />
    </main>
  )
}

export { PaymentsPage }
