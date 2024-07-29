import './tailwind.css'
import './style.css'
import Header from './Header'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="font-mono">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
