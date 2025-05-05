import Image from 'next/image';
import React from 'react';
import happen from '@/assets/happen.png'

export default function Create() {
  return (
    <div className='container mt-12 mb-10'>
        <div className="flex flex-col items-center">
        <h1 className="text-6xl font-black">We Create.</h1>
        <h1 className="text-6xl font-black ml-16">Connect.</h1>
        <h1 className="text-6xl font-black ml-16">Conquer.</h1>
        </div>
        <Image
            src={happen}
            alt='Hero illustration'
            className='mt-8'
        />
    </div>
  );
}