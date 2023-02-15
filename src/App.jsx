
import About from './Sections/About'
import Header from './Components/Header'
import Home from './Sections/Home'
import Projects from './Sections/Projects'
import Tecnologies from './Sections/Tecnologies'
import { ThemeProvider } from './Hooks/ThemeContext'
import AlterTheme from './Components/ActionButtons/AlterTheme'

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <Home />
        <About />
        <Tecnologies />
        <Projects />
        <AlterTheme/>
      </ThemeProvider>
    </div>
  )
}

export default App
