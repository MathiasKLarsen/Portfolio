import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[var(--color-background)]">
      {/* About Title */}
      <h1 className="text-[var(--color-primary)] text-4xl font-bold mb-10">
        About
      </h1>
      
      {/* Grid Layout for Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        <Image
          className="w-24 sm:w-32 md:w-40 max-w-full object-contain"
          src="/IMG/gh-white.png"
          alt="github"
          width={200}
          height={200}
        />
        <Image
          className="w-24 sm:w-32 md:w-40 max-w-full object-contain"
          src="/IMG/github-sv.png"
          alt="github"
          width={200}
          height={200}
        />
        <Image
          className="w-24 sm:w-32 md:w-40 max-w-full object-contain"
          src="/IMG/github.png"
          alt="github"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}

export default Page;
