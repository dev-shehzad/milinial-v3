"use client";

export default function MarketRealitySection() {
  return (
    <section className="w-full bg-[#F5F6F8] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block bg-[#E9E7FC] text-[#2D3142] text-sm px-4 py-2 rounded-full">
            Die Realität im Markt
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <div className="relative">
            <h2 className="text-[34px] md:text-[44px] lg:text-[52px] font-semibold text-[#1F2437] leading-[1.1] max-w-[520px]">
              Warum klassisches <br />
              Management nicht <br />
              mehr reicht
            </h2>

            {/* Background pattern */}
            <div className="absolute -bottom-10 left-0 opacity-20 pointer-events-none">
              <svg width="220" height="160" viewBox="0 0 220 160" fill="none">
                <rect x="10" y="70" width="60" height="60" transform="rotate(45 10 70)" stroke="#C9CEDA"/>
                <rect x="80" y="10" width="60" height="60" transform="rotate(45 80 10)" stroke="#C9CEDA"/>
                <rect x="140" y="70" width="60" height="60" transform="rotate(45 140 70)" stroke="#C9CEDA"/>
                <rect x="80" y="120" width="60" height="60" transform="rotate(45 80 120)" stroke="#C9CEDA"/>
              </svg>
            </div>
          </div>

          {/* Right Side */}
          <div className="max-w-[560px]">
            <p className="text-[20px] md:text-[22px] text-[#010101] leading-relaxed mb-8">
              Die Anforderungen sind gestiegen, der Spielraum ist kleiner
              geworden. In dieser Lage erzeugen alte Steuerungslogiken oft
              Friktion – und genau die wird teuer.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Unternehmern und Führungskräften wird heute vieles gleichzeitig
              abverlangt: Nachfolge, Kostendruck, Substanzwerte regenerieren,
              Digitalisierung, geopolitische Unsicherheit. Was früher mit
              Planung, Reporting und Kontrolle ausreichend war, führt heute
              oft zu einem Paradox: Mehr Steuerung – weniger Wirkung.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Die Folge sind Frustration, zäher Fortschritt und
              mikroökonomische Schäden, die man erst spät in der GuV sieht:
              Opportunitätskosten, Fluktuation, Qualitätsverluste und
              verpasste Entscheidungen.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}