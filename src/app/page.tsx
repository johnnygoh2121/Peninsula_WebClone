"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { siteAsset } from "@/lib/siteAssets";

const slides = [
  { bg: siteAsset("/images/homeBg3.jpg") },
  { bg: siteAsset("/images/homeBg4.jpg") },
];

const products = [
  { img: siteAsset("/images/homeProduct0.jpg"), title: "Bicycle Parts, Fishing reel parts & light electronic equipment parts", link: "/products" },
  { img: siteAsset("/images/homeProduct1.jpg"), title: "Atmospheric corrosion (corrosion protection) monitoring equipment - Indoor", link: "/products/acm-sensor" },
  { img: siteAsset("/images/homeProduct2.jpg"), title: "Fe / Ag sensor", link: "/products/acm-sensor" },
  { img: siteAsset("/images/homeProduct3.jpg"), title: "Atmospheric corrosion (corrosion protection) monitoring equipment - Outdoor", link: "/products/acm-sensor" },
];

const isoCards = [
  {
    img: siteAsset("/images/iso-9001.jpg"),
    pdf: siteAsset("/pdf/ISO-9001-2008-CERTIFICATE.PDF"),
    title: "CERTIFICATE NO: QA-D/MYS/9001/0168",
    desc: "ISO 9001 : 2008 Certification scope : Manufacture of Precision Metal Stamping, Component for Bicycle, Fishing Reels, Electrical and Other Related Industries Components Registration Number : QA/MYS/0036 Date Of Issue: 29th May 2008",
  },
  {
    img: siteAsset("/images/iso-14001.jpg"),
    pdf: siteAsset("/pdf/ISO-14001-2004-CERTIFICATE.PDF"),
    title: "CERTIFICATE NO: QA-D/MYS/14001/0030",
    desc: "ISO 14001 : 2004 Certification scope : Manufacturing of Precision Metal Stamping Parts for Bicycle, Fishing Reels, Electrical & Electronics Industries. Registration Number : A21 ENV 723 Date Of Issue: 28th December 2007",
  },
  {
    img: siteAsset("/images/iso-comingSoon.jpg"),
    pdf: null,
    title: "Coming Soon...",
    desc: "",
  },
];

const clients = [
  { img: siteAsset("/images/happyClient2.jpg"), alt: "UEDA INDUSTRY CO.LTD" },
  { img: siteAsset("/images/happyClient3.jpg"), alt: "KAMI ELECTRONICS IND" },
  { img: siteAsset("/images/happyClient4.jpg"), alt: "LOCAL ASSEMBLY (M) SDN. BHD." },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productOffset, setProductOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 9000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const visibleCount = isMobile ? 1 : 3;
  const maxOffset = Math.max(0, products.length - visibleCount);

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative w-full h-[400px] md:h-[550px] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <Image src={slide.bg} alt="Hero" fill className="object-cover" priority={i === 0} />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="font-oswald text-3xl md:text-[60px] font-bold text-white tracking-wider mb-4 drop-shadow-lg leading-tight">
                METAL STAMPING IS OUR EXPERT
              </h1>
              <div className="bg-black/50 px-6 py-2 inline-block">
                <h2 className="font-oswald text-xl md:text-[48px] text-white tracking-wider leading-tight">
                  WE TAKE CARE OF YOUR METAL PARTS
                </h2>
              </div>
            </div>
          </div>
        ))}
        <button onClick={() => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2" aria-label="Previous slide">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2" aria-label="Next slide">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </section>

      {/* Products Carousel */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="relative">
            <div className="flex gap-5 overflow-hidden">
              {products.slice(productOffset, productOffset + visibleCount).map((p, i) => (
                <div key={i} className="flex-shrink-0 w-full md:w-[calc(33.333%-14px)]">
                  <Link href={p.link} className="block group">
                    <div className="overflow-hidden">
                      <Image src={p.img} alt={p.title} width={500} height={320} className="w-full h-auto group-hover:opacity-80 transition-opacity" />
                    </div>
                    <h3 className="font-oswald text-base mt-3 text-[#333] group-hover:text-primary transition-colors">{p.title}</h3>
                    <span className="inline-block mt-2 text-xs text-primary font-oswald uppercase tracking-wider">Read More</span>
                  </Link>
                </div>
              ))}
            </div>
            <button onClick={() => setProductOffset(Math.max(0, productOffset - 1))} className="absolute -left-4 top-1/3 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Previous product">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => setProductOffset(Math.min(maxOffset, productOffset + 1))} className="absolute -right-4 top-1/3 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Next product">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Feature Boxes */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container">
          <h4 className="font-oswald text-xl text-center mb-10 text-[#333]">Increase Performance, Ensure Quality, Reduce Waste.</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="feature-icon mx-auto">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h5 className="font-oswald text-lg mb-3">Who We Are?</h5>
              <p className="text-sm text-[#666] leading-relaxed">Peninsula Precision Stamping (Malaysia) Sdn. Bhd. Was established on 1994 to fill a niche in the market of manufacturing precision parts. We have since diversified into pressed metal parts for bicycle parts, fishing reel parts and light electronic equipment parts.</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h5 className="font-oswald text-lg mb-3">Why Choose Us?</h5>
              <p className="text-sm text-[#666] leading-relaxed">Our press machinery capacities, ranging from 15 ton to 1000 ton, advantages for us to fullfill your BIG volumn.</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h5 className="font-oswald text-lg mb-3">What we Do?</h5>
              <p className="text-sm text-[#666] leading-relaxed">Metal stamping for bicycle, fishing reel parts and related components. Our plant is equipped with stamping process (manual &amp; progressive). Tooling design, assembly and secondary processing.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="feature-icon mx-auto">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h5 className="font-oswald text-lg mb-3">MANAGEMENT PHILOSOPHY</h5>
              <p className="text-sm text-[#666] leading-relaxed">Peninsula Precision Stamping (M) Sdn. Bhd., President, Sho Okazaki : As a company wishes for the development of the company and the happiness of the employees, Team UEDA &amp; PPS believes in quality improvement and technology creation, constantly creating superior products and continuing to challenge as much as possible in order to further enhance customer trust.</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h5 className="font-oswald text-lg mb-3">ENVIRONMENTAL PHILOSOPHY</h5>
              <p className="text-sm text-[#666] leading-relaxed">Ueda Industry Co.Ltd, PPS, the preservation of the global environment Recognizing that it is one of the most important issues common to humanity In all aspects of corporate activity, We will continue to act in consideration of the preservation of the global environment and the local environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ISO Certificates */}
      <section className="py-16 bg-white">
        <div className="container">
          <h4 className="font-oswald text-xl mb-8 text-[#333]">Our ISO Certificate</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {isoCards.map((card, i) => (
              <div key={i} className="group">
                {card.pdf ? (
                  <a href={card.pdf} target="_blank" rel="noopener noreferrer">
                    <Image src={card.img} alt={card.title} width={570} height={370} className="w-full h-auto group-hover:opacity-80 transition-opacity" />
                  </a>
                ) : (
                  <Image src={card.img} alt={card.title} width={570} height={370} className="w-full h-auto" />
                )}
                <h5 className="font-oswald text-base mt-4 mb-2 text-[#333]">{card.title}</h5>
                {card.desc && <p className="text-sm text-[#666] leading-relaxed">{card.desc}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Customers */}
      <section className="py-[75px] bg-[#f5f5f5]">
        <div className="container">
          <h4 className="font-oswald text-xl mb-8 text-[#333]">Our Customers</h4>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {clients.map((c, i) => (
              <Image key={i} src={c.img} alt={c.alt} width={170} height={85} className="grayscale hover:grayscale-0 transition-all" />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
