import { OrbitingCirclesDemo } from '@/components/OrbitingCirclesDemo';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const Middle = (): JSX.Element => {
  return (
    <section className='w-full max-w-7xl mx-auto px-2 py-2 md:py-18'>
      <div className='container'>
        <div
          className='px-20 w-full max-md:px-5 max-md:max-w-full '
          // space={0}
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div className='space-y-6'>
              <h1 className='text-5xl md:text-6xl font-heading-1-m font-extrabold leading-tight text-blue-gray900'>
                Innovate. Transform. Excel.
              </h1>
              <p className='text-lg font-body-l text-blue-gray600'>
                Empowering Businesses through Technology, Innovation and
                Strategy.
              </p>
            </div>
            <div>
              <OrbitingCirclesDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Middle;
