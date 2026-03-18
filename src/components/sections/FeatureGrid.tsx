import React from "react";
import { Users, Briefcase, Handshake, Monitor, type LucideIcon } from "lucide-react";
import { cn } from "@/utilities/ui";

interface Feature {
  title: string;
  description: string;
  Icon: LucideIcon;
}

interface FeatureGridProps {
  badge?: string;
  heading?: string;
  subheading?: string;
  className?: string;
  features?: Feature[];
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ 
  badge = "Woran wir uns orientieren", 
  heading = "Die 4 Prinzipien von Leadership by Congruence®", 
  subheading = "Ein gemeinsamer Kern, der Führung, Organisation und Alltag in Deckung bringt damit Entscheidungen greifen und Umsetzung verlässlich wird.", 
  className, 
  features: featuresProp 
}) => {

  const defaultFeatures: Feature[] = [
    {
      title: "Kongruenz vor Komplexität",
      Icon: Users,
      description: `Warum es wirkt: Wenn Ziele, Entscheidungen und Verhalten nicht zusammenpassen, entsteht Reibung – selbst bei guten Strategien. LbC reduziert Komplexität, bis Richtung und Handeln stimmig sind.\nIm Alltag: Wenige priorisierte Outcomes, klare Trade-offs, weniger Parallelprojekte – mehr Fertigstellung.`,
    },
    {
      title: "Verantwortung statt Übersteuerung",
      Icon: Briefcase,
      description: `Warum es wirkt: Mikromanagement erhöht kurzfristig Kontrolle, senkt aber mittelfristig Kompetenz, Mut und Tempo. LbC schafft Verantwortung durch saubere Mandate, Entscheidungsrechte und Konsequenz.\nIm Alltag: Owner sind sichtbar, Entscheidungen sind zuordenbar, Eskalationen sind erlaubt und früh.`,
    },
    {
      title: "Wertschätzung ist Wertschöpfung",
      Icon: Handshake,
      description: `Warum es wirkt: Leistung wird nachhaltiger, wenn Menschen Orientierung, Fairness und Beteiligung erleben. Wertschätzung ist bei uns keine „Weichheit“, sondern die Basis für Ownership, Qualität und Geschwindigkeit.\nIm Alltag: Klarer Ton, klare Erwartungen, echte Einbindung der Betroffenen – ohne endlose Konsensschleifen.`,
    },
    {
      title: "Operative Präsenz mit Blick fürs Ganze",
      Icon: Monitor,
      description: `Warum es wirkt: Gerade in KMU und Mid-Market scheitert Transformation oft an der Lücke zwischen Strategie und Tagesgeschäft. LbC verbindet beides: pragmatische Umsetzung plus Systemblick (Stakeholder, Kultur, Risiken).\nIm Alltag: Wir sind dort, wo Wert entsteht (Teams/Prozesse), und halten gleichzeitig Governance und Stakeholder sauber geführt.`,
    },
  ];

  const features = featuresProp ?? defaultFeatures;

  return (
    <section className={cn("w-full bg-[#FEFEFF] pt-16 pb-16 md:pt-[72px] md:pb-[56px] overflow-hidden", className)}>
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 xl:px-0">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mx-auto max-w-[829px] mb-10 md:mb-[40px]">
          {/* Sub header */}
          <div className="inline-flex items-center justify-center px-[10px] py-[4px] gap-[10px] bg-[#E9E7FC] rounded-[54px] mb-[16px]">
            <span className="font-inter font-normal text-sm md:text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217]">
              {badge}
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-inter font-semibold text-[32px] md:text-[48px] lg:text-[56px] leading-[1.2] lg:leading-[110%] tracking-[-0.5px] lg:tracking-[-1px] text-[#0F0F0F] mb-[16px]">
            {heading}
          </h2>

          {/* Subheading */}
          <p className="font-inter font-normal text-[16px] leading-[170%] tracking-[-0.5px] text-[#3B3B3B] opacity-80 max-w-[829px]">
            {subheading}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[24px]">
          {features.map(({ title, description, Icon }, i) => (
            <div
              key={i}
              className="flex flex-col pt-8 pb-10 px-6 md:pt-[32px] md:pb-[48px] md:px-[32px] gap-8 md:gap-[40px] bg-[#FFFFFF] border border-[#DBDBDE] rounded-[8px]"
            >
              {/* ICON */}
              <div className="flex items-center justify-start w-[64px] h-[64px] text-[#6A4BFA] shrink-0">
                <Icon size={42} strokeWidth={1.5} />
              </div>

              {/* TEXT BLOCK */}
              <div className="flex flex-col gap-[16px] w-full">
                {/* Title */}
                <h3 className="font-inter font-semibold text-[22px] md:text-[28px] leading-[130%] tracking-[-0.5px] text-[#190D00]">
                  {title}
                </h3>

                {/* Description */}
                <div className="flex flex-col gap-2 font-inter font-normal text-[16px] md:text-[18px] leading-[1.6] md:leading-[180%] text-[#54504D]">
                  {description.split("\n").map((line, j) => {
                    const colonIndex = line.indexOf(":");
                    if (
                      colonIndex !== -1 &&
                      (line.startsWith("Warum es wirkt") || line.startsWith("Im Alltag"))
                    ) {
                      return (
                        <p key={j}>
                          <span className="font-semibold text-[#190D00]">
                            {line.substring(0, colonIndex + 1)}
                          </span>
                          {line.substring(colonIndex + 1)}
                        </p>
                      );
                    }
                    return <p key={j}>{line}</p>;
                  })}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};