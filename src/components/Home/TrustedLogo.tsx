"use client";

import Image from "next/image";

export default function TrustedLogos() {
  const logos = [
    { src: "/assets/Home/logos/logo-2.png", alt: "Belimo", width: 110, height: 42 },
    { src: "/assets/Home/logos/logo-3.png", alt: "CrossKlinik", width: 155, height: 42 },
    { src: "/assets/Home/logos/logo-4.png", alt: "ETH Zurich", width: 187, height: 32 },
    { src: "/assets/Home/logos/logo-5.png", alt: "SIWF", width: 79, height: 32 },
    { src: "/assets/Home/logos/logo-6.png", alt: "KSW", width: 164, height: 26 },
  ];

  return (
    <section 
      className="w-full relative z-20 flex justify-center items-center py-12 lg:py-0 lg:h-[170px]"
      style={{ background: 'linear-gradient(90deg, #F7F6F4 0%, #E5E4E3 50%, #F7F6F4 100%)' }}
    >
      <div className="w-full max-w-[1440px] px-6 lg:px-[50px]">
        <div className="flex flex-col xl:flex-row items-center justify-center xl:gap-[96px] gap-10">
          
          {/* Label Text */}
          <p className="font-['Figtree'] font-semibold text-[20px] leading-[170%] text-[#0C2217] text-center xl:text-left whitespace-nowrap m-0 min-w-max">
            Anerkannt von Marktführern
          </p>

          {/* Logos */}
          <div className="flex flex-row flex-wrap xl:flex-nowrap items-center justify-center gap-8 md:gap-[40px] xl:gap-[60px] w-full xl:w-auto">
            {logos.map((logo, idx) => (
              <div key={idx} className="relative flex-shrink-0 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain w-auto h-auto max-h-[42px] max-w-full"
                  quality={100}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}