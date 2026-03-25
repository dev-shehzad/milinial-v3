import React from 'react'

const cards = [
  {
    icon: (
      // Lock / secure icon
      <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6667 21.3333C9.95942 21.3333 9.28115 21.0524 8.78105 20.5523C8.28095 20.0522 8 19.3739 8 18.6667C8 17.1867 9.18667 16 10.6667 16C11.3739 16 12.0522 16.281 12.5523 16.781C13.0524 17.2811 13.3333 17.9594 13.3333 18.6667C13.3333 19.3739 13.0524 20.0522 12.5523 20.5523C12.0522 21.0524 11.3739 21.3333 10.6667 21.3333ZM18.6667 25.3333V12H2.66667V25.3333H18.6667ZM18.6667 9.33333C19.3739 9.33333 20.0522 9.61429 20.5523 10.1144C21.0524 10.6145 21.3333 11.2928 21.3333 12V25.3333C21.3333 26.0406 21.0524 26.7189 20.5523 27.219C20.0522 27.719 19.3739 28 18.6667 28H2.66667C1.95942 28 1.28115 27.719 0.781048 27.219C0.280951 26.7189 0 26.0406 0 25.3333V12C0 10.52 1.18667 9.33333 2.66667 9.33333H4V6.66667C4 4.89856 4.70238 3.20286 5.95262 1.95262C7.20286 0.702379 8.89856 0 10.6667 0C11.5421 0 12.4091 0.172438 13.2179 0.50747C14.0267 0.842501 14.7617 1.33356 15.3807 1.95262C15.9998 2.57168 16.4908 3.30661 16.8259 4.11544C17.1609 4.92428 17.3333 5.79119 17.3333 6.66667V9.33333H18.6667ZM10.6667 2.66667C9.6058 2.66667 8.58838 3.08809 7.83824 3.83824C7.08809 4.58839 6.66667 5.6058 6.66667 6.66667V9.33333H14.6667V6.66667C14.6667 5.6058 14.2452 4.58839 13.4951 3.83824C12.7449 3.08809 11.7275 2.66667 10.6667 2.66667Z" fill="white" />
      </svg>

    ),
    title: 'Sichere Datenübermittlung',
    text: 'Das Formular wird verschlüsselt übertragen; Daten werden SSL-geschützt verarbeitet.',
  },
  {
    icon: (
      // User protection / discreet icon
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.4635 19.72C17.5608 18.6187 18.2455 17.74 19.3402 17.5854C20.2988 17.45 21.7708 17.3334 24.0002 17.3334C26.2295 17.3334 27.7015 17.45 28.6602 17.5854C29.7548 17.74 30.4402 18.6187 30.5362 19.72C30.6223 20.6999 30.6659 21.6831 30.6668 22.6667C30.6668 25.676 29.0782 28.492 26.4028 29.8694C25.5088 30.3294 24.6362 30.6667 24.0002 30.6667C23.3642 30.6667 22.4915 30.3294 21.5975 29.8694C18.9215 28.492 17.3335 25.676 17.3335 22.6667C17.3335 21.528 17.3942 20.5114 17.4635 19.72Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M21.6667 23.178L23.8627 25.6667L27.0001 21M15.2981 15.8847C16.5115 15.2737 17.5314 14.3375 18.244 13.1808C18.9565 12.024 19.3337 10.692 19.3334 9.33333C19.3334 5.28333 16.0501 2 12.0001 2C7.95006 2 4.66673 5.28333 4.66673 9.33333C4.66646 10.692 5.04363 12.024 5.75616 13.1808C6.4687 14.3375 7.48858 15.2737 8.70206 15.8847C5.3574 17.042 2.8234 19.91 2.16673 23.4307C1.95473 24.568 2.61673 25.4973 3.76473 25.646C5.1614 25.8267 7.63806 26 12.0001 26C12.7161 26 13.3827 25.9956 14.0001 25.9867" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    ),
    title: 'Vertraulich & diskret',
    text: 'Nur die Personen, die für die Einordnung nötig sind. Keine Weitergabe, keine unnötigen Verteiler.',
  },
  {
    icon: (
      // Clock / time icon
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 30C13.2311 30 10.5243 29.1789 8.22202 27.6406C5.91973 26.1022 4.12532 23.9157 3.06569 21.3576C2.00607 18.7994 1.72882 15.9845 2.26901 13.2687C2.80921 10.553 4.14258 8.05845 6.10051 6.10051C8.05845 4.14258 10.553 2.80921 13.2687 2.26901C15.9845 1.72882 18.7994 2.00607 21.3576 3.06569C23.9157 4.12532 26.1022 5.91973 27.6406 8.22202C29.1789 10.5243 30 13.2311 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30ZM16 4.00001C13.6266 4.00001 11.3066 4.70379 9.33316 6.02237C7.35977 7.34095 5.8217 9.21509 4.91345 11.4078C4.0052 13.6005 3.76756 16.0133 4.23058 18.3411C4.69361 20.6689 5.83649 22.8071 7.51472 24.4853C9.19296 26.1635 11.3312 27.3064 13.6589 27.7694C15.9867 28.2325 18.3995 27.9948 20.5922 27.0866C22.7849 26.1783 24.6591 24.6402 25.9776 22.6668C27.2962 20.6935 28 18.3734 28 16C28 12.8174 26.7357 9.76516 24.4853 7.51472C22.2348 5.26429 19.1826 4.00001 16 4.00001Z" fill="white" />
        <path d="M20.59 22L15 16.41V7H17V15.58L22 20.59L20.59 22Z" fill="white" />
      </svg>

    ),
    title: 'Schnelle, klare Rückmeldung',
    text: 'Zeitnahe Antwort mit gezielten Fragen – und einer eindeutigen Empfehlung zum nächsten Schritt.',
  },
]

export const ContactTrust: React.FC = () => {
  return (
    <section className="w-full bg-white py-[70px] lg:py-[100px]">
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col items-center gap-[60px]">

        {/* ── HEADING BLOCK ── */}
        <div className="flex flex-col items-center gap-[16px] w-full text-center">

          {/* Heading + subheading */}
          <div className="flex flex-col items-center gap-[12px] w-full">
            <h2
              className="font-['Inter',sans-serif] font-medium text-[36px] md:text-[48px] lg:text-[58px] leading-[120%] text-center tracking-[-2.5px] text-[#0A0D11] m-0 max-w-[1052px]"
            >
              Vertraulich anfragen – sicher übermittelt
            </h2>
          </div>

          {/* Supporting text */}
          <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[170%] text-center text-[#4B4757] max-w-[548px] m-0">
            Vertrauliche, SSL-geschützte Übermittlung – mit schneller Rückmeldung, auch wenn der Bedarf nicht exakt in die Services passt.
          </p>

        </div>

        {/* ── 3 CARDS ── */}
        <div className="flex flex-col md:flex-row items-stretch gap-[24px] w-full">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex-1 relative bg-[#FCFBFF] rounded-[16px] flex flex-col items-center px-6 py-[31px] gap-[24px] min-h-[286px]"
            >
              {/* Icon bubble */}
              <div
                className="relative w-[70px] h-[70px] rounded-[16px] flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(193.18deg, #A899F0 -6.91%, #6A4BFA 73.67%)' }}
              >
                {/* Blurred glow shadow */}
                <div
                  className="absolute w-[71px] h-[30px] rounded-full pointer-events-none"
                  style={{
                    bottom: '-8px',
                    left: '10px',
                    background: 'rgba(49, 45, 65, 0.5)',
                    filter: 'blur(15px)',
                  }}
                />
                <span className="relative z-10">{card.icon}</span>
              </div>

              {/* Text */}
              <div className="flex flex-col items-center gap-[16px] w-full">
                <h3
                  className="font-['Geist',sans-serif] font-semibold text-[24px] leading-[140%] text-center tracking-[-0.5px] text-[#0A0D11] m-0"
                >
                  {card.title}
                </h3>
                <p
                  className="font-['Inter',sans-serif] font-normal text-[16px] leading-[170%] text-center text-[#4B4757] m-0 max-w-[319px]"
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
