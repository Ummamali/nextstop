import React from "react";
import PlaceCard from "./PlaceCard";
import { placesData } from "../store/places";

export default function SelectedPlaces({ selections, deselectPlace }) {
  return (
    <div className="max-w-7xl mx-auto border border-gray-300 rounded-sm px-8 py-8 mb-4">
      <div className="text-center mb-10">
        <h1 className="text-xl">Destination Wishlist</h1>
        <p className="text-black/70 text-sm  max-w-sm mx-auto">
          Keep track of all the amazing places you want to visit and turn your
          travel dreams into reality.
        </p>
      </div>
      {selections.length === 0 && (
        <p className="text-center text-black/75 text-sm">
          No places to display! Please choose a place from the available
          options.
        </p>
      )}
      <div className="grid grid-cols-4 gap-4">
        {selections.map((selectionId) => (
          <PlaceCard
            placeId={selectionId}
            key={selectionId}
            place={placesData[selectionId]}
            onclick={() => deselectPlace(selectionId)}
          />
        ))}
      </div>
    </div>
  );
}
