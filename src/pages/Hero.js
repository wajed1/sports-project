import React from 'react';
import bg from "../images/apple-splash.png"

function Hero() {

  const styles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <main className='h-screen w-screen' style={styles}>
    <div className='h-full w-full flex flex-col justify-center px-[4rem] text-left' >
          <h1 className='text-[#98EC65] font-bold text-[5rem]' >VShop</h1>
          <h3 className='text-white text-[2rem] font-bold' >Freshness delivered to your door – explore a garden of vibrant, farm-fresh vegetables for a healthier, tastier lifestyle.</h3>

          <button className='w-[10rem] py-[6px] rounded-3xl bg-[#98EC65] hover:bg-[#81E047] mt-[1rem]' >Explore Now</button>
      </div>
      </main>
  );
}

export default Hero;