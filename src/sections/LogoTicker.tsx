'use client';
import acmeLogo from '@/assets/logo-acme.png';
import quantumLogo from '@/assets/logo-quantum.png';
import echoLogo from '@/assets/logo-echo.png';
import pulseLogo from '@/assets/logo-pulse.png';
import celestialLogo from '@/assets/logo-celestial.png';
import apexLogo from '@/assets/logo-apex.png';
import hiring from '@/assets/Hiring.png'
import growing from '@/assets/growing.png'
import swapplers from '@/assets/swapplers.png'
import uniquec from '@/assets/Unique-corn.png'
import grish from '@/assets/grishhh.png'
import { motion } from 'framer-motion';

export const LogoTicker = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className='container'>
        <div className='flex items-center'>
          <div className='flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
            <motion.div
            initial={{translateX: "-50%"}}
            animate={{translateX: '0'}}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
             className='flex flex-none gap-8 pr-10 -translate-x-0'>
              {[
                hiring,
                growing,
                swapplers,
                uniquec,
                grish,
                hiring,
                growing,
                swapplers,
                uniquec,
                grish,
              ].map((logo) => (
                <img src={logo.src} key={logo.src} className='h-10 w-auto' />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
