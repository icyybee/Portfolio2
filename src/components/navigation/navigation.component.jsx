import './navigation.styles.scss';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';

const Navigation = () => {
    return (
        <nav>
           <a href='#home'>
            <HomeOutlinedIcon className='nav__svg'/>
           </a>
           
           <a href='#bio'>
            <PersonOutlineOutlinedIcon className='nav__svg'/>
           </a>
           
           <a href='#work'>
            <WorkspacesOutlinedIcon className='nav__svg'/>
           </a>
           
           <a href='#blog'>
            <StarBorderPurple500OutlinedIcon className='nav__svg'/>
           </a>
           
           <a href='#contact'>
            <ImportContactsOutlinedIcon className='nav__svg'/>
           </a>
        </nav>
    )
}

export default Navigation;