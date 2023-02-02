import logo from '../../assets/logo.png'
import './Header.css'

function Header() {

    function gotoHome(){
        window.scrollTo({
            top:0,
            left:0,
            behavior: 'smooth'

        })
    }

    function gotoAbout(){
        let About = document.getElementById('about__section')
        About.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    function gotoTecnologies(){
        let Tecnologies = document.getElementById('tecnologies__section')
        Tecnologies.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
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