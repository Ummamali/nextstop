import React from "react";

export default function Header() {
  return (
    <header className="text-center max-w-md mx-auto py-6">
      <img
        src="./logo.png"
        alt="Logo"
        className="block mx-auto mb-2 -translate-x-[14px]"
        width={45}
      />
      <h2 className="text-4xl tracking-[12px] font-semibold text-secondary mb-2">
        NEXTSTOP
      </h2>
      <p className="text-sm text-black/80">
        Create your personal collection of places you would like to visit. Map
        your dreams, one destination at a time.
      </p>
    </header>
  );
}
