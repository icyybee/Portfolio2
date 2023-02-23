import Marquee from "react-fast-marquee";

import { skillsData } from "./skill.data";
import { skillsImage } from "../../utils/skillsImage";

import './skill.styles.scss';

const Skill = () => {
    return (
        <div className='skill' id='skill'>
            <h2 className="skill__head bio__head">My Skills</h2>
            <div className="container skill__container skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{ color: 'pink' }}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skill;