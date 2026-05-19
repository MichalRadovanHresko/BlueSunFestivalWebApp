import { useCallback, useEffect, useRef, useState } from "react";
import useGeolocation from "../../hooks/useGeolocation"; // OUR LIVE LOCATION
import L from "leaflet"; // METHOD FROM OUR MAP LIBRARY THAT I FOUND ON NPM
import festivalMap from "../../assets/map.png"; // IMG of our map on the map
import MapButton from "./MapButton";
import MapMarkers from "./MapMarkers";
import { createLocationIcon } from "./mapIcons";

const Map = ({ selectedFilter = "all" }) => {
  const { position } = useGeolocation();
  const [mapInstance, setMapInstance] = useState(null);
  const markerRef = useRef(null);
  const mapRef = useRef(null);

  const mapContainerRef = useCallback((node) => {
    if (!node) {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      setMapInstance(null);
      return;
    }
    if (mapRef.current) {
      return;
    }
    // MAP SETTINGSS
    // ----------------------------------------------
    const map = L.map(node, {
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

    // ----------------------------------------------
    // MAP IMAGE THAT WE ARE PUTTING ON THE REAL MAP
    const festivalBounds = L.latLngBounds(
      [56.119, 10.1565],
      [56.1242, 10.1637],
    );

    L.imageOverlay(festivalMap, festivalBounds, {}).addTo(map);
    map.setMaxBounds(festivalBounds);

    mapRef.current = map;
    setMapInstance(map);
  }, []);

  useEffect(() => {
    return () => {
      if (markerRef.current && mapRef.current) {
        mapRef.current.removeLayer(markerRef.current);
      }
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);
  //  ----------------------------------------------

  // MARKER SECTION (IT SHOWS YOUR LOCATION)
  // ----------------------------------------------
  useEffect(() => {
    if (position && mapInstance) {
      const { lat, lng } = position;

      // REMOVES OLD MARKER (if exist)
      if (markerRef.current) {
        mapInstance.removeLayer(markerRef.current);
      }

      // ADD MARKER TO YOUR CURRENT POSITION
      markerRef.current = L.marker([lat, lng], {
        icon: createLocationIcon(),
      }).addTo(mapInstance);
    }
  }, [position, mapInstance]);
  // ----------------------------------------------

  // RETURN SECTION
  // ----------------------------------------------
  // HERE WE RETURN MAP WITH OUR CUSTOM STYLING
  return (
    <div className="relative w-full h-[66vh]">
      <div ref={mapContainerRef} className="absolute z-0 h-full w-full"></div>
      <MapMarkers map={mapInstance} selectedFilter={selectedFilter} />
      <MapButton />
    </div>
  );
  //  ----------------------------------------------
};

export default Map;
