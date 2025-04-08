'use client';
import React from 'react';
import FeatureCard from './FeatureCard';
import { AnimatedShinyText } from './animated-shiny-text';
import { ShimmerButton } from './shimmer-button';
const HeroContent: React.FC = () => {
  return (
    <div className='z-10 mt-10 mr-0 w-full max-md:mt-5 max-md:max-w-full '>
      <section className='flex flex-col  max-w-full text-zinc-800 w-[495px]'>
        <div>
          <AnimatedShinyText shimmerWidth={120} className='text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight'>
            Introducing Swapple Solutions ✨
          </AnimatedShinyText>
        </div>
        <h1 className='text-6xl font-semibold tracking-wider max-md:max-w-full max-md:text-4xl mt-6'>
          TURNING YOUR DREAMS, INTO REALITY{' '}
        </h1>
        <p className='mt-8 text-2xl leading-8 max-md:max-w-full'>
          Swapple Solutions Pvt Ltd is a fast-growing company, innovating to
          solve future challenges. We empower businesses with cutting-edge
          technology and strategies
        </p>
        {/* <button className='overflow-hidden gap-2.5 self-start px-14 py-6 mt-8 text-2xl font-medium leading-none text-white bg-zinc-800 rounded-[40px] max-md:px-5'> */}
          <ShimmerButton className='overflow-hidden gap-2.5 self-start px-7 py-4 mt-8 text-1xl rounded-[40px] max-md:px-5'>Get started</ShimmerButton>
      </section>

      <div className='flex flex-wrap gap-6 items-start mt-24 max-md:mt-10'>
        <FeatureCard
          iconSrc='https://cdn.builder.io/api/v1/image/assets/909c163cc28e461c983acf3bbf853a19/33fa8a2816853fb4f252fb5e3767a001272a92ec?placeholderIfAbsent=true'
          description='Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.'
        />
        <FeatureCard
          iconSrc='https://cdn.builder.io/api/v1/image/assets/909c163cc28e461c983acf3bbf853a19/95aa78c3949ec5c335b6b1fa44d10156c540e076?placeholderIfAbsent=true'
          description='Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.'
        />
        <FeatureCard
          iconSrc='https://cdn.builder.io/api/v1/image/assets/909c163cc28e461c983acf3bbf853a19/134df5710c6f7170024b8178489027ea3e8c4e88?placeholderIfAbsent=true'
          description='Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.'
        />
      </div>
    </div>
  );
};

export default HeroContent;
