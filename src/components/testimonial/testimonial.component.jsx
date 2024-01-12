import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Autoplay } from 'swiper';

import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/autoplay';

import './testimonial.styles.scss';

import client1 from '../../assets/client1.jpg';
import client2 from '../../assets/client2.jpg';
import client3 from '../../assets/client3.jpg';
import client4 from '../../assets/client4.jpg';
import client5 from '../../assets/client5.jpg';

const Testimonial = () => {
    return (
        <div className='testimonial' id='testimonial'>
            <h2 className='bio__head'>Testimonial</h2>
            <Swiper className='container testimonial__container'
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                    },

                    1030: {
                        slidesPerView: 2
                    }
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={1200}
                pagination={{ clickable: true }}
            >
                <SwiperSlide className='testimonial__slide'>
                    <div className='testimonial__card'>
                        <div className='testimonial__img'>
                            <img src={client5} alt='client5'/>
                        </div>
                        <h3>Daniel Ayeni</h3>
                        <small className='review'>
                            Beatrice is a hard working and committed developer! I've had the pleasure of working with her and can confidently say that she consistently delivers high-quality work on time. She's also a great team player and always willing to learn. Would highly recommend her!
                        </small>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='testimonial__slide'>
                    <div className='testimonial__card'>
                        <div className='testimonial__img'>
                            <img src={client3} alt='client1'/>
                        </div>
                        <h3>Steven Oluwunmi</h3>
                        <small className='review'>
                            I had the pleasure of working with Beatrice as a frontend developer.
                            She was incredibly knowledgeable, responsive, and detail-oriented. 
                            She was able to quickly and accurately implement the designs I provided and was able to suggest solutions and workarounds to any issues that arose. 
                            I would highly recommend as a frontend developer.
                        </small>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='testimonial__slide'>
                    <div className='testimonial__card'>
                        <div className='testimonial__img'>
                            <img src={client1} alt='client2'/>
                        </div>
                        <h3>Marvelous Stow</h3>
                        <small className='review'>
                            I had the pleasure of working with Beatrice. 
                            She was able to quickly understand the project requirements and provide detailed solutions for our needs.
                            Highly recommend Beatrice for any frontend development project.
                        </small>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='testimonial__slide'>
                    <div className='testimonial__card'>
                        <div className='testimonial__img'>
                            <img src={client4} alt='client3'/>
                        </div>
                        <h3>Ola Simon</h3>
                        <small className='review'>
                            Was lucky to have Beatrice as our developer. She was able to take our designs and turn them into a fully functional website. 
                            Her attention to detail and ability to think outside the box helped us to create a website that met our needs and exceeded our expectations. 
                            Highly recommend her for any frontend development project.
                        </small>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='testimonial__slide'>
                    <div className='testimonial__card'>
                        <div className='testimonial__img'>
                            <img src={client2} alt='client4'/>
                        </div>
                        <h3>Theodora Egumandi</h3>
                        <small className='review'>
                            Extremely good service, easy to approach and relate with. She gave me a satisfactory work. 
                            I would totally recommend her for any frontend development project.
                        </small>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonial;