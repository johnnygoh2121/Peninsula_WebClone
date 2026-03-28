"use client";

import Link from "next/link";
import Image from "next/image";
import { siteAsset } from "@/lib/siteAssets";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-dark text-[#999] py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h4 className="text-white text-lg font-oswald mb-4 uppercase">About Us</h4>
            <p className="text-sm leading-relaxed">
              Peninsula Precision Stamping (Malaysia) Sdn. Bhd. Was established on 1994 to fill a niche in the market of manufacturing precision parts. We have since diversified into pressed metal parts for bicycle parts, fishing reel parts and light electronic equipment parts. We take pride in our manufacturing capabilities and strive to ensure that all stamping and machining equipment are well maintained and updated to guarantee precision production standards that speak of customer satisfaction.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-oswald mb-4 uppercase">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/machines-and-department" className="hover:text-primary transition-colors">Machines &amp; Department</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/facilities" className="hover:text-primary transition-colors">Facilities</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/career" className="hover:text-primary transition-colors">Career</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white text-lg font-oswald mb-4 uppercase">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-1 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Lot 2033, Jalan Tanjung Kupang, 81550 Gelang Patah, Johor, Malaysia</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-1 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>shaha@my-peninsula.com</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-1 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+6012-3942033 (Ext. 118)</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-1 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <div>Monday-Friday : 8am to 5.30pm</div>
                  <div>Saturday &amp; Sunday : Closed</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white text-lg font-oswald mb-4 uppercase">Location</h4>
            <a
              href="https://www.google.com/maps?ll=1.435604,103.5885644&z=12&t=m&hl=en-US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={siteAsset("/images/footerMap.jpg")}
                alt="Location Map"
                width={270}
                height={180}
                className="w-full rounded hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#111114] text-[#666] py-4">
        <div className="container flex flex-col sm:flex-row items-center justify-between text-xs">
          <span>
            &copy; Copyright {new Date().getFullYear()}. All Rights Reserved. Powered by{" "}
            <a href="https://www.stooges.com.my" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              Stooges
            </a>
          </span>
          <button
            onClick={() => typeof window !== "undefined" && window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-2 sm:mt-0 text-[#666] hover:text-primary transition-colors"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
