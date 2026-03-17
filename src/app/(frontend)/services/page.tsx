import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageSquare, Calendar, Rocket } from 'lucide-react'
import { ServiceHero } from '@/components/sections/services/ServiceHero'
import { ServiceSection } from '@/components/sections/services/ServiceSection'
import { PurpleCTA } from '@/components/sections/services/PurpleCTA'
import { CaseStudySection } from '@/components/sections/services/CaseStudySection'
import { FAQ } from '@/components/sections/FAQ'
import { ProcessSteps } from '@/components/sections/ProcessSteps'

export const dynamic = 'force-static'
export const revalidate = 600

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <ServiceHero />

      {/* Intro Text */}
      <section className="container py-16 text-center max-w-4xl mx-auto">
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
          KERNELEMENTE
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Drei Services – ein gemeinsamer Kern
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Der Service ist nur die Hülle: unser Ansatz (Analyse, Congruence, Execution) schaltet Umsetzungskaft, nachhaltig.
        </p>
      </section>

      {/* Service 1: Restrukturierung */}
      <ServiceSection
        title="Restrukturierungen, Sanierung & Turnaround"
        description="Stabilität und Liquiditätssicherung: nicht (nur) durch Kostenkürzung, sondern durch operative Klarheit und Führung."
        situations={[
          'Ergebnis- und Liquiditätsdruck; Kostenziele gehen nicht mehr auf',
          'Margenerosion, Preiskraft schwindet bei Stoff/Log. Volatilität',
          'Operative Probleme: Schlechte Quali, Ausfälle, Durchlaufzeiten',
          'Führung im Übergang: Unsicherheit, Haltung, unklare Erwartungshaltung'
        ]}
        benefits={[
          'Sofortige Transparenz: Klares Cash-Reporting, Maßnahmen-Tracking',
          'Operative Stabilisierung: Einsetzung in die kritischen Mechanismen',
          'Kommunikative Führung: In sensiblen Momenten',
          'Steuerung & Konsequenz: Takt, KPI-Logik, Entscheidungs- & Genehmigungsmechanik'
        ]}
        image="/website-template-OG.webp"
        reversed={false}
      />

      {/* Service 2: Interim COO */}
      <ServiceSection
        title="Interim COO & Operating Partner (Integration)"
        description="Integration von Übernahme oder Fusion (Post-Merger-Integration): Synergien realisieren, Kultur bewahren – und Tagesgeschäft stabil halten."
        situations={[
          'Post-Merger-Integration, Fusion, Carve-out, Buy & Build',
          'Unklare Verantwortung zwischen „Alt“ und „Neu“ (Doppelstrukturen)',
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
        image="/website-template-OG.webp"
        reversed={true}
      />

      {/* Service 3: Transformation */}
      <ServiceSection
        title="Transformation (Performance & Wirksamkeit)"
        description="Leistungssteigerung, Wachstum und Veränderung verankern – mit einem Vorgehen, das den Alltag greift statt nur Papierwände zu erstellen."
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
          'Etablieren: Umsetzungskompetenz im Führungsteam (on the job)'
        ]}
        image="/website-template-OG.webp"
        reversed={false}
      />

      {/* CTA 1 */}
      <div className="py-12">
        <PurpleCTA
          heading="Nicht gefunden, was Sie suchen?"
          description="Unser Ansatz ist flexibel und greift meist in vielen Situationen. Wenn Sie Anliegen in eine andere Richtung geht (bspw. Advisory), rufen Sie uns an. Wir schauen, ob wir die richtigen sind – oder jemanden empfehlen können."
          primaryButtonText="Erstgespräch buchen"
          primaryButtonLink="/contact"
          secondaryButtonText="Anfrage senden"
          secondaryButtonLink="/contact"
          image="/website-template-OG.webp"
        />
      </div>

      {/* Steps */}
      <ProcessSteps
        steps={[
          {
            title: 'Erstkontakt',
            description: 'Anfrage per Formular senden oder direkt ein Erstgespräch buchen. Wir prüfen Kontext, Dringlichkeit, Ziel / Timing vorab.',
            icon: <MessageSquare className="w-6 h-6" />,
          },
          {
            title: 'Rückmeldung & Einordnung',
            description: 'Rückmeldung in kurzer Zeit. In 30 min gezielte Fragen. Gemeinsam wird die Lage sortiert. Ziele, Risiken, Quick-wins besprochen – und ob die Chemie passt.',
            icon: <Calendar className="w-6 h-6" />,
          },
          {
            title: 'Start nach Absprache',
            description: 'Art und Zusammenarbeit werden pragmatisch abgestimmt (Rolle, Umfang, Takt, Kommunikation). Dann beginnt die Umsetzung – klar geführt und im verlässlichen Rhythmus.',
            icon: <Rocket className="w-6 h-6" />,
          },
        ]}
      />

      {/* Case Studies */}
      <CaseStudySection />

      {/* FAQ */}
      <div className="py-24">
        <FAQ
          questions={[
            {
              question: 'Wie wird Vertraulichkeit sichergestellt – gerade in sensiblen Situationen?',
              answer: 'Wir arbeiten mit strengen NDAs und diskreten Kommunikationswegen. In sensiblen Phasen (z.B. Restrukturierung) agieren wir im Hintergrund oder mit neutraler Mandatierung.',
            },
            {
              question: 'Wie schnell sieht man Wirkung?',
              answer: 'Unser Ansatz zielt auf schnelle Stabilisierung. Oft sind bereits nach wenigen Tagen/Wochen erste operative Effekte (Cash, Ruhe, Klarheit) sichtbar.',
            },
            {
              question: 'Wie schnell kann gestartet werden?',
              answer: 'In akuten Krisen oft innerhalb von 48 Stunden. Bei geplanten Transformationen stimmen wir den Starttermin gemeinsam ab.',
            },
            {
              question: 'Wie läuft die Preisgestaltung ab?',
              answer: 'Transparent und erfolgsorientiert. Tagessätze oder Pauschalen je nach Mandat, oft kombiniert mit einer Erfolgskomponente.',
            },
            {
              question: 'Wird vor Ort (im Office) gearbeitet?',
              answer: 'Ja, operative Präsenz ist Teil des Modells. Wir sind dort, wo die Entscheidungen fallen und die Wertschöpfung stattfindet – aber nicht unnötig permanent.',
            },
          ]}
        />
      </div>

      {/* Bottom CTA */}
      <div className="py-12">
        <div className="container">
          <div className="bg-[#7C3AED] rounded-3xl overflow-hidden relative p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="relative z-10 max-w-2xl text-white">
                <h2 className="text-3xl font-bold mb-4">Ist Ihr Programm robust genug für den Alltag?</h2>
                <p className="text-white/90 text-lg mb-8">
                  Klarheit in wenigen Tagen. Integrieren von Strategie und Umsetzung – stehen wir zur Verfügung. Stabil, fortschrittlich und wirkungsvoll. Auch kurzfristig als Sparring zur Verfügung.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact" className="bg-white text-[#7C3AED] px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors inline-flex items-center">
                    Jetzt Gespräch buchen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link href="/contact" className="bg-white/20 text-white border border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors inline-flex items-center">
                    Angebot anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
             </div>
             
             <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
                <Image
                  src="/website-template-OG.webp"
                  alt="Person"
                  fill
                  className="object-contain object-bottom"
                />
             </div>
          </div>
        </div>
      </div>
      
      {/* Logos Section - Placeholder */}
      <div className="container py-16 border-t border-border">
         <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Logo Placeholders */}
            <div className="h-8 w-32 bg-foreground/20 rounded"></div>
            <div className="h-8 w-32 bg-foreground/20 rounded"></div>
            <div className="h-8 w-32 bg-foreground/20 rounded"></div>
            <div className="h-8 w-32 bg-foreground/20 rounded"></div>
            <div className="h-8 w-32 bg-foreground/20 rounded"></div>
         </div>
      </div>

    </div>
  )
}
