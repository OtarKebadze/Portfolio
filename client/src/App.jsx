import './App.css'
import { PersonaProvider } from './context/PersonaProvider'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <PersonaProvider>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </PersonaProvider>
  )
}

export default App