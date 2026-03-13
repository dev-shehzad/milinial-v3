import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQProps {
  questions: {
    question: string
    answer: string
  }[]
}

export const FAQ: React.FC<FAQProps> = ({ questions }) => {
  return (
    <section className="w-full py-28 bg-[#ffffff]">
      <div className="max-w-[900px] mx-auto px-6">
    {/* badge */}
<div className="flex justify-center mb-6">
  <span
    className="
    px-4 
    py-1 
    text-[14px] 
    rounded-full 
    border 
    border-[#C3BBA833] 
    bg-[#F3F4F7] 
    text-[#3D3D3D]
    "
  >
    Häufige Fragen zu Leadership by Congruence® (LbC)
  </span>
</div>
        {/* heading */}
        <h2 className="text-center text-[48px] font-semibold leading-[1.1] text-black">
          Häufig gefragt. Direkt beantwortet.
        </h2>

        <p className="text-center text-gray-500 text-[16px] max-w-[620px] mx-auto mt-6">
          Transparente Antworten auf die Fragen, die Entscheider vor dem Start
          wirklich interessieren: Risiko, Ressourcen, Resultate.
        </p>

        <Accordion
          type="single"
          collapsible
          className="w-full mt-14 space-y-4"
        >
          {questions.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="
              border 
              border-[#C3BBA833] 
              rounded-[12px] 
              bg-white 
              px-6
              data-[state=open]:bg-gradient-to-r
              data-[state=open]:from-[#6A4BFA33]
              data-[state=open]:to-[#6A4BFA1A]
              "
            >
              <AccordionTrigger className="text-[18px] font-medium text-black py-5 hover:no-underline">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="text-gray-500 pb-6 leading-relaxed text-[15px]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  )
}