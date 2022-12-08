import './skill.styles.scss';

import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const Skill = () => {
    return (
        <div className='skill' id='skill'>
            <h2 className="skill__head bio__head">My Skills</h2>
            <div className="container skill__container">
                <div className='skill__card'>
                    <div className='skill__list'>
                        <div className='skills'>
                            <VerifiedOutlinedIcon />
                            <h4>HTML</h4>
                        </div>
                        <div className='skills'>
                            <VerifiedOutlinedIcon />
                            <h4>CSS/SASS</h4>
                        </div>
                        <div className='skills'>
                            <VerifiedOutlinedIcon />
                            <h4>JavaScript</h4>
                        </div>
                        <div className='skills'>
                            <VerifiedOutlinedIcon />
                            <h4>React JS</h4>
                        </div>
                        <div className='skills'>
                            <VerifiedOutlinedIcon />
                            <h4>GIT</h4>
                        </div>
                        <div className='skills'>
                            <VerifiedOutlinedIcon />
                            <h4>Redux</h4>
                        </div>
                        <div className='skills'>
                            <VerifiedOutlinedIcon />
                            <h4>Typescript</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;