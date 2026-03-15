"use client";

import Image from "next/image";

const logos = [
  { src: "/logos/SOG.png", alt: "SOG ISSO ISSU", size: "large" }, // large size for PNG
  { src: "/logos/universitat-st-gallen.svg", alt: "Universität St. Gallen", size: "normal" },
  { src: "/logos/EHL.svg", alt: "EHL", size: "normal" },
  { src: "/logos/Stud.svg", alt: "Schweizerische Studienstiftung", size: "normal" },
  { src: "/logos/P.svg", alt: "procure.ch", size: "normal" },
  { src: "/logos/scha.svg", alt: "SchKG Association", size: "normal" },
];

export default function MembershipLogos() {
  return (
    <section className="w-full bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* top border */}
        <div className="border-t border-gray-300 py-10">

          <div className="flex flex-wrap items-center gap-10">
            
            {/* Left label */}
            <p className="text-[#4C4A54] text-sm whitespace-nowrap">
              Mitglied von:
            </p>

            {/* Logos */}
            <div className="flex flex-wrap items-center gap-12">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className={`
                    relative grayscale opacity-80
                    ${logo.size === 'large' 
                      ? 'h-10 w-[150px]' // larger size for first logo
                      : 'h-8 w-[120px]'   // normal size for others
                    }
                  `}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    priority={i === 0} // first logo ko priority dein
                    unoptimized={logo.src.endsWith('.svg')}
                  />
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* bottom border */}
        <div className="border-b border-gray-300"></div>

      </div>
    </section>
  );
}