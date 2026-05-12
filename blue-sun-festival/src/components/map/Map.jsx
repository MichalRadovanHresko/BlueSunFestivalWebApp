import { useEffect, useRef } from "react";
import {
  createLocationIcon,
  createToiletIcon,
  createFoodLocation,
  createStageIcon,
} from "./mapIcons"; // OUR CUSTOM ICONS
import useGeolocation from "../../hooks/useGeolocation"; // OUR LIVE LOCATION
import L from "leaflet"; // METHOD FROM OUR MAP LIBRARY THAT I FOUND ON NPM
import festivalMap from "../../assets/map.png"; // IMG of our map on the map

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
    }).setView([56.155, 10.2], 16);
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 20,
        minZoom: 16,
      },
    ).addTo(map);
    mapRef.current = map; // this need explanation

    // ----------------------------------------------
    // MAP IMAGE THAT WE ARE PUTTING ON THE REAL MAP
    const festivalBounds = L.latLngBounds([56.149, 10.1885], [56.16, 10.22]);

    L.imageOverlay(festivalMap, festivalBounds, {}).addTo(map);

    // ----------------------------------------------

    // MARKER SECTION (SHOWS CUSTOM MARKERS ON OUR MAP)
    L.marker([56.12032, 10.158863], { icon: createToiletIcon() }).addTo(map);
    L.marker([56.120483, 10.160338], { icon: createFoodLocation() }).addTo(map);
    L.marker([56.119287, 10.158926], { icon: createStageIcon() }).addTo(map);
    // -------------------------------------------------

    return () => {
      map.remove();
    };
  }, []);
  //  ----------------------------------------------

  // MARKER SECTION (IT SHOWS YOUR LOCATION)
  // ----------------------------------------------
  // Add marker when position updates
  useEffect(() => {
    if (position && mapRef.current) {
      const { lat, lng } = position;

      const locationIcon = createLocationIcon();

      // REMOVES OLD MARKER (if exist)
      if (markerRef.current) {
        mapRef.current.removeLayer(markerRef.current);
      }

      // ADD MARKER TO YOUR CURRENT POSITION
      markerRef.current = L.marker([lat, lng], { icon: locationIcon }).addTo(
        mapRef.current,
      );
    }
  }, [position]);
  // ----------------------------------------------

  // RETURN SECTION
  // ----------------------------------------------
  // HERE WE RETURN MAP WITH OUR CUSTOM STYLING
  return (
    <div className="relative w-full h-[600px]">
      <div id="map" className="h-full w-full"></div>
    </div>
  );
  //  ----------------------------------------------
};

export default Map;
