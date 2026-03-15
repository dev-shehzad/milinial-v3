import React from 'react'
import Image from 'next/image'
import { cn } from '@/utilities/ui'
import { Check } from 'lucide-react'

interface ServiceSectionProps {
  title: string
  description: string
  situations: string[]
  benefits: string[]
  image: string
  reversed?: boolean
  className?: string
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  situations,
  benefits,
  image,
  reversed = false,
  className,
}) => {
  return (
    <section className={cn('container py-24', className)}>
      <div className={cn('grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center', reversed ? 'direction-rtl' : '')}>
        {/* Text Column */}
        <div className={cn('space-y-8', reversed ? 'lg:order-2' : 'lg:order-1')}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-4">
                Typische Situationen:
              </h3>
              <ul className="space-y-3">
                {situations.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-4">
                Ihr Vorteil:
              </h3>
              <ul className="space-y-3">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className={cn('relative', reversed ? 'lg:order-1' : 'lg:order-2')}>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          {/* Decorative elements can be added here */}
        </div>
      </div>
    </section>
  )
}
