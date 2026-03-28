"use client";
import { useState } from "react";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <h4 className="font-oswald text-xl font-bold mb-4 uppercase">Enquiry Now</h4>
      {submitted && (
        <div className="bg-green-100 text-green-700 p-3 mb-4 text-sm">
          Successful! We&apos;ll reply you ASAP!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Company Name" required className="form-control" />
        <input type="text" placeholder="Company Address" required className="form-control" />
        <input type="text" placeholder="Contact Person" required className="form-control" />
        <input type="text" placeholder="Contact Number" required className="form-control" />
        <input type="email" placeholder="Email" required className="form-control" />
        <textarea placeholder="Enquiry Information" rows={3} required className="form-control" />
        <button type="submit" className="btn-submit">Send Now</button>
      </form>
    </div>
  );
}
