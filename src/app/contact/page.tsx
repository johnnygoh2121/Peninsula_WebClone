"use client";
import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import EnquiryForm from "@/components/EnquiryForm";

export default function Contact() {
  return (
    <div>
      <PageBanner
        title="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <div className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left - Contact Information */}
            <div>
              <h4 className="font-oswald text-xl mb-8 text-[#333] uppercase">Contact Information</h4>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="feature-icon flex-shrink-0" style={{ width: 60, height: 60, fontSize: 20 }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h5 className="font-oswald text-base mb-1 text-[#333] uppercase">Address</h5>
                    <p className="text-sm text-[#666] leading-relaxed">
                      Peninsula Precision Stamping (Malaysia) Sdn. Bhd, Lot 2033, Jalan Tanjung Kupang, 81550 Gelang Patah, Johor, Malaysia
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="feature-icon flex-shrink-0" style={{ width: 60, height: 60, fontSize: 20 }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h5 className="font-oswald text-base mb-1 text-[#333] uppercase">Phone</h5>
                    <p className="text-sm text-[#666]">Tel : +6012-3942033 (Ext 118)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="feature-icon flex-shrink-0" style={{ width: 60, height: 60, fontSize: 20 }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h5 className="font-oswald text-base mb-1 text-[#333] uppercase">Mail</h5>
                    <p className="text-sm text-[#666]">shaha@my-peninsula.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div>
              <h4 className="font-oswald text-xl mb-2 text-[#333] uppercase">Contact Form</h4>
              <p className="text-sm text-[#666] mb-6">Please do not feel hesitate to contact us or feel free to drop by to our office.</p>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>

      {/* Static Map Section */}
      <div className="w-full h-[376px] bg-[#e8e8e8] flex items-center justify-center">
        <div className="text-center text-[#999]">
          <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <p className="font-oswald text-lg">Peninsula Precision Stamping (Malaysia) Sdn. Bhd.</p>
          <p className="text-sm mt-1">Lot 2033, Jalan Tanjung Kupang, 81550 Gelang Patah, Johor, Malaysia</p>
          <a
            href="https://www.google.com/maps?ll=1.435604,103.5885644&z=12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm hover:underline mt-2 inline-block"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
