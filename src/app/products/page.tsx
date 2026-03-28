import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { siteAsset } from "@/lib/siteAssets";

const products = [
  { img: siteAsset("/images/product0.jpg"), title: "Bicycle Parts, Fishing reel parts & light electronic equipment parts", link: null },
  { img: siteAsset("/images/product1.jpg"), title: "Atmospheric corrosion (corrosion protection) monitoring equipment - Indoor", link: "/products/acm-sensor" },
  { img: siteAsset("/images/product2.jpg"), title: "Fe / Ag sensor", link: "/products/acm-sensor" },
  { img: siteAsset("/images/product3.jpg"), title: "Atmospheric corrosion (corrosion protection) monitoring equipment - Outdoor", link: "/products/acm-sensor" },
];

export default function Products() {
  return (
    <div>
      <PageBanner
        title="Products"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />
      <div className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden">
                  <Image src={p.img} alt={p.title} width={300} height={300} className="w-full h-auto" />
                  {p.link && (
                    <Link href={p.link} className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-oswald uppercase tracking-wider text-sm">Show Details</span>
                    </Link>
                  )}
                </div>
                <h3 className="font-oswald text-sm mt-2 text-[#333]">
                  {p.link ? (
                    <Link href={p.link} className="hover:text-primary transition-colors">{p.title}</Link>
                  ) : (
                    p.title
                  )}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
