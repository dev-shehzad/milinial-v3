import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
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
export const revalidate = 60 // Revalidate every 60 seconds to pick up CMS changes

export default async function PatientsFirstBookPage() {
  const payload = await getPayload({ config: configPromise })
  
  const bookBenefits = await payload.findGlobal({
    slug: 'book-benefits',
  })

  const bookFAQ = await payload.findGlobal({
    slug: 'book-faq',
  })

  return (
    <div className="bg-[#FBFAF8] min-h-screen text-foreground">
      <PatientsFirstBookHero />
      <PatientsFirstBookTestimonial />
      <PatientsFirstBookAbout />
      <PatientsFirstBookAuthor />
      <PatientsFirstBookFreeChapter />
      <PatientsFirstBookTargetGroup />
      <PatientsFirstBookBenefits data={bookBenefits} />
      <PatientsFirstBookFAQ data={bookFAQ} />
      <PatientsFirstBookCTA />
      <Memberships />
    </div>
  )
}
