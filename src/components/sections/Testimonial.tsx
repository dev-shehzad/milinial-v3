import React from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  image: string
}

export const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  image,
}) => {
  return (
    <section className="w-full py-28 bg-[#F5F8FB]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 text-sm bg-[#E9E8F3] text-gray-700 rounded-full">
            Testimonials
          </span>
        </div>

        {/* heading */}
        <h2 className="text-center text-[48px] font-semibold leading-[1.1] text-black">
          Die Wirkung von LbC –
          <br />
          beschrieben von unseren Kunden
        </h2>

        {/* subheading */}
        <p className="text-center text-gray-500 max-w-[620px] mx-auto mt-6 text-[16px]">
          Kurze Stimmen von VR, CEOs und Führungsteams, die mit Leadership by
          Congruence® Veränderung steuerbar gemacht haben
        </p>

        {/* testimonial card */}
        <div className="mt-16 grid md:grid-cols-[1.25fr_1fr] rounded-2xl overflow-hidden bg-white shadow-sm">

          {/* quote side */}
          <div className="bg-[#EDEFF2] p-[56px] flex flex-col justify-between">

            <p className="text-[26px] leading-[1.35] font-medium tracking-[-0.5px] text-[#050503]">
              “{quote}”
            </p>

            <div className="mt-12 flex items-center justify-between">

              <div>
                <p className="font-semibold text-black text-[15px]">
                  {author}
                </p>
                <p className="text-[14px] text-gray-500">
                  {role}
                </p>
              </div>

              <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center">
                <ArrowUpRight size={16} />
              </div>

            </div>

          </div>

          {/* image side */}
          <div className="relative h-[460px] w-full">
            <Image
              src={image}
              alt={author}
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>

        {/* slider dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-8 h-[3px] rounded-full bg-indigo-500"></div>
          <div className="w-2 h-[3px] rounded-full bg-gray-300"></div>
          <div className="w-2 h-[3px] rounded-full bg-gray-300"></div>
          <div className="w-2 h-[3px] rounded-full bg-gray-300"></div>
        </div>

      </div>
    </section>
  )
}