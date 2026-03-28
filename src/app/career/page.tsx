"use client";
import { useState } from "react";
import PageBanner from "@/components/PageBanner";

export default function Career() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <PageBanner
        title="Career"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Career" }]}
      />

      <div className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left - Join Our Team */}
            <div>
              <h4 className="font-oswald text-xl mb-8 text-[#333] uppercase">Join Our Team</h4>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="feature-icon flex-shrink-0" style={{ width: 60, height: 60, fontSize: 20 }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <p className="text-sm text-[#666] leading-relaxed">
                    If you are expect in metal stamping industry and you would like us to know you can bring new inspiration to our company, please fill the form below and we will have person in charge to contact you.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="feature-icon flex-shrink-0" style={{ width: 60, height: 60, fontSize: 20 }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <p className="text-sm text-[#666] leading-relaxed">
                    PPS philosophy as per our President &amp; CEO, Mamoru Ueda, he want all employees to feel happy in working. This is our main concern! So if you think you want new challenge, know new people, learn new things in a happy environment, please act now!
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="feature-icon flex-shrink-0" style={{ width: 60, height: 60, fontSize: 20 }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <p className="text-sm text-[#666] leading-relaxed">
                    We are always looking for expert in the positions for operators, technicians, tooling engineers, planners ..etc.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Career Form */}
            <div>
              <h4 className="font-oswald text-xl mb-2 text-[#333] uppercase">Career Form</h4>
              <p className="text-sm text-[#666] mb-6">We hope to hearing from you soon.</p>
              {submitted && (
                <div className="bg-green-100 text-green-700 p-3 mb-4 text-sm">
                  Successful! We&apos;ll reply you ASAP!
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Name" required className="form-control" />
                <input type="text" placeholder="Contact Number" required className="form-control" />
                <input type="email" placeholder="Email Address" required className="form-control" />
                <textarea placeholder="Your Expert" rows={3} required className="form-control" />
                <div>
                  <label className="text-sm text-[#666] block mb-2">Your Document :</label>
                  <input type="file" className="text-sm" />
                </div>
                <button type="submit" className="btn-submit">Send Now</button>
              </form>
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
