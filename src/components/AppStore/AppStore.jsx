import React from 'react';
import AppStoreImg from '../../assets/website/AppStoreImg.png';
import PlayStoreImg from '../../assets/website/PlayStoreImg.png';
import BgPng from '../../assets/website/coffee_bg.png';

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%'
};

const AppStore = () => {
  return (
    <>
      <div style={backgroundStyle} className="py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div data-aos="fade-up" className='space-y-1 max-w-xl mx-auto'>
              {/* text section */}
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold pl-3">
                Coffee Cafe is available on Android and IOS
              </h1>
              {/* logo section */}
              <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                <a href="#">
                  <img 
                    src={AppStoreImg} 
                    alt="" 
                    className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                  />
                </a>
                <a href="#">
                  <img 
                    src={PlayStoreImg} 
                    alt="" 
                    className='max-w-[120px] sm:max-w-[90px] md:max-w-[160px]'
                  />
                </a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
