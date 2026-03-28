import Link from "next/link";

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageBanner({ title, breadcrumbs }: PageBannerProps) {
  return (
    <div className="bg-[#f5f5f5] border-b border-[#eee] py-8">
      <div className="container">
        <h1 className="font-oswald text-2xl md:text-3xl text-[#333] mb-2">{title}</h1>
        <nav className="text-sm text-[#999]">
          {breadcrumbs.map((crumb, i) => (
            <span key={i}>
              {i > 0 && <span className="mx-2">/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-primary transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-primary">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
