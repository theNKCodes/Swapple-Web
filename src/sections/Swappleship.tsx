import { ShimmerButton } from '@/components/shimmer-button';
import React from 'react';
import gridLines from '@/assets/gridLines.png';

const Swappleship = () => {
  return (
    <section className='py-10 sm:py-15 md:py-20 px-2 overflow-hidden bg-white'>
      <div className='container'>
        <div className='px-20 w-full sm:max-px-2 max-md:px-2 max-md:max-w-full '>
          <div className='relative overflow-hidden border border-black/15 py-12 sm:py-16 md:py-24 px-4 sm:px-8 flex flex-col items-center justify-center rounded-3xl shadow-md bg-white'>
            <div
              className='absolute inset-0 z-0 [mask-image:radial-gradient(60%_50%_at_50%_20%,black,transparent)] pointer-events-none'
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${gridLines.src})`,
                opacity: 0.9,
              }}
            ></div>

            <div className='relative'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl tracking-tight text-center font-semibold'>
                Swappl-Ship for Everyone ✨
              </h2>
            </div>

            <p className='text-center text-sm sm:text-base md:text-lg text-black/90 tracking-tight max-w-xl sm:max-w-2xl mx-auto mt-5 px-2 sm:px-4 relative z-10'>
              Unlock your potential with the Swappl-Ship Program! Gain hands-on
              experience, work on real-world projects, and collaborate with
              industry experts.
              <br />
              Elevate your skills and kick-start your career with us!
            </p>

            <div className='mt-6 sm:mt-8 relative z-10'>
              <ShimmerButton>Get started</ShimmerButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swappleship;
