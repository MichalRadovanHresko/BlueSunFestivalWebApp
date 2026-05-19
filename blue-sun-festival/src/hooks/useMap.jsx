import { useCallback, useEffect, useRef, useState } from "react";
import L from "leaflet";

const FESTIVAL_BOUNDS = L.latLngBounds([56.119, 10.1565], [56.1242, 10.1637]);

const useMap = (mapImage) => {
  const mapRef = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);

  const mapContainerRef = useCallback(
    (node) => {
      if (!node) {
        if (mapRef.current) {
          mapRef.current.remove();
          mapRef.current = null;
        }
        setMapInstance(null);
        return;
      }
      if (mapRef.current) return;

      const map = L.map(node, {
        attributionControl: false,
        zoomControl: false,
        maxBoundsViscosity: 1.0,
      }).setView([56.121183, 10.160064], 17);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",
        { maxZoom: 20, minZoom: 17 },
      ).addTo(map);

      L.imageOverlay(mapImage, FESTIVAL_BOUNDS, {}).addTo(map);
      map.setMaxBounds(FESTIVAL_BOUNDS);

      mapRef.current = map;
      setMapInstance(map);
    },
    [mapImage],
  );

  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return { mapContainerRef, mapInstance };
};

export default useMap;
