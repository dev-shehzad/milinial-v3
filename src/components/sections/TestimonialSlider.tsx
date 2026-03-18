'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { ArrowUpRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

interface TestimonialData {
  quote: string
  author: string
  role: string
  image: string
}

const testimonials: TestimonialData[] = [
  {
    quote: "Wir hatten nicht zu wenig Strategie - wir hatten zu wenig Kongruenz. LbC hat Ziele, Entscheidungswege und Verhalten wieder stimmig gemacht. Ab Woche 9 waren Entscheidungen schneller und Diskussionen kürzer.",
    author: "Hans Muster",
    role: "COO, Mustermann AG",
    image: "/assets/how-to-work/confidentMen.png",
  },
  {
    quote: "Wir hatten nicht zu wenig Strategie – wir hatten zu wenig Kongruenz. LbC hat Ziele, Entscheidungswege und Verhalten wieder stimmig gemacht. Ab Woche 6 waren Entscheidungen schneller und Diskussionen kürzer.",
    author: "Stefan K.",
    role: "CEO, Mittelstand",
    image: "/assets/how-to-work/confidentMen.png",
  },
  {
    quote: "Durch die klare Struktur von LbC konnten wir unsere Prozesse radikal vereinfachen. Das Team arbeitet jetzt wesentlich fokussierter und motivierter an den gemeinsamen Zielen.",
    author: "Petra L.",
    role: "Head of Operations",
    image: "/assets/how-to-work/confidentMen.png",
  },
]

export const TestimonialSlider: React.FC = () => {
  return (
    <section className="w-full bg-white flex justify-center py-[90px] px-6 lg:px-[120px]">
      <div className="w-full max-w-[1200px] flex flex-col items-center gap-[80px]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-[16px] text-center max-w-[942px]">
          {/* Badge */}
          <div className="inline-flex items-center px-[12px] py-[4px] gap-[4px] bg-[#E9E7FC] border border-[rgba(152,157,173,0.3)] rounded-[36px]">
            <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[170%] text-[#403F3C]">
              Testimonials
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['Inter',sans-serif] font-semibold text-[32px] md:text-[48px] lg:text-[60px] leading-[120%] tracking-[-1.5px] text-[#050503] m-0">
            Die Wirkung von LbC –<br className="hidden md:block" /> beschrieben von unseren Kunden
          </h2>

          {/* Subheading */}
          <p className="font-['Inter',sans-serif] font-normal text-[16px] md:text-[18px] leading-[170%] text-[#403F3C] max-w-[630px] m-0">
            Kurze Stimmen von VR, CEOs und Führungsteams, die mit Leadership by Congruence® Veränderung steuerbar gemacht haben
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="w-full relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            className="w-full"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full min-h-[520px] bg-[#F5F8FB] rounded-[24px] overflow-hidden flex flex-col lg:flex-row">
                  {/* Left Content */}
                  <div className="flex-1 p-[40px] md:p-[60px] lg:p-[40px] xl:pl-[40px] xl:pt-[40px] flex flex-col justify-between">
                    {/* Big Quote */}
                    <p className="font-['Inter',sans-serif] font-medium text-[24px] md:text-[32px] lg:text-[36px] leading-[120%] tracking-[-1px] text-[#050503] m-0 max-w-[577px]">
                      “{item.quote}”
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center justify-between mt-[40px]">
                      <div className="flex flex-col gap-[4px]">
                        <p className="font-['Inter',sans-serif] font-medium text-[16px] leading-[24px] tracking-[-0.02em] text-[#050503] m-0">
                          {item.author}
                        </p>
                        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] tracking-[-0.02em] text-[#71717A] m-0">
                          {item.role}
                        </p>
                      </div>
                      <div className="w-[40px] h-[40px] flex items-center justify-center shrink-0">
                         <ArrowUpRight className="text-black" size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="relative w-full lg:w-[540px] h-[400px] lg:h-[520px]">
                    <Image
                      src={item.image}
                      alt={item.author}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center gap-[4px] mt-[40px]"></div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .custom-pagination .swiper-pagination-bullet {
          width: 16px;
          height: 6px;
          background: #9283DF !important;
          opacity: 0.2 !important;
          border-radius: 8px !important;
          transition: all 0.3s ease;
          margin: 0 !important;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 60px !important;
          background: #6A4BFA !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  )
}
