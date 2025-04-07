"use client";
import React from "react";

const HeroImage: React.FC = () => {
  return (
    <figure className="ml-5 w-[35%] h-[35%] max-md:ml-0 max-md:w-full hidden md:block justify-center items-center">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/909c163cc28e461c983acf3bbf853a19/07a06f39533cea1c887bd431b5a102a4d531fa11?placeholderIfAbsent=true"
        alt="Hero illustration"
        className="object-contain w-full rounded-none aspect-[0.79] max-md:mt-10 max-md:max-w-full"
      />
    </figure>
  );
};

export default HeroImage;
