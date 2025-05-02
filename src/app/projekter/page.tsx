import React from 'react'
import Image from 'next/image'

const Page = () => {

    const logo = [
        { src:"/IMG/projekt/cargame.png", alt:'Car Game', label:'Car Game' },
        { src:"/IMG/projekt/dataservice.png", alt:'Weather', label:'Weather' },
        { src:"/IMG/projekt/flower.png", alt:'Flower', label:'Flower' },
        { src:"/IMG/projekt/towerdefense.png", alt:'Tower Defense', label:'Tower Defense' },
    ]

  return (
    <section className="w-full h-auto lg:h-screen bg-[var(--color-background)]">
      <div className="flex flex-col items-center justify-center w-full h-full">

        <h1 className="text-[var(--color-primary)] text-4xl font-bold mb-8">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full px-4">
          {logo.map(({ src, alt, label }, index) => (
            <article key={index} className="flex flex-col items-center justify-center">
              <div className="relative w-72 h-72">
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
