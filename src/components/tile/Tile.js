import React from "react";

function Tile({ data }) {
  const values = Object.values(data);

  return (
    <div className="tile">
      {values.map((value, index) => (
        <p key={index} className={index === 0 ? "tile-title" : "tile"}>
          {value}
        </p>
      ))}
    </div>
  );
}

export { Tile };
