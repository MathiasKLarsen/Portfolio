import React from 'react'
import Image from 'next/image'

const Page = () => {

    const logo = [
        { src:"/IMG/js.png", alt:'JavaScript', label:'JavaScript' },
        { src:"/IMG/ts.png", alt:'TypeScript', label:'TypeScript' },
        { src:"/IMG/react.png", alt:'React', label:'React' },
        { src:"/IMG/nextjs.png", alt:'Next.js', label:'Next.js' },
        { src:"/IMG/tailwind.png", alt:'Tailwind', label:'Tailwind' },
        { src:"/IMG/bootstrap.png", alt:'Bootstrap', label:'Bootstrap' },
        { src:"/IMG/mysql.png", alt:'SQL', label:'SQL' },
        { src:"/IMG/mongodb.png", alt:'MongoDB', label:'MongoDB' },
    ]

  return (
    <section className="w-full h-auto lg:h-screen bg-[var(--color-background)]">
      <div className="flex flex-col items-center justify-center w-full h-full">

        <h1 className="text-[var(--color-primary)] text-4xl font-bold mb-8">
          Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full px-4">
          {logo.map(({ src, alt, label }, index) => (
            <article key={index} className="flex flex-col items-center justify-center">
              <div className="relative w-24 h-24">
                <Image
                  src={src}
                  alt={alt}
                  layout="fill"
                  objectFit="contain"
                  className="mx-auto"
                />
              </div>
              <p className="mt-2 text-lg font-semibold">{label}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Page
