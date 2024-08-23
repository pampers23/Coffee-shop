import React from 'react'
import BannerImg from '../../assets/website/BannerImg.png'
import BgTexture from '../../assets/website/coffee-texture.png'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%"
};

const Banner = () => {
  return (
    <>
      <div style={bgImage}>
        <div className='container min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {/* image section */}
            <div data-aos="zoom-in">
              <img 
                src={BannerImg} 
                alt="Banner" 
                className='max-w-[430px] w-full mx-auto spin drop-shadow-xl' />
            </div>
            {/* text content section */}
            <div className='flex flex-col justify-center gap-6 sm:pt-0'>
              <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold font-cursive text-gray-100'>Premium Blend Coffee</h1>
              <p data-aos="fade-up" className='text-sm text-gray-200 tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
              <div className='grid grid-cols-2 gap-6'>
                <div className='space-y-5'>
                  <div data-aos="fade-up" className='flex items-center gap-3 '>
                    <GrSecure className='text-gray-200 text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-400' />
                    <span className='text-gray-200'>Premium Coffee</span>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="300" className='flex items-center gap-3 '>
                    <IoFastFood className='text-gray-200 text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-400' />
                    <span className='text-gray-200'>Hot Coffee</span>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="500" data-aos-offset="0" className='flex items-center gap-3 '>
                    <GiFoodTruck className='text-gray-200 text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-400' />
                    <span className='text-gray-200'>Cold Coffee</span>
                  </div>
                </div>
                <div data-aos="slide-left" className='border-l-4 border-gray/50 pl-6 space-y-3'>
                  <h1 className='text-gray-200 text-2xl font-semibold font-cursive'>Tea Lover</h1>
                  <p className='text-gray-300 text-sm'>
                    {" "}
                    Much like writing code, brewing the perfect cup of tea requires patience, precision and a dash of passion to create a comforting blend of flavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
