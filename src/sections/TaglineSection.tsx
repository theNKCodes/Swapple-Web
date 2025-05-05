import React from "react";

const TaglineSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-3.5 w-[954px] max-w-full">
      <div className="relative w-[435px] h-[250px] max-md:w-[400px] max-sm:w-full max-sm:text-center">
        <h2 className="text-[70px] text-black leading-[100px] tracking-[-1.4px] absolute left-0 top-0 max-md:text-6xl max-sm:text-[50px]">
          We Create.
        </h2>
        <h2 className="text-[80px] text-black leading-[100px] tracking-[-1.6px] absolute left-[106px] top-[72px] max-md:text-[70px] max-sm:text-6xl">
          Connect.
        </h2>
        <h2 className="text-[90px] text-black leading-[100px] tracking-[-1.8px] absolute left-[106px] top-[150px] max-md:text-[80px] max-sm:text-[70px]">
          Conquer.
        </h2>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f5d5ac92c2de81321a9db12d086b2ee6cdacadc?placeholderIfAbsent=true"
        alt="Illustration"
        className="h-[221px] w-full aspect-[953.60/221.00]"
      />
    </section>
  );
};

export default TaglineSection;