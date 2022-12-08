import Lappy from '../../assets/img2.jpeg';

import './bio.styles.scss';

import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';

const Bio = () => {
    return (
        <div className="bio" id='bio'>
            <h2 className="bio__head">About Me</h2>
            <div className="container bio__container">    
                <div className="bio__img">
                    <img src={Lappy} alt="bio img" />
                    <div className="bio__img--overlay">
                        <div className="bio__img--overlay-text">Welcome <EmojiPeopleRoundedIcon /></div>
                    </div>
                </div>
                <div className='bio__content'>
                    <div className='bio__card'>
                        <div className='bio__cards'>
                            <WorkspacePremiumOutlinedIcon />
                            <h3>Experience</h3>
                            <small>3+ years experience</small>
                        </div>
                        <div className='bio__cards'>
                            <PeopleOutlinedIcon />
                            <h3>Clients</h3>
                            <small>10+ clients</small>
                        </div>
                        <div className='bio__cards'>
                            <HomeRepairServiceOutlinedIcon />
                            <h3>Projects</h3>
                            <small>10+ completed</small>
                        </div>
                    </div>
                    <p className='bio__text'>
                        I have a passion for coding and challenging myself creatively. I have the skill to bring your ideas and projects to life on the web. I
                        have experience working with various clients from tech field to health field. When I'm not coding , you
                        can find me bingewatching kdramas and animes or playing videogames. Thanks for stopping by, check out my
                        work.
                    </p>
                    <a href='#contact' className='btn btn--full'>Contact me</a>
                </div>
            </div>
        </div>
    )
}

export default Bio;