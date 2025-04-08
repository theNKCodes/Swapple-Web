import acmeLogo from '@/assets/logo-acme.png';
import quantumLogo from '@/assets/logo-quantum.png';
import echoLogo from '@/assets/logo-echo.png';
import pulseLogo from '@/assets/logo-pulse.png';
import celestialLogo from '@/assets/logo-celestial.png';
import apexLogo from '@/assets/logo-apex.png';
import Image from 'next/image';

export const LogoTicker = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className='container'>
        <div className='flex items-center'>
          <div className='flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
            <div className='flex flex-none gap-14 '>
              {[
                acmeLogo,
                quantumLogo,
                echoLogo,
                pulseLogo,
                celestialLogo,
                apexLogo,
              ].map((logo) => (
                <img src={logo.src} key={logo.src} className='h-6 w-auto' />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
