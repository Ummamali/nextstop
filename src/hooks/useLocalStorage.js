import { useEffect, useRef, useState } from "react";

export default function useLocalStorage(initialState, lsFieldName) {
  const isFirstRender = useRef(true);
  const [dataState, setDataState] = useState(initialState);

  // Hooks below for using local storage

  // This checks for the field in local storage and loads it as a state
  useEffect(() => {
    if (localStorage.getItem(lsFieldName) !== null) {
      setDataState(JSON.parse(localStorage.getItem(lsFieldName)));
      console.info(lsFieldName + " has been loaded from ls");
    }
  }, [lsFieldName]);

  // This writes to localstorage everytime state changes, except for the first time
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // Mark as rendered
      return; // Skips execution on first render
    }

    localStorage.setItem(lsFieldName, JSON.stringify(dataState));
    console.info(lsFieldName + " has been written to local storage");
  }, [dataState, lsFieldName]);

  return [dataState, setDataState];
}
