import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-[var(--color-background)]">
      <h1 className="text-[var(--color-primary)] text-4xl font-bold mb-10">
        About Me
      </h1>

      <div className="flex items-center ml-114 mr-64">
        <Image
          src="/IMG/photo.jpg"
          alt="A photo of me"
          width={200}
          height={200}
          className="rounded-full mr-6"
        />

        {/* line */}
        <div className="border-l-2 border-[var(--color-primary)] h-90 mx-6" />
        
        <div className="p-6 rounded-lg border border-[var(--color-primary)] max-w-md">
          <p className="text-lg text-[var(--color-text)]">
            Hello! I'm Mathias Larsen, a passionate web developer with a love for creating intuitive, user-friendly websites and applications. I have experience in building modern, performant websites that offer great user experiences. When I'm not coding, you can find me playing games on my PC, at the gym, or out with friends. I'm always looking for ways to learn and grow, constantly inspired by new technologies, and eager to challenge myself with exciting projects.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Page;
