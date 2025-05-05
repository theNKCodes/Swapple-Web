'use client';
import Image from 'next/image';
import React from 'react';
import hero from '@/assets/Circle.png';

const HeroImage: React.FC = () => {
  return (
    <figure className='ml-5 mt-10 w-[40%] max-md:ml-0 max-md:w-full hidden md:block justify-center items-center'>
      <Image
        src={hero}
        alt='Hero illustration'
        className='object-contain w-full rounded aspect-[0.79] max-md:mt-10 max-md:max-w-full'
      />
    </figure>
  );
};

export default HeroImage;
