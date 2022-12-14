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
                            <small>2+ years experience</small>
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
                        Hello! I am Beatrice Egumandi, a Frontend Developer with a passion for creating visually appealing and user-friendly websites and applications that provide a great user experience.
                        I am passionate about writing clean, well-structured and functional code. I am also a team player and enjoy working collaboratively on projects with colleagues.
                        If you're looking for a Frontend Developer who is passionate about building great websites and applications, please don't hesitate to contact me.
                        I look forward to hearing from you!
                    </p>
                    <a href='#contact' className='btn btn--full'>Contact me</a>
                </div>
            </div>
        </div>
    )
}

export default Bio;