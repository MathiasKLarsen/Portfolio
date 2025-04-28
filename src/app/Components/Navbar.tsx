import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed bg-[var(--color-background)] w-full shadow-md px-6 py-4 flex items-center justify-between">
      <div>
        <Image 
          src="/IMG/logo.png"
          alt="github"
          width={75}
          height={75}
        />
      </div>
      <ul className="hidden sm:flex sm:items-center sm:gap-6 absolute sm:static top-16 left-0 w-full sm:w-auto bg-[var(--color-background)] px-6 sm:px-0 z-10">
        <li><Link href="/" className="block py-2 sm:py-0 text-[var(--color-primary)] hover:text-[var(--color-hover)]">Home</Link></li>
        <li><Link href="/about" className="block py-2 sm:py-0 text-[var(--color-primary)] hover:text-[var(--color-hover)]">About</Link></li>
        <li><Link href="/projects" className="block py-2 sm:py-0 text-[var(--color-primary)] hover:text-[var(--color-hover)]">Projects</Link></li>
        <li><Link href="/contact" className="block py-2 sm:py-0 text-[var(--color-primary)] hover:text-[var(--color-hover)]">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
