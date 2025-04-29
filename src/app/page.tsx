import React from "react";

const Home = () => {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[var(--color-background)]">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-center">
        <span className="block gradient-text drop-shadow-[0_2px_4px_rgba(138,43,226,0.4)] hover:drop-shadow-[0_4px_6px_rgba(138,43,226,0.6)]">
          FRONT-END
        </span>
        <span className="block gradient-text drop-shadow-[0_2px_4px_rgba(138,43,226,0.4)] hover:drop-shadow-[0_4px_6px_rgba(138,43,226,0.6)]">
          DEVELOPER
        </span>
        <span className="block gradient-text drop-shadow-[0_2px_4px_rgba(138,43,226,0.4)] hover:drop-shadow-[0_4px_6px_rgba(138,43,226,0.6)]">
          MATHIAS LARSEN
        </span>
      </h1>
    </div>
  );
}

export default Home;
