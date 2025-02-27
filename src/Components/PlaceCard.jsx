import React, { useRef, useState } from "react";

export default function PlaceCard({ placeId, place, onclick }) {
  const [expanded, setExpanded] = useState(false);
  const [leaving, setLeaving] = useState(false);
  return (
    <div
      className={`bg-green-500 h-[290px] rounded shadow-sm overflow-hidden relative cursor-pointer fade-in ${
        leaving ? "fade-out" : ""
      }`}
      style={{ background: `url("${place.image}") center center/cover` }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => setLeaving(true)}
      onAnimationEnd={() => {
        if (leaving) {
          onclick();
        }
      }}
    >
      <div className="font-light absolute left-0 bottom-0 w-full px-4 pb-4 pt-18 bg-linear-to-t from-black/80 to-transparent from-50%">
        <h3 className=" text-white/90">
          {place.title + ", "}
          <span className="text-primary brightness-110">{place.country}</span>
        </h3>
        <p
          className={
            "text-sm text-white/60 overflow-hidden transition-all duration-180 " +
            (expanded ? "max-h-[100px]" : "max-h-px")
          }
        >
          {place.description}
        </p>
      </div>
    </div>
  );
}
