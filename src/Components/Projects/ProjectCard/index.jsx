import { FiGithub, FiEye } from "react-icons/fi";
import { useState } from "react";

const ProjectCard = ({ toGithub, toDeploy, img, alt, name, summary }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (

        <div className="link__card">
            <div className="blurred" style={{ filter: isHovered ? 'blur(5px)' : 'none', }} onMouseEnter={() => setIsHovered(true)}>
                <img src={img} alt={alt} className="img__card" />
                <h2>{name}</h2>
                <p>{summary}</p>

            </div>
            <div className="buttons" style={{ display: isHovered ? 'flex' : 'none' }} onMouseLeave={() => setIsHovered(false)}>
                <a href={toGithub} target='_blank'>
                    <FiGithub />
                </a>
                { toDeploy &&
                    <a href={toDeploy} target='_blank'>
                        <FiEye />
                    </a>}
            </div>
        </div>
    )
}

export default ProjectCard
