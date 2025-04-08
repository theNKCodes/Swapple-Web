import { ShimmerButton } from '@/components/shimmer-button';
import React from 'react';

const Swappleship = () => {
  return (
    <section className='py-10 sm:py-16 md:py-20'>
      <div className='container px-4 sm:px-6 lg:px-8'>
        <div className='border border-black/15 py-12 sm:py-16 md:py-24 px-4 sm:px-8 flex flex-col items-center justify-center rounded-3xl shadow-md bg-white'>
          <div className='flex flex-col items-center'>
            <h2 className='mb-2 text-3xl sm:text-4xl md:text-5xl tracking-tight text-center font-semibold'>
              Swappl-Ship for Everyone ✨
            </h2>
            <div className='h-[2px] bg-black/40 mt-4 sm:mt-5 w-[200px] sm:w-[250px] md:w-[400px] lg:w-[530px]' />
          </div>

          <p className='items-center text-center text-sm sm:text-base md:text-lg text-black/70 tracking-tight max-w-xl sm:max-w-2xl mx-auto mt-6 px-2 sm:px-4'>
            Unlock your potential with the Swappl-Ship Program! Gain hands-on
            experience, work on real-world projects, and collaborate with
            industry experts.
            <br />
            Elevate your skills and kick-start your career with us!
          </p>

          <div className='mt-6 sm:mt-8'>
            <ShimmerButton>Get started</ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swappleship;
