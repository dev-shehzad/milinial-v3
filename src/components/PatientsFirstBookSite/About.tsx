import React from 'react'

const PatientsFirstBookAbout = () => {
  return (
    <section className="bg-[#F1F1F126] w-full px-4 md:px-8 xl:px-14 flex justify-center py-[80px] lg:py-[120px]">
      {/* Layout wrapper */}
      <div className="flex flex-col items-center w-full max-w-[1000px] gap-[40px] lg:gap-[48px]">
        
        {/* Top Header Section */}
        <div className="flex flex-col items-center gap-[24px] w-full">
          {/* Top Badge */}
          <div className="w-full max-w-[126px] h-[35px] border border-gray-200 bg-[#FFFFFF] rounded-[54px] pt-[4px] pr-[14px] pb-[4px] pl-[10px] flex items-center justify-center gap-[4px]">
            <span className="font-['Figtree',sans-serif] font-normal text-[16px] text-[#0C2217] leading-[170%] tracking-[-0.2px] align-middle whitespace-nowrap">
              Über das Buch
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['Inter',sans-serif] font-semibold text-[36px] md:text-[48px] lg:text-[57px] text-[#1E1A1C] leading-[1.1] lg:leading-[60px] tracking-[0px] lg:tracking-[-1.5px] text-center w-full mx-auto">
            Was in „Patience First“ drinsteckt
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center gap-[32px] w-full max-w-[900px]">
          <p className="font-['Inter',sans-serif] font-medium text-[16px] lg:text-[18px] text-[#363435] leading-[150%] lg:leading-[28px] tracking-[0px] text-center">
            Patienten behandeln oder Projekte betreuen? Ärztlichen Führungspersonen wird heutzutage alles abverlangt. Sie sollen Patienten behandeln, führen, managen und administrieren. Wie brauchbar sind vorhandene Konzepte wirklich? Wie gelingt der Spagat zwischen individuellem Patientenwohl und sogenannter Klinik-Performance?
          </p>

          <p className="font-['Inter',sans-serif] font-medium text-[16px] lg:text-[18px] text-[#363435] leading-[150%] lg:leading-[28px] tracking-[0px] text-center">
            Philipp R. Juchli schaut hinter die Kulissen der turbulenten Spitalwelt. Er räumt mit bisher falschen Führungsverständnissen auf und versorgt den Leser mit sofort verwertbaren Massnahmen. Wie schaffen es Ärzte, dass ihnen das Team folgt? Worauf ist zu achten? Was gilt es zu vermeiden? Das Wohl des Patienten ist immer Ausgangs- und Endpunkt zugleich.
          </p>

          <p className="font-['Inter',sans-serif] font-medium text-[16px] lg:text-[18px] text-[#363435] leading-[150%] lg:leading-[28px] tracking-[0px] text-center">
            Wer wissen möchte, wie man sich aus der negativen Abwärtsspirale des Mikromanagements befreit und eine positive Sogwirkung der &quot;Leadership&quot; erzeugt, lernt hier die wichtigsten Tricks kennen: im ersten deutschsprachigen Ratgeber für ärztliche Führungskräfte, mit zahlreichen Beispielen aus der täglichen Praxis.
          </p>
        </div>

      </div>
    </section>
  )
}

export default PatientsFirstBookAbout
