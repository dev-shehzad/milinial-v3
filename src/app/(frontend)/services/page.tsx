import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

import { ServiceHero } from '@/components/sections/services/ServiceHero'
import { ServiceSection } from '@/components/sections/services/ServiceSection'
import { CaseStudySection } from '@/components/sections/services/CaseStudySection'
import PatientsFirstBookFAQ from '@/components/PatientsFirstBookSite/FAQ'
import { Memberships } from '@/components/Memberships'
import { BottomCTA } from '@/components/sections/services/BottomCTA'
import { ServicesCTA } from '@/components/sections/services/ServicesCTA'
import { ServicesHowItWorks } from '@/components/sections/services/ServicesHowItWorksServics'

export const dynamic = 'force-static'
export const revalidate = 60 // Revalidate every 60 seconds to pick up CMS changes

export default async function ServicesPage() {
  const payload = await getPayload({ config: configPromise })

  const servicesFAQ = await payload.findGlobal({
    slug: 'services-faq',
  })

  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <ServiceHero />
      {/* Section Intro */}
      <section className="w-full bg-[#F5F8FB] pt-[80px] lg:pt-[130px]">
        <div className="flex flex-col items-center gap-[30px] w-full px-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center py-[4px] pl-[10px] pr-[14px] gap-[4px] bg-[#EBEDEC] border border-[rgba(0,0,0,0.04)] rounded-[54px]">
            <span className="font-['Figtree',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217] whitespace-nowrap">
              Leistungsspektrum
            </span>
          </div>
          {/* Heading */}
          <h2 className="font-['Inter',sans-serif] font-semibold text-[32px] lg:text-[52px] leading-[120%] tracking-[-1px] text-center text-black m-0 max-w-[912px]">
            Drei Services – ein gemeinsamer Kern
          </h2>
          {/* Subheader */}
          <p className="font-['Inter',sans-serif] font-medium text-[16px] leading-[170%] text-center text-[#4C5157] m-0 max-w-[802px]">
            Drei Service-Linien für KMU und Mid-Market: Stabilisieren, integrieren, transformieren – strukturiert, umsetzungsstark, verlässlich.
          </p>
        </div>

        {/* Service 1: Restrukturierung */}
        <ServiceSection
          title="Restrukturierungen, Sanierung & Turnaround"
          description="Stabilität und Liquiditätssicherung: nicht (nur) durch Kostenkürzung, sondern durch operative Klarheit und Führung."
          situations={[
            'Ergebnis- und Liquiditätsdruck; Kostenziele gehen nicht mehr auf',
            'Margenerosion, Preiskraft schwindet',
            'Operative Probleme: Schlechte Quali, Ausfälle, Durchlaufzeiten',
            'Führung im Übergang: Unsicherheit, Haltung, unklare Erwartungshaltung'
          ]}
          benefits={[
            'Sofortige Transparenz: Klares Cash-Reporting, Massnahmen-Tracking',
            'Operative Stabilisierung: Einsetzung in die kritischen Mechanismen',
            'Kommunikative Führung: In sensiblen Momenten',
            'Steuerung & Konsequenz: Takt, KPI-Logik, Entscheidungs- & Genehmigungsmechanik'
          ]}
          image="/assets/services/feature-image-1.png"
          reversed={false}
        />

        {/* Service 2: Interim COO */}
        <ServiceSection
          title="Interim COO & Operating Partner (Integration)"
          description="Integration von Übernahme oder Fusion (Post-Merger-Integration): Synergien realisieren, Kultur bewahren – und Tagesgeschäft stabil halten."
          situations={[
            'Post-Merger-Integration, Fusion, Carve-out, Buy & Build',
            'Unklare Verantwortung zwischen „Alt" und „Neu" (Doppelstrukturen)',
            'Unvereinbare Prozesse, Systeme, KPIs, IT-Landschaft',
            'Synergien geplant, aber nicht in Umsetzung übersetzt'
          ]}
          benefits={[
            'Integrations-Roadmap & Brücke: (PMO/IMO) mit starkem Business-Fokus',
            'Operating Partner: Mandat, Entscheidungskräfte, KPI-Tracking',
            'Kulturelle und Menschenführung: Brücken bauen',
            'Schnittstellenklärung und Harmonisierung der operativen Routinen',
            'Hands-on Interim Führung (COO-level, part-time) zum Stabilisieren'
          ]}
          image="/assets/services/feature-image-2.png"
          reversed={true}
        />

        {/* Service 3: Transformation */}
        <ServiceSection
          title="Transformation (Performance & Wirksamkeit)"
          description="Leistungssteigerung, Wachstum und Veränderung verankern – mit einem Vorgehen, das den Alltag pragmatisch integriert und Hochglanzbrosuhüren weglässt."
          situations={[
            'Wachstumsschmerzen: Komplexität frisst Marge, Führung kommt nicht hinterher',
            'Strategiewechsel, neues Geschäftsmodell, Portfoliobereinigung',
            'Zu viele Meetings, zu wenig Entscheidungen, zu wenig Accountability',
            'Ineffiziente Abläufe, lange Durchlaufzeiten, hohe Reibung an Schnittstellen',
            'Kultur / Haltungsthemen blockieren die Vorhaben'
          ]}
          benefits={[
            'Performance Portfolio: Fokus, Engpass, Hebel, messbarer Fortschritt',
            'Operating Model: Rollen, Routinen, Governance, KPI-Set',
            'Führungsqualität: Verantwortungskultur, Entscheidung, kongruentes Verhalten',
            'Enablement: Umsetzungskompetenz im Führungsteam (on the job)'
          ]}
          image="/assets/services/feature-image-3.png"
          reversed={false}
        />
      </section>


      {/* CTA — Nicht gefunden */}
      <ServicesCTA />

      {/* Steps */}
      <ServicesHowItWorks />

      {/* Case Studies */}
      <CaseStudySection />

      {/* FAQ */}
      <PatientsFirstBookFAQ data={servicesFAQ} />

      {/* Bottom CTA */}
      <BottomCTA />

      {/* Logos Section */}
      <Memberships />

    </div>
  )
}
