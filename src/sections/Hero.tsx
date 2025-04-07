'use client';
import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/cog.png';
import Image from 'next/image';

export const Hero = () => {
  
  return (
    <section>
      <div className='container'>
        <div>
          {/* <div className='text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight'></div> */}
          <h1 className='text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>
            Turning your dreams, into reality
          </h1>
          <p className='text-xl text-[#010D3E] tracking-tight mt-6'>
            Swapple Solutions Pvt Ltd is a fast-growing company, innovating to
            solve future challenges. We empower businesses with cutting-edge
            technology and strategies.
          </p>
          <div className='flex gap-1 items-center mt-[30px]'>
            <button className='btn btn-primary'>Our Business</button>
            <button className='btn btn-text gap-1'>
              <span>Learn More</span>
              <ArrowIcon className='w-5 h-5' />
            </button>
          </div>
        </div>
        <div>
          <Image src={cogImage} alt='Cog Image' />
        </div>
      </div>
    </section>
  );
};
