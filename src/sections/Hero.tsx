'use client';
import React from 'react';
import HeroContent from '@/components/HeroContent';
import HeroImage from '@/components/HeroImage';

export const Hero: React.FC = () => {
  return (
    <section className='overflow-hidden bg-white'>
      <div className='container'>
        <div
          className='px-20 py-20 w-full max-md:px-5 max-md:max-w-full '
          // space={0}
        >
          <div className='flex gap-5 max-md:flex-col '>
            <article className='w-[55%] max-md:ml-0 max-md:w-full'>
              <HeroContent />
            </article>
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
