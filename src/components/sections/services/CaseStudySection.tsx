import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface CaseStudy {
  logo: string
  quote: string
  link: string
}

export const CaseStudySection: React.FC = () => {
  const cases: CaseStudy[] = [
    {
      logo: '/website-template-OG.webp', // Placeholder
      quote: 'Wie ein Interim-COO-Setup Entscheidungs-Tempo und Ownership erhöhte',
      link: '/case-studies/interim-coo',
    },
    {
      logo: '/website-template-OG.webp', // Placeholder
      quote: 'Erfahren Sie, wie ein Fokus-Pivot und Integration nach Zukauf den Wert verdreifacht haben – in weniger als 12 Monaten.',
      link: '/case-studies/transformation',
    },
  ]

  return (
    <section className="container py-24 bg-background">
      <div className="mb-12">
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
          PRAXIS-CASE
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Wirkung in der Praxis
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Echte Fallbeispiele aus Restrukturierung, Integration und Transformation – pragmatisch beschrieben bis auf Resultat-Ebene.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cases.map((item, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-none bg-card shadow-sm">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="h-12 relative mb-6 w-32">
                 {/* Ideally use actual logos */}
                 <div className="bg-primary/10 w-full h-full rounded flex items-center justify-center text-primary font-bold">LOGO</div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground leading-snug flex-grow">
                {item.quote}
              </h3>
              
              <div className="mt-6 pt-6 border-t border-border">
                 <p className="text-muted-foreground text-sm mb-4">
                   Erfahren Sie, wie wir gemeinsam mit dem CEO und seinem Team...
                 </p>
                 <Link 
                    href={item.link}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                 >
                    Case study lesen
                    <ArrowRight className="ml-2 h-4 w-4" />
                 </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
