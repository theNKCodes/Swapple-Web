import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
import Middle from '@/sections/Middle';
import Bottom from '@/sections/Bottom';
import React from 'react';
import Swappleship from '@/sections/Swappleship';
import Footer from '@/sections/Footer';
import FeatureCards from '@/components/FeatureCards';
import Happen from '@/sections/Happen';
import Create from '@/components/Create';

export default function Home() {
  return (
    <>
    <main className="bg-white ">
      <Header />
      <Hero />
      <Middle/>
      <FeatureCards/>     
      <LogoTicker/>
      <Create/>
      <Swappleship/>
      <Happen />
      <Footer/>
    </main>
    </>
  );
}
