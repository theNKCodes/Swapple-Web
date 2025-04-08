import React from 'react';
import logo from '@/assets/SWAPPLE.png';
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';

const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-12 px-4'>
      <div className='max-w-7xl mx-auto flex flex-col items-center gap-10'>

        {/* Logo with Soft Underlight */}
        <div className='relative'>
          <span className='absolute -inset-3 rounded-full bg-gradient-to-r from-[#F87BFF] via-[#FFDD9B] to-[#C2F0B1] opacity-20 blur-2xl'></span>
          <Image
            src={logo}
            height={50}
            alt='Swapple Logo'
            className='relative z-10 w-auto'
          />
        </div>

        {/* Navigation */}
        <nav className='flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium text-center'>
          <a href='' className='hover:text-white transition'>About</a>
          <a href='' className='hover:text-white transition'>Features</a>
          <a href='' className='hover:text-white transition'>Customers</a>
          <a href='' className='hover:text-white transition'>Help</a>
          <a href='' className='hover:text-white transition'>Careers</a>
        </nav>

        {/* Social Icons */}
        <div className='flex justify-center gap-6 sm:gap-8'>
          <SocialX className='w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform duration-200 cursor-pointer' />
          <SocialInsta className='w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform duration-200 cursor-pointer' />
          <SocialLinkedIn className='w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform duration-200 cursor-pointer' />
          <SocialPin className='w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform duration-200 cursor-pointer' />
        </div>

        {/* Copyright */}
        <p className='text-xs text-[#888] text-center'>
          &copy; {new Date().getFullYear()} Swapple Solutions Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
