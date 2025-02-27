import React from "react";
import useLocation from "../hooks/useLocation";

export default function Header() {
  const location = useLocation();

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
      <p className="text-sm text-black/80 mb-6">
        Create your personal collection of places you would like to visit. Map
        your dreams, one destination at a time.
      </p>
      <div className="text-black/80 border border-gray-300 rounded py-2">
        {location.loadStatus === 1 ? (
          <p>Loading Location...</p>
        ) : location.loadStatus === 2 ? (
          <p>
            <i className="fa-solid fa-location-dot mr-2"></i>
            {location.state_district}, {location.state}, {location.country}
          </p>
        ) : (
          <p>Unable to get your location</p>
        )}
      </div>
    </header>
  );
}
