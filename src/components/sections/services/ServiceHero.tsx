import React from 'react'
import Image from 'next/image'

export const ServiceHero: React.FC = () => {
  return (
    <section className="container py-20">
      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
        <div className="max-w-xl">
          <span className="inline-block bg-[#F3F4F6] text-gray-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Verantwortung übernehmen, wenn es zählt
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Unser <br /> Angebot
          </h1>
        </div>
        
        <div className="max-w-2xl lg:text-right">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-snug">
            Wir stabilisieren Unternehmen in kritischen Phasen, integrieren nach Übernahme/Fusion und verbessern Leistung nachhaltig.
          </p>
        </div>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Image 1: Tall Portrait */}
        <div className="relative aspect-[3/4] md:aspect-[2/3] rounded-3xl overflow-hidden">
          <Image
            src="/website-template-OG.webp"
            alt="Team walking in corridor"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 2: Square/Portrait */}
        <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden">
          <Image
            src="/website-template-OG.webp"
            alt="Woman presenting on whiteboard"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 3: Landscape/Square */}
        <div className="relative aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden">
          <Image
            src="/website-template-OG.webp"
            alt="Team meeting"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
