import React from "react";
import Image from "next/image";

export const ServicesHowItWorks: React.FC = () => {
  return (
    <section className="relative w-full bg-white flex justify-center py-[80px] lg:py-[120px]">
      {/* ── Background Gradient Image ── */}
      <div
        className="absolute top-1/2 left-0 w-full -translate-y-1/2 h-[500px] mt-[60px] lg:mt-[-36.5px] pointer-events-none select-none z-0 overflow-hidden"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)",
        }}
      >
        <Image
          src="/assets/services/gradient-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1320px] px-6 lg:px-[60px] flex flex-col items-center gap-[60px] lg:gap-[80px]">
        {/* ── Header Block ── */}
        <div className="flex flex-col items-center gap-[16px] w-full max-w-[687px] text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center px-[14px] py-[4px] bg-[#E9E7FC] rounded-[54px]">
            <span className="font-['Inter',sans-serif] font-normal text-[14px] sm:text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217]">
              Der Einstieg – klar, diskret, strukturiert
            </span>
          </div>
          {/* Headline */}
          <h2 className="font-geist font-medium text-[36px] sm:text-[48px] lg:text-[60px] leading-[120%] tracking-[-2px] text-[#191715] m-0">
            In drei Schritten zum Start
          </h2>
          {/* Subheadline */}
          <p className="font-geist font-normal text-[16px] lg:text-[18px] leading-[170%] text-[#373A46] opacity-80 m-0 max-w-[540px]">
            Unkompliziert und vertraulich: Anfrage senden oder Erstgespräch
            buchen – danach erfolgt eine kurze Einordnung, und der Start erfolgt
            nach Absprache.
          </p>
        </div>

        {/* ── Steps Block ── */}
        <div className="relative w-full flex justify-center">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute left-[30px] right-0 top-[30px] h-[2px] z-0">
            <svg viewBox="0 0 100 6" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="lineFade" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#373A46" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#373A46" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points="0,0 100,2.5 100,3.5 0,6" fill="url(#lineFade)" />
            </svg>
          </div>

          {/* Steps Container */}
          <div className="flex flex-col lg:flex-row justify-between w-full gap-[48px] lg:gap-[32px] xl:gap-[71px] relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-start gap-[24px] lg:gap-[32px] w-full lg:flex-1">
              {/* Number */}
              <div className="w-[60px] h-[60px] bg-white rounded-[8px] flex justify-center items-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] relative z-10">
                <span className="font-['Geist',sans-serif] font-medium text-[24px] leading-[140%] tracking-[-0.5px] text-[#373A46]">
                  1
                </span>
              </div>
              {/* Text */}
              <div className="flex flex-col items-start gap-[12px]">
                <h3 className="font-['Inter',sans-serif] font-semibold text-[24px] lg:text-[28px] leading-[130%] tracking-[-0.5px] text-[#190D00] m-0">
                  Erstkontakt
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-[16px] lg:text-[20px] leading-[170%] tracking-[-0.4px] text-[#190D00] opacity-80 m-0">
                  Anfrage per Formular senden oder direkt ein Erstgespräch
                  buchen. Ein kurzer Kontext (Ausgangslage, Ziel, Timing)
                  reicht.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-start gap-[24px] lg:gap-[32px] w-full lg:flex-1">
              {/* Number */}
              <div className="w-[60px] h-[60px] bg-white rounded-[8px] flex justify-center items-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] relative z-10">
                <span className="font-['Geist',sans-serif] font-medium text-[24px] leading-[140%] tracking-[-0.5px] text-[#373A46]">
                  2
                </span>
              </div>
              {/* Text */}
              <div className="flex flex-col items-start gap-[12px]">
                <h3 className="font-['Inter',sans-serif] font-semibold text-[24px] lg:text-[28px] leading-[130%] tracking-[-0.5px] text-[#190D00] m-0">
                  Rückmeldung & Einordnung
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-[16px] lg:text-[20px] leading-[170%] tracking-[-0.4px] text-[#190D00] opacity-80 m-0">
                  Rückmeldung in kurzer Zeit mit ein paar gezielten Fragen.
                  Gemeinsam wird die Lage sortiert: Ziele, Risiken, Stakeholder,
                  Dringlichkeit – und ob die Unterstützung passt.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-start gap-[24px] lg:gap-[32px] w-full lg:flex-1">
              {/* Number */}
              <div className="w-[60px] h-[60px] bg-white rounded-[8px] flex justify-center items-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] relative z-10">
                <span className="font-['Geist',sans-serif] font-medium text-[24px] leading-[140%] tracking-[-0.5px] text-[#373A46]">
                  3
                </span>
              </div>
              {/* Text */}
              <div className="flex flex-col items-start gap-[12px]">
                <h3 className="font-['Inter',sans-serif] font-semibold text-[24px] lg:text-[28px] leading-[130%] tracking-[-0.5px] text-[#190D00] m-0">
                  Start nach Absprache
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-[16px] lg:text-[20px] leading-[170%] tracking-[-0.4px] text-[#190D00] opacity-80 m-0">
                  Start und Zusammenarbeit werden pragmatisch abgestimmt (Rolle,
                  Umfang, Takt, Kommunikationswege). Dann beginnt die Umsetzung
                  – klar geführt und mit verlässlichem Rhythmus.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-start gap-[24px] lg:gap-[32px] w-full lg:flex-1">
              {/* Number */}
              <div className="w-[60px] h-[60px] bg-white rounded-[8px] flex justify-center items-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] relative z-10">
                <span className="font-['Geist',sans-serif] font-medium text-[24px] leading-[140%] tracking-[-0.5px] text-[#373A46]">
                  4
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col items-start gap-[12px]">
                <h3 className="font-['Inter',sans-serif] font-semibold text-[24px] lg:text-[28px] leading-[130%] tracking-[-0.5px] text-[#190D00] m-0">
                  Verankern
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-[16px] lg:text-[20px] leading-[170%] tracking-[-0.4px] text-[#190D00] opacity-80 m-0">
                  Nachhaltige Strukturen, Routinen und klare
                  Verantwortlichkeiten werden etabliert, sodass die Umsetzung
                  stabil weiterläuft – auch ohne laufende Begleitung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
