"use client";

import Image from "next/image";
function ChangeSection() {
  return (
    <section className="w-full bg-[#FBFAF8] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block bg-[#EBEDEC] text-gray-700 text-sm px-4 py-2 rounded-full">
            Unsere LbC Methode für KMU & Mid-Market
          </span>
        </div>
        {/* Heading */}
        <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-semibold leading-[1.1] tracking-[-0.02em]">
          {" "}
          Veränderungen sicher umsetzen – <br /> strategisch klar, operativ
          präsent{" "}
        </h1>{" "}
        {/* Description aligned with right image */}
        {/* Description + Images */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Empty space for left image */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Description aligned with right image */}
          <div className="md:col-span-3">
            <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
              Wir verbinden Erfahrung mit einer eigenen LbC-Methodik, die
              Führung, Organisation und Alltag in Deckung bringt – für sichere
              Veränderung, schnelle Umsetzung und messbare Resultate bei
              überschaubarem Risiko.
            </p>
          </div>

          {/* Left Image */}
          <div className="md:col-span-2">
            <div className="relative h-[300px] md:h-[360px] rounded-tr-[24px] rounded-bl-[24px] overflow-hidden">
              <Image
                src="/assets/how-to-work/hero1.png"
                alt="Team discussion"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="md:col-span-3">
            <div className="relative h-[300px] md:h-[360px] rounded-tr-[24px] rounded-bl-[24px] overflow-hidden">
              <Image
                src="/assets/how-to-work/hero2.png"
                alt="Meeting presentation"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ChangeSection