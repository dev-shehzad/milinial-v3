import React from "react";
import { Zap, X } from "lucide-react";

interface ProblemItem {
  title?: string;
  description: string;
}

export const ProblemSolutionSection = () => {
  const painPoints: ProblemItem[] = [
    {
      title: "Zu viele Prioritäten gleichzeitig: ",
      description: "Alles ist wichtig – dadurch wird nichts konsequent fertig.",
    },
    {
      title: "Entscheidungen werden langsam: ",
      description: "Zu viele Schleifen, zu wenig klare Verantwortung.",
    },
    {
      title: "Mikromanagement nimmt zu: ",
      description: "Kontrolle ersetzt Vertrauen – Ownership sinkt.",
    },
    {
      title: "Silos & politische Reibung: ",
      description: "Abstimmung frisst Energie, statt Wert zu schaffen.",
    },
    {
      title: "Change-Müdigkeit: ",
      description: "Initiativen starten, aber verankern nicht im Alltag.",
    },
  ];

  const symptoms: ProblemItem[] = [
    { description: "Meetings nehmen zu, Resultate nicht." },
    { description: "Projekte laufen „gelb/rot“, aber es gibt keine echte Eskalation." },
    { description: "Führungskräfte sind im Tagesgeschäft gefangen, Strategie bleibt PowerPoint" },
    { description: "Leistungsträger ziehen sich zurück oder gehen – Kultur kippt leise." },
  ];

  return (
    <section className="w-full bg-[rgba(246,247,249,0.1)] py-20 lg:py-[82px] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 xl:px-0">
        <div className="flex flex-col xl:flex-row gap-10 lg:gap-[60px] xl:gap-[104px] w-full">

          {/* LEFT COLUMN - Pain-Punkte */}
          <div className="flex flex-col w-full xl:w-[608px] shrink-0">
            <h3 className="font-inter font-medium text-[20px] md:text-[24px] text-[#313D4F] opacity-80 leading-[140%] tracking-[-0.5px] mb-6 md:mb-[48px] px-2 lg:px-0">
              Pain-Punkte
            </h3>

            <div className="flex flex-col gap-[11px] w-full h-auto pt-8 pb-8 px-4 md:pt-[50px] md:pb-[29px] md:px-[55px] bg-[linear-gradient(56.39deg,rgba(255,255,255,0.075)_-16.75%,rgba(106,75,250,0.075)_96.72%)] border border-[#F6F7F9] rounded-[18px]">
              {painPoints.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 md:gap-[24px] w-full h-auto md:min-h-[84px] px-5 py-5 md:px-[30px] md:py-[19px] rounded-[24px] md:rounded-[60px] bg-[#E2DEFA] border border-[#664AE2]/30 shadow-[0px_23px_9px_rgba(99,99,99,0.01),0px_13px_8px_rgba(99,99,99,0.05),0px_6px_6px_rgba(99,99,99,0.09),0px_1px_3px_rgba(99,99,99,0.1)] transition-transform hover:scale-[1.01]"
                >
                  {/* Rounded icon matching Figma's 34x34px red vector */}
                  <div className="flex items-center justify-center w-[34px] h-[34px] rounded-full border-2 border-[#DA1616] shrink-0">
                    <Zap size={16} strokeWidth={2.5} className="text-[#DA1616]" />
                  </div>

                  <p className="font-inter text-sm md:text-[15px] leading-[150%] tracking-[-0.01em] text-[#5E5E5E]">
                    <span className="font-semibold text-[#5E5E5E]">
                      {item.title}
                    </span>
                    <span className="font-normal text-[#5E5E5E]">
                      {item.description}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Typische Symptome */}
          <div className="flex flex-col w-full xl:w-[608px] shrink-0">
            <h3 className="font-inter font-medium text-[20px] md:text-[24px] text-[#010101] opacity-80 leading-[140%] tracking-[-0.5px] mb-6 md:mb-[48px] px-2 lg:px-0">
              Typische Symptome
            </h3>

            <div className="flex flex-col gap-[20px]">
              {/* Symptoms List Box */}
              <div className="flex flex-col gap-[11px] w-full h-auto py-8 px-4 md:py-[40px] md:px-[55px] bg-[linear-gradient(61.94deg,rgba(255,255,255,0.075)_-7.06%,rgba(106,75,250,0.075)_102.18%)] border border-[#F6F7F9] rounded-[18px]">
                {symptoms.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 md:gap-[24px] w-full h-auto md:min-h-[84px] px-5 py-5 md:px-[30px] md:py-[19px] rounded-[24px] md:rounded-[60px] bg-[#E2DEFA] border border-[#664AE2]/30 shadow-[0px_23px_9px_rgba(99,99,99,0.01),0px_13px_8px_rgba(99,99,99,0.05),0px_6px_6px_rgba(99,99,99,0.09),0px_1px_3px_rgba(99,99,99,0.1)] transition-transform hover:scale-[1.01]"
                  >
                    <div className="flex items-center justify-center w-[34px] h-[34px] rounded-full border-2 border-[#DA1616] shrink-0">
                      <X size={16} strokeWidth={2.5} className="text-[#DA1616]" />
                    </div>

                    <p className="font-inter font-medium text-sm md:text-[15px] leading-[150%] tracking-[-0.01em] text-[#5E5E5E]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Info Box */}
              <div className="flex items-center justify-center w-full min-h-[121px] p-6 lg:p-[20px] bg-[linear-gradient(87.89deg,rgba(255,255,255,0.075)_-23.02%,rgba(106,75,250,0.075)_98.75%)] border border-[#F6F7F9] rounded-[18px]">
                <p className="font-inter font-normal text-sm md:text-[15px] leading-[170%] text-[#424343] p-0 md:px-2">
                  Genau hier setzt <span className="font-semibold text-[#181C39]">Leadership by Congruence®</span> an: Nicht mit mehr Programmen, sondern indem <span className="font-semibold text-[#181C39]">Richtung, Verhalten und System</span> wieder zusammenpassen. So wird Veränderung <span className="font-semibold text-[#181C39]">steuerbar</span>, Teams ziehen mit und Umsetzung wird wieder <span className="font-semibold text-[#181C39]">verlässlich</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};