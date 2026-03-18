'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useBooking } from '@/providers/Booking'

export const SimpleCTA: React.FC = () => {
  const { openModal } = useBooking()

  return (
    <section className="w-full flex justify-center pb-[60px] lg:pb-[60px] bg-transparent">
      <div className="flex flex-col items-center gap-[40px] px-6 max-w-[1103px] w-full">
        {/* Headline */}
        <h3 className="w-full text-center font-['Geist',sans-serif] font-medium text-[28px] md:text-[36px] leading-[140%] tracking-[-1px] text-[#191715] m-0">
          Lassen Sie uns in 30 Minuten prüfen, welche Phase bei Ihnen gerade entscheidend ist.
        </h3>

        {/* Button */}
        <button
          onClick={openModal}
          className="flex flex-row justify-center items-center py-[8px] pl-[16px] pr-[8px] gap-[12px] h-[54.63px] rounded-[16px] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #2905C7',
            boxShadow: '0px 75px 30px rgba(0, 0, 0, 0.01), 0px 42px 25px rgba(0, 0, 0, 0.05), 0px 19px 19px rgba(0, 0, 0, 0.09), 0px 5px 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          <span className="font-['Figtree',sans-serif] font-semibold text-[18px] md:text-[20px] leading-[170%] tracking-[-0.2px] text-white whitespace-nowrap">
            LbC-Erstgespräch buchen
          </span>
          <div className="flex flex-row items-center justify-center p-[8px] gap-[8px] w-[38.63px] h-[38.63px] bg-white rounded-[12px] shrink-0">
            <ArrowRight className="w-[16px] h-[16px] text-[#666666] -rotate-45" strokeWidth={1.5} />
          </div>
        </button>
      </div>
    </section>
  )
}
