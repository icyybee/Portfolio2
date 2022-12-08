import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Autoplay } from 'swiper';

import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/autoplay';

import './testimonial.styles.scss';

import Client from '../../assets/client.PNG';

const Testimonial = () => {
    return (
        <div className='testimonial' id='testimonial'>
            <h2 className='bio__head'>Testimonial</h2>
            <Swiper className='container testimonial__container'
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                autoplay={{delay: 3000}}
                pagination={{ clickable: true }}
            >
                <SwiperSlide className='testimonial__slide'>
                    <div className='testimonial__card'>
                        <div className='testimonial__img'>
                            <img src={Client}/>
                        </div>
                        <h3>Lawrence Egumandi</h3>
                        <small className='review'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem reiciendis voluptates libero vitae eius numquam repellendus explicabo provident? Pariatur placeat ducimus cumque doloribus adipisci quasi nobis veritatis possimus nam?
                        </small>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='testimonial__slide'>
                    <div className='testimonial__card'>
                        <div className='testimonial__img'>
                            <img src={Client}/>
                        </div>
                        <h3>Lawrence Egumandi</h3>
                        <small className='review'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem reiciendis voluptates libero vitae eius numquam repellendus explicabo provident? Pariatur placeat ducimus cumque doloribus adipisci quasi nobis veritatis possimus nam?
                        </small>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className='testimonial__slide'>
                    <div className='testimonial__card'>
                        <div className='testimonial__img'>
                            <img src={Client}/>
                        </div>
                        <h3>Lawrence Egumandi</h3>
                        <small className='review'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem reiciendis voluptates libero vitae eius numquam repellendus explicabo provident? Pariatur placeat ducimus cumque doloribus adipisci quasi nobis veritatis possimus nam?
                        </small>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className='testimonial__slide'>
                    <div className='testimonial__card'>
                        <div className='testimonial__img'>
                            <img src={Client}/>
                        </div>
                        <h3>Lawrence Egumandi</h3>
                        <small className='review'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem reiciendis voluptates libero vitae eius numquam repellendus explicabo provident? Pariatur placeat ducimus cumque doloribus adipisci quasi nobis veritatis possimus nam?
                        </small>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonial;