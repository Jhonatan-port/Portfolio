import './About.css'

import dev from '../../assets/dev.svg'

const About = () => {
    return (
        <section className='secondary__section about__section' id='about__section'>
            <h1>Bem vindo!</h1>
            <div>
                <p>
                    Olá, meu nome é Jhonatan dos Santos e sou um desenvolvedor web com experiência em JavaScript, Python, TailwindCSS e HTML+CSS. Desde que comecei a trabalhar com tecnologia, sempre me interessei por soluções web que pudessem atender as necessidades dos usuários de maneira eficiente e intuitiva. Além disso, sou um grande fã de games e séries, e adoro passar meu tempo livre explorando novos títulos.
                    <br />
                    Estou sempre estudando e aplicando meus conhecimentos constantemente para atingir meu objetivo de me tornar um desenvolvedor web de destaque no mercado. Acredito que a chave para o sucesso é a dedicação e a busca constante por aprendizado. Por isso, me dedico diariamente a me aprimorar e aperfeiçoar minhas habilidades técnicas, a fim de oferecer soluções inovadoras e eficientes para os desafios enfrentados pelos usuários.
                    <br />
                    Atualmente, estou em busca de oportunidades de trabalho na área de desenvolvimento web que me permitam colocar em prática meus conhecimentos e contribuir para o crescimento de projetos inovadores. Acredito que minhas habilidades técnicas e minha paixão por desenvolvimento podem ser um diferencial para qualquer equipe. Agradeço pela oportunidade de apresentar meu portfolio e ficaria feliz em poder contribuir com minhas habilidades para o sucesso do seu projeto.
                </p>
                <img src={dev} />
            </div>
        </section>
    )
}

export default About
