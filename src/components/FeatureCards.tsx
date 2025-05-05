import React from 'react';
import FeatureCard from './FeatureCard';
import hv from '@/assets/HV.png';
import two from '@/assets/two.png'

const FeatureCards: React.FC = () => {
  return (
    <div className='container '>
      <div className='flex flex-wrap gap-8 items-start mt-18 max-md:mt-10 w-full max-w-7xl mx-auto px-12 py-2 md:py-18'>
        <FeatureCard
          iconSrc={hv}
          description='HypeVipe AI is an AI-powered social media tool. It helps creators and brands generate trending content in seconds.'
        />
        <FeatureCard
          iconSrc={two}
          description='Our Al-powered engine delivers verified, real-time leads. We transform the internet into your lead source.'
        />
      </div>
    </div>
  );
};

export default FeatureCards;