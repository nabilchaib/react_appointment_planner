import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ data }) => {
  return (
    <div className="tile-list">
      {data.map((item, index) => (
        <Tile key={index} data={item} />
      ))}
    </div>
  );
};
