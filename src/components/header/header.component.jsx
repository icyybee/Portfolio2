import './header.styles.scss';

import Typed from 'react-typed';

import Resume from '../../assets/Resume.pdf';

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
                    <h4>Hello I'm</h4>
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
                        <a href={Resume} className='btn btn--ghost' download>Download CV</a>
                        <a href='#contact' className='btn btn--full'>Contact Me</a>
                    </div>
                    <div className='scroll'>
                        <a href='#bio'>Scroll Down</a>    
                    </div>
                </div> 
            </div>
        </header>
    )
}

export default Header;