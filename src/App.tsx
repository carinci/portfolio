import './tailwind.css'
import './style.css'
import Header from './Header'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Hero from './sections/Hero'

export default function App() {
  return (
    <div className="font-mono">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
