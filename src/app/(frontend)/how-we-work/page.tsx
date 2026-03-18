import React from 'react'
import {
  Users,
  Layers,
  Handshake,
  Layout,
} from 'lucide-react'
import { ProblemSolutionSection } from '@/components/sections/ProblemSolutionSection'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { SimpleCTA } from '@/components/sections/SimpleCTA'
import { ServicesHowItWorks } from '@/components/sections/services/ServicesHowItWorks'
import { TestimonialSlider } from '@/components/sections/TestimonialSlider'
import PatientsFirstBookFAQ from '@/components/PatientsFirstBookSite/FAQ'
import ChangeSection from '@/components/sections/Change'
import MarketRealitySection from '@/components/sections/MarketRealitySection'
import { BottomCTA } from '@/components/sections/services/BottomCTA'
import { Memberships } from '@/components/Memberships'


export const dynamic = 'force-static'
export const revalidate = 600

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <ChangeSection />
      <MarketRealitySection />

      <ProblemSolutionSection />

      <FeatureGrid
        badge="Woran wir uns orientieren"
        heading="Die 4 Prinzipien von Leadership by Congruence®"
        subheading="Ein gemeinsamer Kern, der Führung, Organisation und Alltag in Deckung bringt damit Entscheidungen greifen und Umsetzung verlässlich wird."
        features={[
          {
            title: 'Kongruenz vor Komplexität',
            description:
              'Warum es wirkt: Wenn Ziele, Entscheidungen und Verhalten nicht zusammenpassen, entsteht Reibung – selbst bei guten Strategien. LbC reduziert Komplexität, bis Richtung und Handeln stimmig sind.\n\nIm Alltag: Wenige priorisierte Outcomes, klare Trade-offs, weniger Parallelprojekte – mehr Fertigstellung.',
            Icon: Users,
          },
          {
            title: 'Verantwortung statt Übersteuerung',
            description:
              'Warum es wirkt: Mikromanagement erhöht kurzfristig Kontrolle, senkt aber mittelfristig Kompetenz, Mut und Tempo. LbC schafft Verantwortung durch saubere Mandate, Entscheidungsrechte und Konsequenz.\n\nIm Alltag: Owner sind sichtbar, Entscheidungen sind zuordenbar, Eskalationen sind erlaubt und früh.',
            Icon: Layers,
          },
          {
            title: 'Wertschätzung ist Wertschöpfung',
            description:
              'Warum es wirkt: Leistung wird nachhaltiger, wenn Menschen Orientierung, Fairness und Beteiligung erleben. Wertschätzung ist bei uns keine „Weichheit“, sondern die Basis für Ownership, Qualität und Geschwindigkeit.\n\nIm Alltag: Klarer Ton, klare Erwartungen, echte Einbindung der Betroffenen – ohne endlose Konsensschleifen.',
            Icon: Handshake,
          },
          {
            title: 'Operative Präsenz mit Blick fürs Ganze',
            description:
              'Warum es wirkt: Gerade in KMU und Mid-Market scheitert Transformation oft an der Lücke zwischen Strategie und Tagesgeschäft. LbC verbindet beides: pragmatische Umsetzung plus Systemblick (Stakeholder, Kultur, Risiken).\n\nIm Alltag: Wir sind dort, wo Wert entsteht (Teams/Prozesse), und halten gleichzeitig Governance und Stakeholder sauber geführt.',
            Icon: Layout,
          },
        ]}
      />

      <ServicesHowItWorks />
      <SimpleCTA />

      <TestimonialSlider />
  
      <PatientsFirstBookFAQ
        eyebrow="FAQ zu LbC"
        title="Häufig gefragt. Direkt beantwortet."
        description="Transparente Antworten auf die Fragen, die Entscheider vor dem Start wirklich interessieren: Risiko, Ressourcen, Resultate."
        faqs={[
          {
            question: 'Was ist Leadership by Congruence® (LbC) in einem Satz?',
            answer:
              'Ein Führungsansatz, der Strategie, Struktur und Verhalten in Einklang bringt, um Reibungsverluste zu minimieren und Umsetzungskraft zu maximieren.',
          },
          {
            question: 'Wie schnell sieht man Wirkung?',
            answer:
              'Oft schon nach wenigen Wochen, da wir an den echten Engpässen (Entscheidungen, Rollenklarheit) ansetzen und nicht nur Konzepte schreiben.',
          },
          {
            question: 'Wie stellt ihr Vertraulichkeit sicher?',
            answer: 
              'Wir arbeiten mit strengen NDAs und diskreten Kommunikationswegen. In sensiblen Phasen agieren wir im Hintergrund oder mit neutraler Mandatierung.',
          },
          {
            question: 'Was unterscheidet LbC von OKR/Agile/Change-Programmen?',
            answer:
              'LbC ist kein Framework, das "eingeführt" wird, sondern eine Haltung und Arbeitsweise, die bestehende Strukturen nutzt und optimiert, statt alles umzuwerfen.',
          },
          {
            question: 'Für welche Unternehmen ist LbC gemacht?',
            answer:
              'Für Organisationen im Wandel, die merken, dass klassische Hierarchie zu langsam, aber reine Selbstorganisation zu chaotisch ist.',
          },
        ]}
      />

      <BottomCTA 
        title="Wo dürfen wir Verantwortung bei Ihnen übernehmen?"
        description="Ob Übergang, Wachstum oder Stabilisierung: Wir unterstützen VR, Geschäftsleitung und Führungsteams mit Leadership by Congruence® – strategisch klar, operativ präsent, messbar wirksam."
        imageSrc="/assets/how-to-work/couple-standing.png"
        primaryButtonText="Leistungen ansehen"
        primaryButtonHref="/services"
        secondaryButtonText="Angebot anfragen"
        secondaryButtonHref="/contact"
      />
      
      <Memberships />
    </div>
  )
}
