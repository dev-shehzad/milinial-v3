"use client";

import Image from "next/image";

export default function MarketRealitySection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[648px] bg-[linear-gradient(180deg,#FBFAF8_0%,#FFFFFF_23.1%)] pt-16 pb-16 md:pt-[100px] md:pb-[100px]">
      
      {/* Brand Pattern Background */}
      <div className="absolute -left-4 top-[292px] w-[539px] h-[356px] blur-[2.5px] pointer-events-none z-0 hidden lg:block">
        <Image
          src="/assets/how-to-work/group-bg.png"
          alt="Brand Pattern"
          fill
          className="object-contain"
        />
      </div>

      {/* Content Container */}
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 xl:px-0 relative z-10 flex flex-col">
        
        {/* Badge / Eyebrow */}
        <div className="mb-[18px]">
          <span className="inline-flex items-center pt-[4px] pb-[4px] pr-[14px] pl-[10px] gap-[4px] bg-[#E9E7FC] rounded-[54px] text-[#0C2217] font-inter text-sm md:text-[16px] font-normal leading-[170%] tracking-[-0.2px]">
            Die Realität im Markt
          </span>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col xl:flex-row gap-10 lg:gap-[80px] xl:gap-[185px] w-full items-start">
          
          {/* Left Column - Main Title */}
          <div className="w-full xl:max-w-[519px] shrink-0">
            <h2 className="font-inter font-medium text-[36px] md:text-[48px] text-[#181C39] leading-[1.2] tracking-[-1.5px]">
              Warum klassisches Management nicht mehr reicht
            </h2>
          </div>

          {/* Right Column - Body Text */}
          <div className="w-full xl:max-w-[622px] flex flex-col gap-[28px] lg:mt-0">
            
            {/* Top Subheadline */}
            <p className="font-inter font-medium text-[20px] md:text-[24px] text-[#010101]/80 leading-[1.4] tracking-[-0.5px]">
              Die Anforderungen sind gestiegen, der Spielraum ist kleiner
              geworden. In dieser Lage erzeugen alte Steuerungslogiken oft
              Friktion – und genau die wird teuer.
            </p>

            {/* Description Paragraph Container */}
            <div className="flex flex-col gap-[20px]">
              
              {/* Paragraph 1 */}
              <p className="font-inter font-normal text-[16px] text-[#424343] leading-[1.7]">
                Unternehmern und Führungskräften wird heute vieles gleichzeitig
                abverlangt: <span className="font-medium text-[#010101]">Nachfolge, Kostendruck, Substanzwerte regenerieren, Digitalisierung, geopolitische Unsicherheit.</span> Was früher
                mit Planung, Reporting und Kontrolle ausreichend war, führt heute
                oft zu einem Paradox: <span className="font-medium text-[#010101]">Mehr Steuerung – weniger Wirkung.</span>
              </p>

              {/* Paragraph 2 */}
              <p className="font-inter font-normal text-[16px] text-[#424343] leading-[1.7]">
                Die Folge sind <span className="font-medium text-[#010101]">Frustration, zäher Fortschritt</span> und mikroökonomische Schäden,
                die man erst spät in der GuV sieht: Opportunitätskosten,
                Fluktuation, Qualitäts-verluste und verpasste Entscheidungen.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}