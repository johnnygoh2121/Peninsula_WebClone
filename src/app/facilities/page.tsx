"use client";
import { useState } from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { siteAsset } from "@/lib/siteAssets";

const machineImages = Array.from({ length: 15 }, (_, i) => ({
  thumb: siteAsset(`/images/machines/${i + 14}-s.jpg`),
  full: siteAsset(`/images/machines/${i + 14}.jpg`),
  category: "machines",
}));

const toolRoomImages = Array.from({ length: 6 }, (_, i) => ({
  thumb: siteAsset(`/images/tool rooms/${i + 4}-s.jpg`),
  full: siteAsset(`/images/tool rooms/${i + 4}.jpg`),
  category: "toolRooms",
}));

const qcImages = [5, 6, 8].map((n) => ({
  thumb: siteAsset(`/images/quality control/${n}-s.jpg`),
  full: siteAsset(`/images/quality control/${n}.jpg`),
  category: "qualityControl",
}));

const allImages = [...machineImages, ...toolRoomImages, ...qcImages];

const filters = [
  { label: "Show All", value: "all" },
  { label: "MACHINES", value: "machines" },
  { label: "TOOL ROOMS", value: "toolRooms" },
  { label: "QUALITY CONTROL", value: "qualityControl" },
];

export default function Facilities() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filtered = activeFilter === "all"
    ? allImages
    : allImages.filter((img) => img.category === activeFilter);

  return (
    <div>
      <PageBanner
        title="Facilities"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Facilities" }]}
      />
      <div className="py-12">
        <div className="container">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-6 py-2 font-oswald text-sm uppercase tracking-wider transition-colors ${
                  activeFilter === f.value
                    ? "bg-primary text-white"
                    : "bg-[#f5f5f5] text-[#333] hover:bg-[#eee]"
                }`}
              >
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                {f.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((img, i) => (
              <div
                key={`${img.category}-${i}`}
                className="relative group cursor-pointer overflow-hidden"
                onClick={() => setLightboxImage(img.full)}
              >
                <Image
                  src={img.thumb}
                  alt={`Facility ${img.category}`}
                  width={560}
                  height={385}
                  className="w-full h-auto transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-primary z-10"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <Image src={lightboxImage} alt="Facility" width={1200} height={800} className="max-w-[90%] max-h-[90vh] object-contain" />
        </div>
      )}
    </div>
  );
}
