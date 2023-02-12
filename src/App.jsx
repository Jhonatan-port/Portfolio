
import About from './Sections/About'
import Header from './Components/Header'
import Home from './Sections/Home'
import Projects from './Sections/Projects'
import Tecnologies from './Sections/Tecnologies'

function App() {

  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Tecnologies/>
      <Projects/>
    </div>
  )
}

export default App
