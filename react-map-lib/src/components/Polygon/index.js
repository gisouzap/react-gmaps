import React, { useEffect } from "react";

function Polygon({ paths, map }) {
  useEffect(() => {
    if (map) {
      const polygon = new google.maps.Polygon({
        paths,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35
      });

      polygon.setMap(map);
    }
  }, [map]);
  return <></>;
}

export default Polygon;
