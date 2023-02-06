import './Footer.css'
import { FiGithub, FiLinkedin  } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='footer'>
      <h4>Pagina desenvolvida por:</h4>
      <p>Jhonatan dos Santos</p>
      <nav>
        <a href="https://www.linkedin.com/in/jhonatan-dos-santos-210852208/" target='_blank'><FiLinkedin/> </a>
        <a href="https://github.com/Jhonatan-port" target='_blank'><FiGithub/></a>
      </nav>
    </div>
  )
}

export default Footer
