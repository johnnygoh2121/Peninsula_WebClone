import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { siteAsset } from "@/lib/siteAssets";

export default function AcmSensor() {
  return (
    <div>
      <PageBanner
        title="ACM Sensor"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "ACM Sensor" },
        ]}
      />
      <div className="py-12">
        <div className="container max-w-4xl">
          <article className="prose max-w-none">
            <div className="text-center mb-8">
              <Image src={siteAsset("/images/productDetail-1.jpg")} alt="ACM Sensor" width={800} height={500} className="w-full h-auto" />
            </div>

            <h3 className="font-oswald text-xl mt-8 mb-4 text-[#333]">New Product</h3>
            <h1 className="font-oswald text-2xl md:text-3xl mb-6 text-[#333]">
              ACM Sensor Temperature &amp; humidity Logger (Outdoor) &amp; ACM Sensor Hot-wet Logger (Indoor)
            </h1>

            <h3 className="font-oswald text-xl mt-8 mb-4 text-[#333]">Feature:</h3>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              The measurement interval is 10 minutes / year, Record capacity of 60000 points. It can measure rainfall, wetness, drying time, corrosivity factor of sea salt equivalent amount of adhesion and metal corrosion amount. Waterproof, compact, lightweight, built-in recordable battery
            </p>

            <h3 className="font-oswald text-xl mt-8 mb-4 text-[#333]">Specification:</h3>
            <div className="text-sm text-[#666] leading-relaxed mb-6 space-y-2">
              <p><strong>Outdoor:</strong> High Salt Environment Temperature &amp; humidity meter, Dimension 100(W)x100(H)x40(D)mm, Decomposition 0.01nA~10nA</p>
              <p><strong>Indoor:</strong> Temperature &amp; humidity meter, Dimension 65(W)x120(H)x22(D)mm, Decomposition 0.01nA~10nA, Thermometer Hygrometer, Sensor size 40(W)x40(H)x0.8(D)mm</p>
            </div>

            <h3 className="font-oswald text-xl mt-8 mb-4 text-[#333]">Application:</h3>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              Buildings built during the economic growth period have been aged more than 50 years ago. In order to ensure safety, it is necessary to grasp the speed of corrosion and to establish a maintenance plan. It is the atmospheric corrosion monitoring unit (sensor / logger). It can also be used as backing data which is a corrosion prevention environment. Example: Playground, bridge, tunnel, buildings, factories, ships, energy generation equipment
            </p>
            <div className="my-6">
              <Image src={siteAsset("/images/productDetail-2.jpg")} alt="ACM Application" width={800} height={500} className="w-full h-auto" />
            </div>

            <h3 className="font-oswald text-xl mt-8 mb-4 text-[#333]">Principle:</h3>
            <p className="text-sm text-[#666] leading-relaxed italic mb-4">
              With Atmospheric corrosion (corrosion protection) monitoring unit, you can infer the metal corrosion speed.
            </p>
            <div className="my-6">
              <Image src={siteAsset("/images/productDetail-3.jpg")} alt="ACM Principle" width={800} height={500} className="w-full h-auto" />
            </div>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              The corrosion evaluation of metallic materials in the atmosphere was the mainstream of the long-term exposure test of 10-20 years and the visual observation of metal material specimens. Using the ACM sensor with electrodes, it is now possible to infer metal corrosion peeling by measuring the corrosion environment factor and metal corrosion amount of precipitation, wetting, drying time, sea salt equivalent adhesion. Corrosion prevention environment survey, utilizing the environment free from condensation as empirical data, appeal for safety and security.
            </p>

            <h3 className="font-oswald text-xl mt-8 mb-4 text-[#333]">Installation : Conventional vs NEW!</h3>
            <div className="my-6">
              <Image src={siteAsset("/images/productDetail-4.jpg")} alt="Installation comparison" width={800} height={500} className="w-full h-auto" />
            </div>
            <p className="text-sm text-[#666] leading-relaxed font-bold mb-4">
              Measurement record reservation, monitoring, aggregation with dedicated application Analysis (Corrosion Speed: Total Electricity)
            </p>
            <div className="my-6">
              <Image src={siteAsset("/images/productDetail-5.jpg")} alt="Analysis" width={800} height={500} className="w-full h-auto" />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
