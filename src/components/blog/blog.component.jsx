import Fade from 'react-reveal/Fade';

import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import { blogData } from './blog.data';

import './blog.styles.scss';

const Blog = () => {

    return (
        <div className="blog" id='blog'>
            <h2 className='bio__head'>Blog</h2>
            <div className='container blog__container'>
                {blogData.map((blog) => (
                    <Fade bottom>
                        <div className='blog__card' key={blog.id}> 
                            <a href={blog.site} style={{textDecoration:'none', color: 'inherit'}}>
                                <div className='blog__card--top'>
                                    <img src={blog.img} alt='blog-image' />
                                </div>
                                <div className='blog__card--foot'>
                                    <div className='blog__info--top'>
                                        <div>{blog.date}</div>
                                        {blog.date ? (
                                        <div className='blog__info'>
                                            <p><VisibilityRoundedIcon /> {blog.views}</p>
                                            <p><FavoriteRoundedIcon /> {blog.react}</p>
                                        </div>
                                        ) : '...'}
                                    </div>
                                    <div className='blog__info--mid'>{blog.name}</div>
                                </div>
                            </a>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    )
}

export default Blog;