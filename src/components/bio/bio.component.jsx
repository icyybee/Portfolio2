import Lappy from '../../assets/img2.jpeg';
import BioImg from '../../assets/image.jpg';

import Slide from 'react-reveal/Slide';

import './bio.styles.scss';

import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';

const Bio = () => {

    return (
        <Slide bottom>
            <div className="bio" id='bio'>
                <h2 className="bio__head">About Me</h2>
                <div className="container bio__container">
                    <div className="bio__img">
                        <div className='bio--lottie'>
                            <img src={BioImg} className='bio--lottie-img' />
                        </div>
                        <img src={Lappy} alt="bio img" className='bio--lappy'/>
                        <div className="bio__img--overlay">
                            <div className="bio__img--overlay-text">Welcome <EmojiPeopleRoundedIcon /></div>
                        </div>
                    </div>
                    <div className='bio__content'>
                        <div className='bio__card'>
                            <div className='bio__cards'>
                                <WorkspacePremiumOutlinedIcon />
                                <h3>Experience</h3>
                                <small>3 years experience</small>
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
                            Hey there! I'm Beatrice Egumandi, a Frontend Developer and Technical Writer. My goal is to merge the worlds of communication and technology by creating stunning websites and applications that not only look great but also effectively communicate your message. I love writing clean, functional code and collaborating with colleagues to achieve project success. When I'm not developing, you can find me crafting informative articles on various technical topics. If you're looking for a passionate Frontend Developer and Technical Writer to bring your ideas to life, let's chat!
                        </p>
                        <a href='#contact' className='btn btn--full'>Contact me</a>
                    </div>
                </div>
            </div>
        </Slide>
    )
}

export default Bio;