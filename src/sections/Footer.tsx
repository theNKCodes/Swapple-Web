import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white px-4 py-3">
    <div className="flex flex-wrap justify-around">
      <Link href="/hiring" className="whitespace-nowrap px-2">#HIRING</Link>
      <span className="hidden sm:inline">|</span>
      <Link href="/growing" className="whitespace-nowrap px-2">#GROWING</Link>
      <span className="hidden sm:inline">|</span>
      <Link href="/swapplers" className="whitespace-nowrap px-2">#SWAPPLERS</Link>
      <span className="hidden sm:inline">|</span>
      <Link href="/grishhhhhh" className="whitespace-nowrap px-2 text-orange-300">GRISHHHHHH</Link>
      <span className="hidden sm:inline">|</span>
      <Link href="/whats-new" className="whitespace-nowrap px-2">WHAT'S NEW?</Link>
    </div>
  </footer>
  );
};
