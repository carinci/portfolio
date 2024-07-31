import Header from './Header'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import './tailwind.css'
import './style.css'

export default function App() {
  return (
    <div className="font-mono">
      <Header />
      <Hero />
      <About />
      <hr className="border-t-2 border-black" />
      <Projects />
      <Contact />
    </div>
  )
}
