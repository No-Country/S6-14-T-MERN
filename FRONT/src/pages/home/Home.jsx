import { Categories, Examples } from '../../components/export'
import { Hero } from '../../components/hero/Hero'
import { UserProfile } from '../../components/userProfile/userProfile'

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <Examples />
      <UserProfile/>
    </main>
  )
}

export { Home }
