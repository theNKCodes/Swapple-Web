"use client";
import React from "react";
import FeatureCard from "./FeatureCard";

const HeroContent: React.FC = () => {
  return (
    <div className="z-10 mt-24 mr-0 w-full max-md:mt-10 max-md:max-w-full ">
      <section className="flex flex-col ml-10 max-w-full text-zinc-800 w-[495px]">
        <h1 className="text-6xl font-semibold tracking-wider max-md:max-w-full max-md:text-4xl">
          TURNING YOUR DREAMS, INTO REALITY{" "}
        </h1>
        <p className="mt-8 text-2xl leading-8 max-md:max-w-full">
          Swapple Solutions Pvt Ltd is a fast-growing company, innovating to
          solve future challenges. We empower businesses with cutting-edge
          technology and strategies
        </p>
        <button className="overflow-hidden gap-2.5 self-start px-14 py-6 mt-8 text-2xl font-medium leading-none text-white bg-zinc-800 rounded-[40px] max-md:px-5">
          Get started
        </button>
      </section>

      <div className="flex flex-wrap gap-6 items-start mt-24 max-md:mt-10">
        <FeatureCard
          iconSrc="https://cdn.builder.io/api/v1/image/assets/909c163cc28e461c983acf3bbf853a19/33fa8a2816853fb4f252fb5e3767a001272a92ec?placeholderIfAbsent=true"
          description="Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id."
        />
        <FeatureCard
          iconSrc="https://cdn.builder.io/api/v1/image/assets/909c163cc28e461c983acf3bbf853a19/95aa78c3949ec5c335b6b1fa44d10156c540e076?placeholderIfAbsent=true"
          description="Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id."
        />
        <FeatureCard
          iconSrc="https://cdn.builder.io/api/v1/image/assets/909c163cc28e461c983acf3bbf853a19/134df5710c6f7170024b8178489027ea3e8c4e88?placeholderIfAbsent=true"
          description="Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id."
        />
      </div>
    </div>
  );
};

export default HeroContent;
