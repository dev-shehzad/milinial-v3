import React from 'react'
import type { Metadata } from 'next/types'
import { BookPromo } from '@/components/BookPromo'
import { Memberships } from '@/components/Memberships'

export const dynamic = 'force-static'
export const revalidate = 600

export default function ImpressumPage() {
  return (
    <div className="bg-white text-foreground">
      {/* ── HERO SECTION ── */}
      <div className="px-4 md:px-8 flex justify-center pt-10 md:pt-24 pb-12">
        <div
          className="relative flex items-center justify-center overflow-hidden w-full max-w-[1320px] min-h-[400px] md:min-h-[585px] bg-cover bg-center rounded-tr-[16px] rounded-bl-[16px] px-6 md:px-12"
          style={{ backgroundImage: "url('/assets/legal-page/hero-bg.png')" }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 flex flex-col items-center text-center mx-auto gap-[13px] max-w-[892px]">
            {/* Eyebrow Badge */}
            <span
              className="inline-flex items-center px-[10px] py-[10px] rounded-[54px] font-['Inter',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-white"
              style={{ background: '#7063AA' }}
            >
              Unser &quot;Kleingedrucktes&quot;
            </span>

            {/* Heading */}
            <h1
              className="font-['Inter',sans-serif] font-medium text-[40px] md:text-[64px] leading-[110%] tracking-[-2px] md:tracking-[-3px] text-center text-white m-0"
            >
              Impressum &amp; Datenschutz
            </h1>

            {/* Subheadline */}
            <p
              className="max-w-[794px] font-['Inter',sans-serif] font-light text-[22px] md:text-[40px] leading-[110%] tracking-[-2px] md:tracking-[-3px] text-center text-white m-0"
            >
              Alle rechtlichen Angaben und Informationen zum Umgang mit personenbezogenen Daten auf einen Blick.
            </p>
          </div>
        </div>
      </div>

      {/* ── LEGAL CONTENT SECTION ── */}
      <div className="relative w-full bg-white flex justify-center py-12 md:py-24">
        {/* Main 1440px Container limits the overall width but provides left alignment for the scroll container */}
        <div className="w-full max-w-[1440px] flex justify-start">
          
          {/* Scrollable Container (spanning up to 1284px on Desktop, matching Figma's right edge for the scrollbar) */}
          <div 
            className="w-full xl:w-[1284px] max-h-[70vh] xl:max-h-[1567px] overflow-y-auto 
            [&::-webkit-scrollbar]:w-[10px]
            [&::-webkit-scrollbar-track]:bg-[#D9D9D9]
            [&::-webkit-scrollbar-track]:rounded-[10px]
            [&::-webkit-scrollbar-thumb]:bg-[#7063AA]/80
            [&::-webkit-scrollbar-thumb]:rounded-[10px]
            [&::-webkit-scrollbar-thumb]:border-2
            [&::-webkit-scrollbar-thumb]:border-[#D9D9D9]
            [&::-webkit-scrollbar-button]:hidden
            [scrollbar-width:thin]
            [scrollbar-color:rgba(112,99,170,0.8)_#D9D9D9]"
          >
            {/* The Text Content Container (750px wide, pushed exactly 345px from the left on desktop) */}
            <div className="w-full max-w-[750px] mx-auto xl:mx-0 xl:ml-[345px] flex flex-col items-start gap-[16px] md:gap-[23px] min-h-0 xl:min-h-[1750px] px-6 xl:px-0 pb-12 mt-2">
              
              {/* Last Update */}
              <div className="w-full text-[#4C5157] font-['Inter',sans-serif] font-normal text-[14px] md:text-[16px] xl:text-[18px] leading-[150%] xl:leading-[28px]">
                Letztes Update: 01.Januar 2026
              </div>

              {/* Title */}
              <h2 className="w-full text-[#333F51] font-['Inter',sans-serif] font-semibold text-[24px] md:text-[28px] xl:text-[30px] leading-[120%] xl:leading-[38px]">
                Impressum & Datenschutz
              </h2>

              {/* Body Text Blocks */}
              <div className="w-full text-[#4C5157] font-['Inter',sans-serif] font-normal text-[16px] md:text-[18px] xl:text-[20px] leading-[160%] xl:leading-[28px] flex flex-col gap-[24px] xl:gap-[32px]">
                
                <div className="flex flex-col gap-[8px] xl:gap-[12px]">
                  <h3 className="font-semibold text-[#333F51]">Herausgeber dieses Internet-Auftritts</h3>
                  <p>
                    Millennial C<br />
                    CH-5015 Erlinsbach, Solothurn (Schweiz)<br />
                    p.juchli [ät] millennial-c.com
                  </p>
                </div>

                <div className="flex flex-col gap-[8px] xl:gap-[12px]">
                  <h3 className="font-semibold text-[#333F51]">Allgemein</h3>
                  <p>
                    Diese Internetseite (nachfolgend: Website) von Millennial C (nachfolgend: Millennial C) ist mit grösstmöglicher Sorgfalt zusammengestellt worden. Die inhaltliche Genauigkeit und Fehlerfreiheit können indes nicht garantiert werden. Wir schliessen jegliche Haftung für unzutreffende, unvollständige oder veraltete Informationen, die sich auf der Website befinden, aus.
                  </p>
                  <p>
                    Personen, welche die auf der Website der veröffentlichten Informationen abrufen, erklären sich mit den nachstehenden Bedingungen einverstanden.
                  </p>
                </div>

                <div className="flex flex-col gap-[8px] xl:gap-[12px]">
                  <h3 className="font-semibold text-[#333F51]">Urheberrecht</h3>
                  <p>
                    Der gesamte Inhalt der Website ist urheberrechtlich geschützt. Die Rechte an den Inhalten, Marken, Logos und anderer Daten auf der Website gehören Millennial C. Das Herunterladen und Ausdrucken einzelner Seiten oder Bereiche der Website ist erlaubt, sofern weder die Copyright-Vermerke noch andere gesetzlich geschützte Bezeichnungen entfernt noch die heruntergeladenen Original-Daten modifiziert werden. Als Quelle der Informationen müssen Sie unsere Webseiten angeben. Sämtliche Rechte verbleiben bei Millennial C. 
                  </p>
                  <p>
                    Das Reproduzieren, Übermitteln (elektronisch oder mit anderen Mitteln), Modifizieren, Verknüpfen oder Benutzen der Website für öffentliche oder kommerzielle Zwecke ist ohne vorgängige schriftliche Zustimmung von Millennial C nicht erlaubt. Teile dieser Website enthalten Bilder, Fotos und Inhalte Dritter, die dem Urheber- und Markenrecht unterliegen. Hierbei gelten die Urheber- und Markenrechte der rechtmässigen Besitzer.
                  </p>
                </div>

                <div className="flex flex-col gap-[8px] xl:gap-[12px]">
                  <h3 className="font-semibold text-[#333F51]">Haftungsausschluss</h3>
                  <p>
                    Millennial C übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Jegliche Haftungsansprüche gegen Millennial C wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
                  </p>
                  <p>
                    Alle Angebote sind unverbindlich. Millennial C behält sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.sie regelmässig überprüfen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── ADDITIONAL COMPONENTS ── */}
      <BookPromo />
      <Memberships />
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Impressum & Datenschutz | Millenial Group',
    description: 'Alle rechtlichen Angaben und Informationen zum Umgang mit personenbezogenen Daten auf einen Blick.',
  }
}
