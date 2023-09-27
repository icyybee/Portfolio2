import Fade from 'react-reveal/Fade';
import './header.styles.scss';

import Typed from 'react-typed';

import Resume from '../../assets/BEATRICE_EGUMANDI_RESUME.pdf';
import BasicButtons from '../buttons/buttons.component';

const Header = () => {
    return (
        <header className='header' id='home'>
            <div className='header__container'>
                <div className='header__nav'>
                    <div className='logo'>
                        <a href='#home'>Beatr<span>ice</span></a>
                    </div>
                </div>
                    <div className='header__body'>
                        <Fade bottom>
                            <h4>Hello I'm</h4>
                        </Fade>
                        <h1>Beatrice Egumandi</h1>
                        <Typed
                            strings={[
                                'Frontend Developer',
                                'Technical Writer'
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            className="typed-header"
                            style={{ fontSize: '20px', fontWeight: 500 }}
                            loop
                        />
                        <div className='header__footer'>
                            <a href={Resume} download>
                                <BasicButtons variant='outlined' text='Download CV' />
                            </a>
                            <a href='#contact'>
                                <BasicButtons variant='contained' text='Contact Me' />
                            </a>
                        </div>
                    </div> 
                <div className='header__scroll'>
                    <a href='#bio'>Scroll Down</a>    
                </div>
            </div>
        </header>
    )
}

export default Header;