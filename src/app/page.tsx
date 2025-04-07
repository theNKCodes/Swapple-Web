import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
import React from 'react';

export default function Home() {
  return (
    <>
    <main className="bg-white ">
      <Header />
      <Hero />
      <LogoTicker/>
    </main>
    </>
  );
}
