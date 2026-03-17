import React from "react"
import { Users, Briefcase, Handshake, Monitor, type LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/utilities/ui"

interface Feature {
  title: string
  description: string
  Icon: LucideIcon
}

interface FeatureGridProps {
  badge?: string
  heading?: string
  subheading?: string
  className?: string
  features?: Feature[]
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ badge, heading, subheading, className, features: featuresProp }) => {

  const defaultFeatures: Feature[] = [
    {
      title: "Kongruenz vor Komplexität",
      Icon: Users,
      description: `Warum es wirkt: Wenn Ziele, Entscheidungen und Verhalten nicht zusammenpassen, entsteht Reibung – selbst bei guten Strategien. LbC reduziert Komplexität, bis Richtung und Handeln stimmig sind.
Im Alltag: Wenige priorisierte Outcomes, klare Trade-offs, weniger Parallelprojekte – mehr Fertigstellung.`,
    },
    {
      title: "Verantwortung statt Übersteuerung",
      Icon: Briefcase,
      description: `Warum es wirkt: Mikromanagement erhöht kurzfristig Kontrolle, senkt aber mittelfristig Kompetenz, Mut und Tempo. LbC schafft Verantwortung durch saubere Mandate, Entscheidungsrechte und Konsequenz.
Im Alltag: Owner sind sichtbar, Entscheidungen sind zuordenbar, Eskalationen sind erlaubt und früh.`,
    },
    {
      title: "Wertschätzung ist Wertschöpfung",
      Icon: Handshake,
      description: `Warum es wirkt: Leistung wird nachhaltiger, wenn Menschen Orientierung, Fairness und Beteiligung erleben. Wertschätzung ist bei uns keine „Weichheit“, sondern die Basis für Ownership, Qualität und Geschwindigkeit.
Im Alltag: Klarer Ton, klare Erwartungen, echte Einbindung der Betroffenen – ohne endlose Konsensschleifen.`,
    },
    {
      title: "Operative Präsenz mit Blick fürs Ganze",
      Icon: Monitor,
      description: `Warum es wirkt: Gerade in KMU und Mid-Market scheitert Transformation oft an der Lücke zwischen Strategie und Tagesgeschäft. LbC verbindet beides: pragmatische Umsetzung plus Systemblick (Stakeholder, Kultur, Risiken).
Im Alltag: Wir sind dort, wo Wert entsteht (Teams/Prozesse), und halten gleichzeitig Governance und Stakeholder sauber geführt.`,
    },
  ]

  const features = featuresProp ?? defaultFeatures

  return (
    <section className={cn("container mb-32", className)}>

      {/* HEADER (same as your code) */}
      <div className="text-center mb-16 max-w-3xl mx-auto pointer-events-none">
        <Badge
          variant="secondary"
          className="rounded-full bg-[#E9E7FC] text-[#0C2217] font-medium px-4 py-1.5 text-sm mb-6"
        >
          {badge}
        </Badge>

        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[#0F0F0F] mb-6">
          {heading}
        </h2>

        <p className="text-lg text-[#3B3B3B] leading-relaxed">
          {subheading}
        </p>
      </div>


      {/* GRID */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {features.map(({ title, description, Icon }, i) => (
    <div
      key={i}
      className="p-10 rounded-xl border border-[#DBDBDE] bg-white"
    >

      {/* ICON */}
      <div className="mb-6 text-[#6A4BFA]">
        <Icon size={26} strokeWidth={1.8} />
      </div>

      {/* TITLE */}
      <h3 className="text-[22px] font-semibold text-[#190D00] mb-4">
        {title}
      </h3>

      {/* TEXT */}
      <div className="text-[15px] leading-7 text-[#6F6B66] space-y-2">
        {description.split("\n").map((line, j) => (
          <p key={j}>
            {line.startsWith("Warum es wirkt") || line.startsWith("Im Alltag") ? (
              <>
                <span className="font-semibold text-[#190D00]">
                  {line.split(":")[0]}:
                </span>{" "}
                {line.split(":").slice(1).join(":")}
              </>
            ) : (
              line
            )}
          </p>
        ))}
      </div>

    </div>
  ))}
</div>

    </section>
  )
}