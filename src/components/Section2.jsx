import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/Section2.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Photo from '../assets/swiper1 1.png';
import Photo2 from '../assets/swiper2 1.png';
import Photo3 from '../assets/swiper3 1.png';
import Photo4 from '../assets/swiper4 1.png';
import Photo5 from '../assets/swiper5 1.png';
import Photo6 from '../assets/swiper6 1.png';

gsap.registerPlugin(ScrollTrigger);

function Section2() {

    useEffect(() => {
        gsap.fromTo('.text',
            { opacity: 0, y: 0 },
            { opacity: 1, y: 50, duration: 1, ease: 'power2.out',
              scrollTrigger: {
                trigger: '.text',
                start: 'top 80%',
                end: 'top 40%',
                scrub: true
              }
            }
        );

        gsap.fromTo('.swiper',
            { opacity: 0, x: 150 },
            { opacity: 1, x: 0, duration: 1, ease: 'power2.out',
              scrollTrigger: {
                trigger: '.swiper',
                start: 'top 90%',
                end: 'top 50%',
                scrub: true
              }
            }
        );

    }, []);

    return (
        <>
            <div className='section'>
                <div className='text'>
                    <h1>Kenali iPhone lebih dalam.</h1>
                </div>
                <div className='swiper'>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={40}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        pagination={{
                            clickable: true,
                          }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='photo'>
                                <img src={Photo} />
                                <div className='photo-text'>
                                    <p>Kamera Canggih</p> <br />
                                    <h6>Ambil foto dan video <br /> seindah bayangan Anda.</h6>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='photo'>
                                <img src={Photo2} />
                                <div className='photo-text-1'>
                                    <p>Chip dan Kekuatan Baterai</p> <br />
                                    <h6>Kecepatan <br /> yang bertahan lama.</h6>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='photo'>
                                <img src={Photo3} />
                                <div className='photo-text-2'>
                                    <p>Inovasi</p> <br />
                                    <h6>Didesain indah <br /> dan tangguh.</h6>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='photo'>
                                <img src={Photo4} />
                                <div className='photo-text-3'>
                                    <p>Apple Intelligence</p> <br />
                                    <h6>Kemungkinan yang <br /> menakjubkan.</h6>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='photo'>
                                <img src={Photo5} />
                                <div className='photo-text-4'>
                                    <p>Lingkungan</p> <br />
                                    <h6>Daur ulang. <br /> Gunakan kembali. Ulangi.</h6>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='photo'>
                                <img src={Photo6} />
                                <div className='photo-text-5'>
                                    <p>Privasi</p> <br />
                                    <h6>Data Anda. <br /> Di tempat yang <br /> Anda inginkan.</h6>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )

}

export default Section2;