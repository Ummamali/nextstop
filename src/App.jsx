import React, { useState } from "react";
import Header from "./Components/Header";
import SelectedPlaces from "./Components/SelectedPlaces";
import AvailablePlaces from "./Components/AvailablePlaces";
import useLocalStorage from "./hooks/useLocalStorage";
import useLocation from "./hooks/useLocation";

export default function App() {
  const [selections, setSelections] = useLocalStorage(
    [],
    "nextstop_selections"
  );

  function selectPlace(placeId) {
    setSelections((prev) => [...prev, placeId]);
  }

  function deselectPlace(placeId) {
    setSelections((prev) => prev.filter((item) => item !== placeId));
  }
  return (
    <>
      <Header />
      <SelectedPlaces selections={selections} deselectPlace={deselectPlace} />
      <AvailablePlaces selecions={selections} selectPlace={selectPlace} />
    </>
  );
}
