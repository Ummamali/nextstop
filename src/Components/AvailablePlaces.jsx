import React from "react";
import { placesData } from "../store/places.js";
import PlaceCard from "./PlaceCard.jsx";

export default function AvailablePlaces({ selecions, selectPlace }) {
  return (
    <div className="max-w-7xl mx-auto bg-gray-100/80 border border-gray-300 rounded-sm px-14 py-8 mb-8">
      <div className="text-center mb-10">
        <h1 className="text-xl">Available Places</h1>
        <p className="text-black/70 text-sm  max-w-sm mx-auto">
          Browse through a collection of stunning destinations and choose the
          ones you'd love to visit.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {Object.entries(placesData)
          .filter(([placeId, place]) => !selecions.includes(placeId))
          .map(([placeId, place]) => (
            <PlaceCard
              placeId={placeId}
              key={placeId}
              place={place}
              onclick={() => selectPlace(placeId)}
            />
          ))}
      </div>
    </div>
  );
}
