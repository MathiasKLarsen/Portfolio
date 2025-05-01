import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className="flex justify-between items-center w-full p-4">
        <h3 className="text-lg">2025&copy;</h3>
        <div className="flex gap-4">
            <Image
                src="/IMG/github.png"
                alt="github"
                width={50}
                height={50}
            />
            <Image
                src="/IMG/linkin.png"
                alt="linkin"
                width={60}
                height={60}
            />
        </div>
    </section>
  )
}

export default Footer
