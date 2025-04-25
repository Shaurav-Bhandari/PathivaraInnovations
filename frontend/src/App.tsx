
import Hero from './components/Hero'
import {About} from "./components/About.tsx";
import {Navbar} from "./components/Navbar.tsx";
import {Features} from "./components/Features.tsx";
const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>

        <Navbar />
        <Hero />
        <About />
        <Features/>
    </main>
  )
}

export default App