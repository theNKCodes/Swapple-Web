import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
import Middle from '@/sections/Middle';
import Bottom from '@/sections/Bottom';
import React from 'react';
import Swappleship from '@/sections/Swappleship';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <>
    <main className="bg-white ">
      <Header />
      <Hero />
      <LogoTicker/>
      <Middle/>
      {/* <Bottom/> */}
      <Swappleship/>
      <Footer/>
    </main>
    </>
  );
}
