import ProjectCard from "./ProjectCard"
import EasyIMG from '../../assets/ProjectImages/EasyIMG.png'
import AnalisaTotal from '../../assets/ProjectImages/AnalisaTotal.png'
import Filmera from '../../assets/ProjectImages/Filmera.png'
import emDesenvolvimento from '../../assets/ProjectImages/em_desenvolvimento.png'
import './Projects.css'
const Projects = () => {
    return (
        <section className="secondary__section ">
            <div className="projects__section">
                <h1>Meus Projetos</h1>
                <p>Clique para saber mais:</p>
                <nav>
                    <ProjectCard
                        toGithub={'https://github.com/Jhonatan-port/easyIMG'}
                        toDeploy={'https://jhonatan-port.github.io/easyIMG/'}
                        img={EasyIMG} alt={'Pagina principal projeto EasyIMG'}
                        name={"EasyIMG"}
                        summary={'Projeto desenvolvido utilizando HTML e o framework Tailwind CSS para o front end. Para backend foi utilizado Javascript.'}
                    />
                    <ProjectCard
                        toGithub={'https://github.com/Jhonatan-port/Analisa-Total'}
                        img={AnalisaTotal} alt={'Pagina principal projeto AnalisaTotal'}
                        name={"AnalisaTotal"}
                        summary={'Projeto desenvolvido para cadastro de reviews de games, sendo possível cadastrar o nome do game, sua categoria, a sua respectiva review, e também a imagem de capa do game para ser exibida na página principal.'}
                    />
                    <ProjectCard
                        toGithub={'https://github.com/Jhonatan-port/Filmera'}
                        toDeploy={'https://filmera-beryl.vercel.app/'}
                        img={Filmera} alt={'Pagina principal projeto Filmera'}
                        name={"Filmera"}
                        summary={'Projeto Filmera, desenvolvido com base no projeto MoviesLib do canal Matheus Battisti, para desenvolvimento dessa aplicação foram utilizados react routers, react Hooks e consumo de APIs externas, que nesse caso foi utilizando a API TMDB para consumir as informações referentes aos filmes.'}
                    />
                    <ProjectCard
                        toGithub={'#'}
                        img={emDesenvolvimento} alt={'Projeto em desenvolvimento'}
                        name={"Em desenvolvimento"}
                        summary={'Em breve mais projetos.'}
                    />
                </nav>
            </div>
        </section>
    )
}

export default Projects
