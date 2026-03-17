import React from 'react'
import PatientsFirstBookHero from '@/components/PatientsFirstBookSite/Hero'
import PatientsFirstBookTestimonial from '@/components/PatientsFirstBookSite/Testimonial'
import PatientsFirstBookAbout from '@/components/PatientsFirstBookSite/About'
import PatientsFirstBookAuthor from '@/components/PatientsFirstBookSite/Author'
import PatientsFirstBookFreeChapter from '@/components/PatientsFirstBookSite/FreeChapter'
import PatientsFirstBookTargetGroup from '@/components/PatientsFirstBookSite/TargetGroup'
import PatientsFirstBookBenefits from '@/components/PatientsFirstBookSite/Benefits'
import PatientsFirstBookFAQ from '@/components/PatientsFirstBookSite/FAQ'
import PatientsFirstBookCTA from '@/components/PatientsFirstBookSite/CTA'
import { Memberships } from '@/components/Memberships'

export const dynamic = 'force-static'

export default function PatientsFirstBookPage() {
  return (
    <div className="bg-[#FBFAF8] min-h-screen text-foreground">
      <PatientsFirstBookHero />
      <PatientsFirstBookTestimonial />
      <PatientsFirstBookAbout />
      <PatientsFirstBookAuthor />
      <PatientsFirstBookFreeChapter />
      <PatientsFirstBookTargetGroup />
      <PatientsFirstBookBenefits />
      <PatientsFirstBookFAQ />
      <PatientsFirstBookCTA />
      <Memberships />
    </div>
  )
}
