import background from './gif2.gif'
import Git_logo from './Socials/Github.png'
import Linkedin_logo from './Socials/Linkedin.png'
import './Home.css'
import { gotoAbout } from '../../Hooks/GoTo'

import React from 'react'

const Home = () => {


    return (
        <section className=''>
            <img src={background} alt="Backfround portfolio" className='background' />
            <div className='informacoes__basicas home'>
                <h1>JHONATAN DOS SANTOS</h1>
                <h2 className='animacao'>Desenvolvedor WEB</h2>
                <div className='social'>
                    <a href="https://github.com/Jhonatan-port" target='_blank'>
                        <div className='Social__div'>
                            <img src={Git_logo} alt="Logo Github" />
                            <p>Github</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/jhonatan-dos-santos-210852208/" target='_blank'>
                        <div className='Social__div'>
                            <img src={Linkedin_logo} alt="Logo linkedin" />
                            <p>Linkedin</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='transition__bg'>
                <a onClick={gotoAbout}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    className="bi bi-chevron-down text-white text-center w-full" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
                </a>
            </div>
        </section>
    )
}

export default Home
