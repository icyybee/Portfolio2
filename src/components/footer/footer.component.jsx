import './footer.styles.scss';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__socials'>
                <a href='https://www.facebook.com/julie.egumandi.7'>
                    <FacebookIcon />
                </a>
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
                <small>&copy; Copyright 2022 by Beatrice Egumandi. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer;