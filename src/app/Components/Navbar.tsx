import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed bg-[var(--color-background)] w-full shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-[var(--color-primary)]">Portfolio</div>
      <ul className="hidden sm:flex sm:items-center sm:gap-6 absolute sm:static top-16 left-0 w-full sm:w-auto bg-[var(--color-background)] px-6 sm:px-0 z-10">
        <li><Link href="/" className="block py-2 sm:py-0 text-[var(--color-primary)] hover:text-[var(--color-accent)]">Home</Link></li>
        <li><Link href="/about" className="block py-2 sm:py-0 text-[var(--color-primary)] hover:text-[var(--color-accent)]">About</Link></li>
        <li><Link href="/projects" className="block py-2 sm:py-0 text-[var(--color-primary)] hover:text-[var(--color-accent)]">Projects</Link></li>
        <li><Link href="/contact" className="block py-2 sm:py-0 text-[var(--color-primary)] hover:text-[var(--color-accent)]">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
