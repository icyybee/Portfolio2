import { useState } from 'react';
import Fade from 'react-reveal/Fade';

import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import BasicButtons from '../buttons/buttons.component';

import { blogData } from './blog.data';

import './blog.styles.scss';

const Blog = () => {
    const [display, setDisplay] = useState(3);

    const handleDisplay = () => {
        setDisplay(blogData.length);
    }

    return (
        <div className="blog" id='blog'>
            <h2 className='bio__head'>Blog</h2>
            <div className='container blog__container'>
                {blogData.slice(0, display).map((blog) => (
                    <Fade bottom>
                        <div className='blog__card' key={blog.id}> 
                            <a href={blog.site} style={{textDecoration:'none', color: 'inherit'}}>
                                <div className='blog__card--top'>
                                    <img src={blog.img} alt='blog' />
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
            {display === blogData.length ? (
                <div className="port__btn">
                    <BasicButtons text='View Less' variant='outlined' functions={() => setDisplay(3)} />
                </div>
            ) : (
                <div className="port__btn">
                    <BasicButtons text='View More' variant='outlined' functions={handleDisplay} />
                </div>
            )}
        </div>
    )
}

export default Blog;