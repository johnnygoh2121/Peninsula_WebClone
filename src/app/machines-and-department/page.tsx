"use client";
import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import EnquiryForm from "@/components/EnquiryForm";

const stampingData = [
  ["DOBBY 20 TON", "1"], ["DOBBY 40 TON", "1"], ["AMADA 60 TON", "1"],
  ["AMADA & AIDA 80 TON", "5"], ["AMADA & AIDA 150 TON", "3"], ["AIDA & AMADA 200 TON", "5"],
  ["AMADA 250 TON", "1"], ["HARIKAWA 15 TON", "1"], ["E23 EPH & KOMATSU 110 TON", "2"],
  ["KOMATSU 250 TON", "1"], ["AIDA 300 TON", "2"], ["KOMATSU 500 TON", "2"],
  ["H&F BLANKING PRESS 800 TON", "1"], ["MANZONI 800T", "1"], ["COLOMBO 1000 TON", "2"],
  ["Step cut Machine", "2"], ["KOMATSU 150 TON", "1"],
];

const machiningData = [["Cutting machines", "6"]];

const rivetingData = [
  ["YANGLI PRESS MACHINE 60T (Auto)", "1"], ["YANGLI60T (Auto)", "1"],
  ["CHIN FONG 60T (Auto)", "1"], ["YANGLI 80T (Manual)", "1"],
];

const manualPressData = [
  ["AMADA 200T", "1"], ["KOMATSU 80T", "2"], ["YANGLI JH21 80T", "2"],
  ["KOMATSU 45T", "1"], ["YANGLI JH21 40T", "1"], ["YANGLI JH21 25T", "1"],
];

const hfData = [
  ["ESTER MACHINE", "1"], ["HF CRANK MACHINE", "1"], ["HIGH FINISHING MACHINE", "1"],
  ["SELECTION LINE", "2"], ["BONDERIZING MACHINE", "1"],
];

const toolRoomData = {
  "MACHINE : CNC EDM": [["SODICK AQ35L/LR", "1"]],
  "MACHINE : SURFACE GRINDING": [["OKAMOTO M350", "1"], ["OKAMOTO PSG63GX", "1"], ["SEEDTEC YSG 618S", "1"]],
  "MACHINE : MILLING": [["SHIZUOKA VHR-SD", "1"]],
  "MACHINE : DRILLING": [["WEST LAKE", "1"], ["YAMAMOTO", "1"]],
};

const qcData = {
  "CONTRACER MACHINE": [["MITUTOYO CV-3000", "1"]],
  "PROFILE PROJECTOR": [["MITUTOYO PH-5300", "1"]],
  "VIDEO COMPARATOR": [["DELTRONIC (DVC 120)", "1"]],
  "AUTOGRAPH MACHINE": [["SHIMADZU (AG 5000E)", "1"]],
  "HARDNESS TEST MACHINE": [["MITUTOYO (ATK F1000)", "1"]],
  "DIGIMATIC HEIGHT GAGES": [["MITUTOYO (SERIES 192)", "1"]],
};

function MachineTable({ title, data }: { title: string; data: string[][] }) {
  return (
    <div className="mb-6">
      <table className="machine-table">
        <thead>
          <tr><th>{title}</th><th>Progressive (Unit)</th></tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}><td>{row[0]}</td><td>{row[1]}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MachinesAndDepartment() {
  const [activePanel, setActivePanel] = useState("our-machines");

  const panels = [
    { id: "our-machines", title: "OUR MACHINES" },
    { id: "tool-room", title: "TOOL ROOM" },
    { id: "quality-control", title: "QUALITY CONTROL" },
  ];

  return (
    <div>
      <PageBanner
        title="Machines and Department"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Machines and Department" }]}
      />
      <div className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Accordion */}
            <div className="lg:col-span-7">
              {panels.map((panel) => (
                <div key={panel.id} className="mb-2">
                  <button
                    onClick={() => setActivePanel(activePanel === panel.id ? "" : panel.id)}
                    className={`w-full text-left px-5 py-3 font-oswald text-base uppercase tracking-wide transition-colors ${
                      activePanel === panel.id ? "bg-primary text-white" : "bg-[#f5f5f5] text-[#333] hover:bg-[#eee]"
                    }`}
                  >
                    {panel.title}
                    <span className="float-right">{activePanel === panel.id ? "−" : "+"}</span>
                  </button>
                  {activePanel === panel.id && (
                    <div className="p-5 border border-t-0 border-[#eee]">
                      {panel.id === "our-machines" && (
                        <>
                          <h5 className="font-oswald text-base mb-3 text-[#333]">STAMPING DEPT</h5>
                          <MachineTable title="Machines Type" data={stampingData} />
                          <h5 className="font-oswald text-base mb-3 text-[#333]">MACHINING</h5>
                          <MachineTable title="Machines Type" data={machiningData} />
                          <h5 className="font-oswald text-base mb-3 text-[#333]">RIVETING</h5>
                          <MachineTable title="Machines Type" data={rivetingData} />
                          <h5 className="font-oswald text-base mb-3 text-[#333]">MANUAL PRESS</h5>
                          <MachineTable title="Machines Type" data={manualPressData} />
                          <h5 className="font-oswald text-base mb-3 text-[#333]">HIGH FINISHING BONDERIZING DEPARTMENT</h5>
                          <MachineTable title="Machines Type" data={hfData} />
                        </>
                      )}
                      {panel.id === "tool-room" && (
                        <>
                          {Object.entries(toolRoomData).map(([title, data]) => (
                            <div key={title}>
                              <MachineTable title={title} data={data} />
                            </div>
                          ))}
                        </>
                      )}
                      {panel.id === "quality-control" && (
                        <>
                          <div className="mb-6 p-4 bg-[#f9f9f9] border-l-4 border-primary">
                            <p className="text-sm text-[#666] leading-relaxed italic">
                              <strong>Quality Policy:</strong> We believe that UEDA &amp; PPS&apos;s mission is to deliver peace of mind and superior products to our customers based on the basic policy of &apos;better products as soon as possible&apos;. For that purpose, we will constantly seek high aspirations and existential values, pursue production rationalization, and realize with motivation and enthusiasm.
                            </p>
                          </div>
                          {Object.entries(qcData).map(([title, data]) => (
                            <div key={title}>
                              <MachineTable title={title} data={data} />
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column - Enquiry Form */}
            <div className="lg:col-span-5">
              <div className="border border-[#eee] p-6">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
