import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-row items-center justify-center gap-6 pt-10">
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
