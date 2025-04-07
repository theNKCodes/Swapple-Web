"use client";
import React from "react";

interface FeatureCardProps {
  iconSrc: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, description }) => {
  return (
    <article className="flex flex-col justify-center px-4 py-6 w-56 border-2 border-grey border-solid rounded-[32px]">
      <div className="w-full max-w-48">
        <figure className="flex gap-10 items-center w-12">
          <img
            src={iconSrc}
            alt="Feature icon"
            className="object-contain self-stretch my-auto w-12 aspect-square"
          />
        </figure>
        <p className="mt-8 text-base font-light leading-6 text-zinc-800">
          {description}
        </p>
      </div>
    </article>
  );
};

export default FeatureCard;
