import './footer.styles.scss';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ReactComponent as TwitterIcon } from '../../assets/devicon_twitter.svg'
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='footer__socials'>
                <a href='https://www.twitter.com/icyy_bee'>
                    <TwitterIcon />
                </a>
                <a href='https://www.linkedin.com/in/beatrice-egumandi-1515b4237'>
                    <LinkedInIcon />
                </a>
                <a href='https://github.com/icyybee'>
                    <GitHubIcon />
                </a>
            </div>
            <div className='footer__copyright'>
                <small>&copy; Copyright {year} by Beatrice Egumandi. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer;