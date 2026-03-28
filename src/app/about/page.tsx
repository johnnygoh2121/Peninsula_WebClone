"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import CTABanner from "@/components/CTABanner";
import { siteAsset } from "@/lib/siteAssets";

const milestones = [
  { date: "Jan 1994", event: "Incorporation", desc: "Incorporation of PPS" },
  { date: "Feb 1994", event: "Commencement", desc: "PPS commenced its business operations in Pekan Nenas" },
  { date: "Dec 2000", event: "ISO Accreditation", desc: "Obtained ISO 9000 (Sirim QAS)" },
  { date: "May 2002", event: "Factory expansion", desc: "Factory shifted to Gelang Patah due to expansion" },
  { date: "Jan 2006", event: "ISO Accreditation", desc: "Obtained ISO 14001 : 2004" },
];

const guidelines = [
  "Greetings : Customer, Superior, Senior",
  "Honest : Motivation to Teach & Learn",
  "Heart : To act from the bottom of your heart",
  "Responsibility : Clarity responsibility, Self-responsibility",
  "Clear Target : Be sure to implement (to achieve the goal)",
  "Promise : Keeping promise (being trust)",
  "Dream : Big",
  "Future : Forever",
];

const locations = [
  {
    img: siteAsset("/images/about2.jpg"),
    alt: "Headquater",
    title: "Our Headquater",
    lines: [
      "Ueda Industries Co. Ltd.",
      "Address: Osaka Prefecture Hiraku-shi, Tsuda Yamate 2-2-20 (in KansaiScience City Research Tsukuda Science Hills)",
      "TEL.072-808-3800 FAX.072-808-3801",
      "Phone: +81-72-638-5566, Fax: +81-72-638-5536",
    ],
    link: "http://www.uedaindustry.co.jp",
  },
  {
    img: siteAsset("/images/about3.jpg"),
    alt: "Yao Factory",
    title: "Yao Factory",
    lines: [
      "Address: Osaka Prefecture Yao City Nishiguchi 3 - 51 - 1",
      "TEL: +81-72-929-8320, FAX: +81-72-929-8321",
    ],
  },
  {
    img: siteAsset("/images/about4.jpg"),
    alt: "Mikata Factory",
    title: "Mikata Factory",
    lines: [
      "Address: Fukui Prefecture Mikata County Wakasa cho 18-18",
      "TEL: +81-770-45-0763, FAX: +81-770-45-1536",
    ],
  },
];

export default function About() {
  const [locOffset, setLocOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const visibleCount = isMobile ? 1 : 3;

  return (
    <div>
      <PageBanner
        title="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <div className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Milestones */}
            <div>
              <h4 className="font-oswald text-xl mb-6 text-[#333] uppercase">Milestones</h4>
              <Image src={siteAsset("/images/about5.jpg")} alt="Milestones" width={600} height={400} className="w-full h-auto mb-6" />
              <div className="overflow-x-auto">
                <table className="machine-table">
                  <thead>
                    <tr><th>Date</th><th>Event</th><th>Description</th></tr>
                  </thead>
                  <tbody>
                    {milestones.map((m, i) => (
                      <tr key={i}>
                        <td className="whitespace-nowrap">{m.date}</td>
                        <td>{m.event}</td>
                        <td>{m.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Thanks Note */}
            <div>
              <h4 className="font-oswald text-xl mb-4 text-[#333] uppercase">Thanks Note</h4>
              <h4 className="font-oswald text-lg mb-6 text-[#333]">Behavioral Guidelines</h4>
              <div className="space-y-4">
                {guidelines.map((g, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 flex-shrink-0 bg-primary/10 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-[#666] leading-relaxed pt-2">{g}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#999] italic mt-6">
                Peninsula Precision Stamping (M) Sdn. Bhd., President, Sho Okazaki
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Locations Carousel */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {locations.slice(locOffset, locOffset + visibleCount).map((loc, i) => (
                <div key={i} className="bg-white">
                  <Image src={loc.img} alt={loc.alt} width={500} height={320} className="w-full h-auto" />
                  <div className="p-5">
                    <h5 className="font-oswald text-lg mb-3 text-[#333]">{loc.title}</h5>
                    {loc.lines.map((line, j) => (
                      <p key={j} className="text-sm text-[#666] mb-1">{line}</p>
                    ))}
                    {loc.link && (
                      <a href={loc.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline mt-2 inline-block">
                        {loc.link}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {locations.length > visibleCount && (
              <>
                <button onClick={() => setLocOffset(Math.max(0, locOffset - 1))} className="absolute -left-4 top-1/3 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Previous">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={() => setLocOffset(Math.min(locations.length - visibleCount, locOffset + 1))} className="absolute -right-4 top-1/3 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Next">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
