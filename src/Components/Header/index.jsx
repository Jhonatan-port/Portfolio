import logo from '../../assets/logo.png'
import './Header.css'
import { gotoAbout, gotoHome, gotoTecnologies } from '../../Hooks/GoTo'

function Header() {


    return (
        <header className='cabecalho'>
            <img src={logo} alt="Logo JS" className='logo' />

            <div className='topicos'>
                <a onClick={gotoHome}>
                    Home
                </a>
                <a onClick={gotoAbout}>
                    Sobre mim
                </a>
                <a onClick={gotoTecnologies}>
                    Tecnologias
                </a>
            </div>
        </header>
    )
}


export default Header