"use client";
import React from "react";
import Image, { StaticImageData } from 'next/image';

interface FeatureCardProps {
  iconSrc: string | StaticImageData;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, description }) => {
  return (
    <article className="flex flex-col justify-center px-4 py-6 w-56 border-2 border-grey border-solid rounded-[32px]">
      <div className="w-full max-w-48">
        <figure className="flex items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 overflow-hidden">
            <Image
              src={iconSrc}
              alt="Feature icon"
              width={32}  // Slightly smaller than container to allow padding
              height={32}
              className="object-contain"
            />
          </div>
        </figure>
        <p className="mt-8 text-base font-light leading-6 text-zinc-800">
          {description}
        </p>
      </div>
    </article>
  );
};

export default FeatureCard;