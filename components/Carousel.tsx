/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

type Props = { category: String };

export default function Carousel({ category }: Props) {
    return (
        <>
            {category === 'ux-ui' ? (
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    centeredSlides={true}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <h1 className='slider-title'>Museum Berardo</h1>
                        <img src='/berardo.svg' alt='berardo' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className='slider-title'>Time Out Market</h1>
                        <img src='/timeoutgroup.svg' alt='2project' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1
                            className='slider-title'
                            style={{ marginBottom: '0' }}
                        >
                            Cruz Vermelha
                        </h1>
                        <img
                            src='/cruz-vermelha.svg'
                            alt='cruz-vermelha'
                            style={{
                                width: '320px',
                                height: '450px',
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className='slider-title'>Buondi Caffe</h1>
                        <img src='/boundi.svg' alt='buondi' />
                    </SwiperSlide>
                </Swiper>
            ) : (
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    centeredSlides={true}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <h1 className='slider-title'>FRONT</h1>
                        <img src='/berardo.svg' alt='berardo' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className='slider-title'>FRONT</h1>
                        <img src='/timeoutgroup.svg' alt='2project' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1
                            className='slider-title'
                            style={{ marginBottom: '0' }}
                        >
                            FRONT
                        </h1>
                        <img
                            src='/cruz-vermelha.svg'
                            alt='cruz-vermelha'
                            style={{
                                width: '320px',
                                height: '450px',
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className='slider-title'>FRONT</h1>
                        <img src='/boundi.svg' alt='buondi' />
                    </SwiperSlide>
                </Swiper>
            )}
        </>
    );
}
