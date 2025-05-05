'use client';
import React from 'react';
import { AnimatedShinyText } from './animated-shiny-text';
import { ShimmerButton } from './shimmer-button';
import hv from '@/assets/HV.png';

const HeroContent: React.FC = () => {
  return (
    <div className='z-10 mt-10 mr-0 w-full max-md:mt-5 max-md:max-w-full'>
      <section className='flex flex-col max-w-full text-zinc-800 w-[495px]'>
        <div>
          <AnimatedShinyText shimmerWidth={120} className='text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight'>
            Introducing Swapple Solutions ✨
          </AnimatedShinyText>
        </div>
        <h1 className='text-6xl font-semibold tracking-wider max-md:max-w-full max-md:text-4xl mt-6'>
          Swapping your Burning, Into Earning{' '}
        </h1>
        <p className='mt-8 text-2xl leading-8 max-md:max-w-full'>
          Swapple Solutions Pvt Ltd is a fast-growing company, innovating to
          solve future challenges. We empower businesses with cutting-edge
          technology and strategies
        </p>
        <ShimmerButton className='overflow-hidden gap-2.5 self-start px-7 py-4 mt-8 text-1xl rounded-[40px] max-md:px-5'>
          Get started
        </ShimmerButton>
      </section>
    </div>
  );
};

export default HeroContent;