import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import { EffectCoverflow, Pagination, Keyboard } from 'swiper/modules';
import { useState } from 'react';
export default function Carousel() {
  const [clicked, setClicked] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  function handleChange(index) {
    setActiveSlide(index.activeIndex);
  }
  function handleClick(index) {
    if (activeSlide === index.activeIndex) setClicked(true);
  }

  return (
    <div className='from-slate-100 to-slate-200 h-screen bg-gradient-to-t'>
      <div className='sm:w-128 h-full sm:mx-auto sm:pt-40 '>
        <Swiper
          effect={'coverflow'}
          slideToClickedSlide={true}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          keyboard={{
            enabled: true,
          }}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Keyboard]}
          className='mySwiper '
          onSlideChange={(e) => handleChange(e)}
          onClick={(index) => handleClick(index)}
        >
          <SwiperSlide>
            <Image src='newsletter.png' href='/newsletter' clicked={clicked} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src='form.png' href='/form' clicked={clicked} />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src='tip-calculator.png'
              href='/tip-calculator'
              clicked={clicked}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

function Image({ src, href, clicked }) {
  return (
    <div className='overflow-hidden mb-5 mt-20 sm:h-80 hover:scale-110 shadow-sm'>
      <a href={clicked ? href : null}>
        <img
          className=' transition-all object-fill w-full sm:h-auto'
          src={`./src/assets/img/${src}`}
        ></img>
      </a>
    </div>
  );
}
