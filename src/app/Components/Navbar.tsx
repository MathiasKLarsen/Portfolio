import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed gradient-nav 100% w-full shadow-md px-6 py-4 flex items-center justify-between">
      <div>
        <Image 
          src="/IMG/ML.png"
          alt="github"
          width={125}
          height={125}
        />
      </div>
      <ul className="hidden bg-transparent sm:flex sm:items-center sm:gap-6 absolute sm:static top-16 left-0 w-full sm:w-auto px-6 sm:px-0 z-10">
        <li><Link href="/" className="block text-xl py-2 sm:py-0 text-[var(--color-primary)] hover:text-[var(--color-hover)]">Home</Link></li>
        <li><Link href="/about" className="block text-xl py-2 sm:py-0 text-[var(--color-primary)] hover:text-[var(--color-hover)]">About</Link></li>
        <li><Link href="/projekter" className="block text-xl py-2 sm:py-0 text-[var(--color-primary)] hover:text-[var(--color-hover)]">Projects</Link></li>
        <li><Link href="/skills" className="block text-xl py-2 sm:py-0 text-[var(--color-primary)] hover:text-[var(--color-hover)]">Skills</Link></li>
        <li><Link href="/contact" className="block text-xl py-2 sm:py-0 text-[var(--color-primary)] hover:text-[var(--color-hover)]">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
