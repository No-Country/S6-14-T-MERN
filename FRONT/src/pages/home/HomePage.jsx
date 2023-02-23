import Cookies from 'js-cookie'
import { Categories, Examples } from '../../components/export'
import { Hero } from '../../components/hero/Hero'

const Home = () => {
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

export { Home }
