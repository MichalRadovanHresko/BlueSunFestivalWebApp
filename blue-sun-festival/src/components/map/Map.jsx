import { useEffect, useRef } from "react";
import { createLocationIcon, createMarkerIcon } from "./mapIcons"; // OUR CUSTOM ICONS
import useGeolocation from "../../hooks/useGeolocation"; // OUR LIVE LOCATION
import L from "leaflet"; // METHOD FROM OUR MAP LIBRARY THAT I FOUND ON NPM
import festivalMap from "../../assets/map.png"; // IMG of our map on the map
import MapButton from "./MapButton";

const Map = () => {
  const { position } = useGeolocation();
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // MAP SETTINGS
    // ----------------------------------------------
    const map = L.map("map", {
      attributionControl: false, // Turn off Watermark on right bottom
      zoomControl: false, // Turn off Zoom Buttons + and -
      maxBoundsViscosity: 1.0, // Makes bounds solid = can't drag outside #great
    }).setView([56.121183, 10.160064], 17);
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 20,
        minZoom: 17,
      },
    ).addTo(map);
    mapRef.current = map; // this need explanation

    // ----------------------------------------------
    // MAP IMAGE THAT WE ARE PUTTING ON THE REAL MAP
    const festivalBounds = L.latLngBounds(
      [56.119, 10.1565],
      [56.1242, 10.1637],
    );

    L.imageOverlay(festivalMap, festivalBounds, {}).addTo(map);
    map.setMaxBounds(festivalBounds);

    // ----------------------------------------------

    // MARKER SECTION (SHOWS CUSTOM MARKERS ON OUR MAP)
    L.marker([56.12032, 10.158863], { icon: createMarkerIcon() }).addTo(map);
    L.marker([56.120483, 10.160338], { icon: createMarkerIcon() }).addTo(map);
    L.marker([56.119287, 10.158926], { icon: createMarkerIcon() }).addTo(map);
    // -------------------------------------------------

    return () => {
      map.remove();
    };
  }, []);
  //  ----------------------------------------------

  // MARKER SECTION (IT SHOWS YOUR LOCATION)
  // ----------------------------------------------
  useEffect(() => {
    if (position && mapRef.current) {
      const { lat, lng } = position;

      // REMOVES OLD MARKER (if exist)
      if (markerRef.current) {
        mapRef.current.removeLayer(markerRef.current);
      }

      // ADD MARKER TO YOUR CURRENT POSITION
      markerRef.current = L.marker([lat, lng], {
        icon: createLocationIcon(),
      }).addTo(mapRef.current);
    }
  }, [position]);
  // ----------------------------------------------

  // RETURN SECTION
  // ----------------------------------------------
  // HERE WE RETURN MAP WITH OUR CUSTOM STYLING
  return (
    <div className="relative w-full h-[66vh]">
      <div id="map" className="absolute z-0 h-full w-full"></div>
      <MapButton />
    </div>
  );
  //  ----------------------------------------------
};

export default Map;
