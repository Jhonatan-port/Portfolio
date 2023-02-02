import './Tecnologies.css'
const Tecnologies = () => {
    return (
        <section className="secondary__section" id='tecnologies__section'>
            <h1>Tecnologias</h1>
            <p>Estas são as tecnologias as
                quais considero minha
                principais. Tenho projetos pessoais desenvolvidos utilizando todas e interesse constante de
                aprendizado.</p>
            <div className="tecnologie__row">
                <i className="devicon-html5-plain-wordmark tecnology__icon"></i>
                <i className="devicon-css3-plain tecnology__icon"></i>
                <i className="devicon-tailwindcss-original-wordmark tecnology__icon "></i>
                <i className="devicon-python-plain-wordmark tecnology__icon"></i>
                <i className="devicon-javascript-plain tecnology__icon"></i>
                <i className="devicon-mysql-plain-wordmark tecnology__icon"></i>
                <i className="devicon-react-original-wordmark tecnology__icon"></i>
            </div>
        </section>
    )
}

export default Tecnologies
