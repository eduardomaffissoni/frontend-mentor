// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div className='w-128 mx-auto'>
      <Swiper
        effect={'coverflow'}
        slideToClickedSlide={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Image src='newsletter.png' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='form.png' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function Image({ src }) {
  return (
    <div className='overflow-hidden h-96 mb-5 mt-20'>
      <img
        className='hover:scale-110 transition-all'
        src={`./src/assets/img/${src}`}
      ></img>
    </div>
  );
}
