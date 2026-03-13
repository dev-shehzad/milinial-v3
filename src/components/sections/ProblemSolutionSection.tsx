import React from "react"
import { Zap, X } from "lucide-react"

interface ProblemItem {
  title?: string
  description: string
}

export const ProblemSolutionSection = () => {

  const painPoints: ProblemItem[] = [
    {
      title: "Zu viele Prioritäten gleichzeitig:",
      description: "Alles ist wichtig – dadurch wird nichts konsequent fertig.",
    },
    {
      title: "Entscheidungen werden langsam:",
      description: "Zu viele Schleifen, zu wenig klare Verantwortung.",
    },
    {
      title: "Mikromanagement nimmt zu:",
      description: "Kontrolle ersetzt Vertrauen – Ownership sinkt.",
    },
    {
      title: "Silos & politische Reibung:",
      description: "Abstimmung frisst Energie, statt Wert zu schaffen.",
    },
    {
      title: "Change-Müdigkeit:",
      description: "Initiativen starten, aber verankern nicht im Alltag.",
    },
  ]

  const symptoms: ProblemItem[] = [
    { description: "Meetings nehmen zu, Resultate nicht." },
    { description: "Projekte laufen „gelb/rot“, aber es gibt keine echte Eskalation." },
    { description: "Führungskräfte sind im Tagesgeschäft gefangen, Strategie bleibt PowerPoint" },
    { description: "Leistungsträger ziehen sich zurück oder gehen – Kultur kippt leise." },
  ]

  return (
    <section className="container mx-auto py-24">

      <div className="grid lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Pain-Punkte
          </h3>

          <div className="bg-[#F4F2FB] rounded-3xl p-8 space-y-4">

            {painPoints.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-[#E2DEFA] border border-[#D9D4F3] px-6 py-4 rounded-full shadow-[0_6px_16px_rgba(0,0,0,0.08)]"
              >
                {/* icon */}
                <div className="flex items-center justify-center w-9 h-9 rounded-full border border-red-200 bg-red-50 text-red-500">
                  <Zap size={16} />
                </div>

                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">
                    {item.title}
                  </span>{" "}
                  <span className="text-gray-500">
                    {item.description}
                  </span>
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col">

          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Typische Symptome
          </h3>

          <div className="bg-[#F4F2FB] rounded-3xl p-8 space-y-4 mb-8">

            {symptoms.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-[#E2DEFA] border border-[#D9D4F3] px-6 py-4 rounded-full shadow-[0_6px_16px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-full border border-red-200 bg-red-50 text-red-500">
                  <X size={16} />
                </div>

                <p className="text-sm font-medium text-gray-800">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

          <p className="text-sm leading-relaxed text-gray-900 font-semibold max-w-xl">
            Genau hier setzt Leadership by Congruence® an:
            <span className="text-gray-500 font-normal">
              {" "}Nicht mit mehr Programmen, sondern indem Richtung, Verhalten und
              System wieder zusammenpassen. So wird Veränderung steuerbar,
              Teams ziehen mit und Umsetzung wird wieder verlässlich.
            </span>
          </p>

        </div>

      </div>

    </section>
  )
}