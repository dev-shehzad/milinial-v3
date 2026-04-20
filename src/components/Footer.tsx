import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="w-full bg-[#1c1c1c] text-white font-manrope pt-20 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">

                    {/* LEFT - Brand and Description */}
                    <div className="max-w-full lg:max-w-[380px]">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/footer-logo.png"
                                alt="MillennialC Logo"
                                width={200}
                                height={60}
                                className="w-44 lg:w-48 h-auto object-contain"
                                priority
                            />
                        </Link>
                        <p className="font-geist font-normal text-[16px] leading-[1.7] tracking-[-0.025em] text-[#A1A1AA]">
                            Wir führen Unternehmen durch Restrukturierung, Turnaround und Transformation – mit operativer Verantwortung statt Beraterdistanz und unverbindlichen Konzeptpapieren.
                        </p>
                    </div>

                    {/* RIGHT - Links Columns */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:flex lg:flex-row lg:gap-20">

                        {/* Navigation */}
                        <div>
                            <h3 className="font-inter font-medium text-[16px] leading-[1.8] tracking-[-0.0125em] text-white mb-6">Navigation</h3>
                            <ul className="flex flex-col gap-4">
                                <li><Link href="/" className="font-geist font-normal text-[16px] leading-[1.7] tracking-[-0.025em] text-[#A1A1AA] hover:text-white transition-colors">Home</Link></li>
                                <li><Link href="/services" className="font-geist font-normal text-[16px] leading-[1.7] tracking-[-0.025em] text-[#A1A1AA] hover:text-white transition-colors">Angebot</Link></li>
                                <li><Link href="/about" className="font-geist font-normal text-[16px] leading-[1.7] tracking-[-0.025em] text-[#A1A1AA] hover:text-white transition-colors">Über Uns</Link></li>
                                <li><Link href="/blogs" className="font-geist font-normal text-[16px] leading-[1.7] tracking-[-0.025em] text-[#A1A1AA] hover:text-white transition-colors">Blog</Link></li>
                                <li><Link href="/kontakt" className="font-geist font-normal text-[16px] leading-[1.7] tracking-[-0.025em] text-[#A1A1AA] hover:text-white transition-colors">Kontakt</Link></li>
                            </ul>
                        </div>

                        {/* Ressourcen */}
                        <div>
                            <h3 className="font-inter font-medium text-[16px] leading-[1.8] tracking-[-0.0125em] text-white mb-6">Ressourcen</h3>
                            <ul className="flex flex-col gap-4">
                                <li><Link href="/blogs?category=Publikationen" className="font-geist font-normal text-[16px] leading-[1.7] tracking-[-0.025em] text-[#A1A1AA] hover:text-white transition-colors">Publikationen</Link></li>
                                <li><Link href="/patients-first-book-site" className="font-geist font-normal text-[16px] leading-[1.7] tracking-[-0.025em] text-[#A1A1AA] hover:text-white transition-colors">Patients First Buch</Link></li>
                                <li><Link href="/client-first-book-site" className="font-geist font-normal text-[16px] leading-[1.7] tracking-[-0.025em] text-[#A1A1AA] hover:text-white transition-colors">Clients First Buch</Link></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div className="col-span-2 sm:col-span-1">
                            <h3 className="font-inter font-medium text-[16px] leading-[1.8] tracking-[-0.0125em] text-white mb-6">Legal</h3>
                            <ul className="flex flex-col gap-4">
                                <li><Link href="/impressum" className="font-geist font-normal text-[16px] leading-[1.7] tracking-[-0.025em] text-[#A1A1AA] hover:text-white transition-colors">Impressum</Link></li>
                                <li><Link href="/datenschutz" className="font-geist font-normal text-[16px] leading-[1.7] tracking-[-0.025em] text-[#A1A1AA] hover:text-white transition-colors">Datenschutz</Link></li>
                                <li><Link href="/agb" className="font-geist font-normal text-[16px] leading-[1.7] tracking-[-0.025em] text-[#A1A1AA] hover:text-white transition-colors">AGB</Link></li>
                                <li><Link href="/ai-transparency" className="font-geist font-normal text-[16px] leading-[1.7] tracking-[-0.025em] text-[#A1A1AA] hover:text-white transition-colors">AI Transparency</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
                    {/* Socials */}
                    <div className="flex items-center gap-5">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </a>
                        
                    </div>

                    {/* Copyright */}
                    <div className="text-[#A1A1AA] text-[14px] font-medium">
                        © {new Date().getFullYear()} Millennial C, all rights reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer