import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Loader } from "@googlemaps/js-api-loader";

/*
 * TODO:
 * separate loader from the map into different files
 */

function Map({ apiKey, libraries, children, style, options, onLoad }) {
  let map;
  const [isLoaded, setIsLoaded] = useState(false);

  const loader = new Loader({
    apiKey,
    libraries
  });

  useEffect(() => {
    if (!isLoaded) {
      loader.load().then(() => {
        map = new google.maps.Map(document.getElementById("map"), options);
        onLoad(map);
        setIsLoaded(true);
      });
    }
  }, [loader]);

  return (
    <div id="map" style={style}>
      {children}
    </div>
  );
}

Map.propTypes = {
  apiKey: PropTypes.string.isRequired,
  libraries: PropTypes.array.isRequired,
  children: PropTypes.node,
  style: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired
};
export default Map;
