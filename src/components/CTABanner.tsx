import Link from "next/link";

export default function CTABanner() {
  return (
    <div className="bg-dark py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-white font-oswald text-2xl md:text-3xl">
          Get A Free Quote / Need a Help ?
        </h2>
        <Link
          href="/contact"
          className="border-2 border-white text-white px-8 py-3 rounded-full font-oswald uppercase text-sm tracking-wider hover:bg-primary hover:border-primary transition-all"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
