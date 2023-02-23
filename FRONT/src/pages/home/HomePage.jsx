import Cookies from 'js-cookie'
import { Categories, Examples } from '../../components/export'
import { Hero } from '../../components/hero/Hero'

const HomePage = () => {
  const token = Cookies.get('token')
  console.log({ token })
  return (
    <main>
      <Hero />
      <Categories />
      <Examples />
    </main>
  )
}

export { HomePage }
