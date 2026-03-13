"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Props {
  heading: string
  subheading: string
  image: string
}

export default function CTABanner({ heading, subheading, image }: Props) {
  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN CONTAINER */}
        <div className="relative bg-[#f2f2f2] rounded-xl overflow-hidden pt-24 pb-16">

          {/* LEFT IMAGE */}
          <div className="absolute left-16 bottom-0 hidden lg:block z-20">
            <Image
              src={image}
              alt="team"
              width={420}
              height={520}
              className="object-contain"
            />
          </div>

          {/* PURPLE CONTENT CARD */}
          <div className="relative ml-auto lg:ml-[420px] mr-12 bg-gradient-to-r from-[#7C73F6] to-[#9187F9] rounded-xl px-16 py-16 text-white max-w-3xl shadow-lg">

            <h2 className="text-3xl lg:text-4xl font-semibold leading-snug mb-6">
              {heading}
            </h2>

            <p className="text-white/90 text-[15px] leading-relaxed mb-8 max-w-xl">
              {subheading}
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4">

              <Link
                href="#"
                className="flex items-center gap-3 bg-[#2F2AA3] hover:bg-[#221c7c] px-6 py-3 rounded-lg font-medium transition"
              >
                Leistungen ansehen
                <span className="flex items-center justify-center w-6 h-6 bg-white/20 rounded">
                  <ArrowRight size={14} />
                </span>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 border border-white/40 px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Angebot anfragen
                <span className="flex items-center justify-center w-6 h-6 bg-white/20 rounded">
                  <ArrowRight size={14} />
                </span>
              </Link>

            </div>
          </div>

          {/* BOTTOM BLUE LINE */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1DA1F2]" />
        </div>

        {/* LOGOS SECTION */}
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-wrap items-center gap-10 opacity-70">

          <span className="text-sm text-gray-500 mr-6">
            Mitglied von:
          </span>

          <Image src="/logos/sogi.png" alt="logo" width={120} height={40}/>
          <Image src="/logos/university.png" alt="logo" width={120} height={40}/>
          <Image src="/logos/ehl.png" alt="logo" width={100} height={40}/>
          <Image src="/logos/interim.png" alt="logo" width={120} height={40}/>
          <Image src="/logos/procure.png" alt="logo" width={120} height={40}/>
          <Image src="/logos/schkg.png" alt="logo" width={120} height={40}/>

        </div>

      </div>
    </section>
  )
}