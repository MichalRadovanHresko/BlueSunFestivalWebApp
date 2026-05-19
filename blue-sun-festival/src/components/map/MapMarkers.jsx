import { useEffect, useRef } from "react";
import L from "leaflet";
import { createMarkerIcon } from "./mapIcons";

const MapMarkers = ({ map, selectedFilter = "all" }) => {
  const markerLayersRef = useRef({ toilets: null, stages: null, drinks: null });

  useEffect(() => {
    if (!map) {
      return;
    }

    const stagesLayer = L.layerGroup([
      L.marker([56.1199, 10.158893], { icon: createMarkerIcon() }),
      L.marker([56.122, 10.160603], { icon: createMarkerIcon() }),
      L.marker([56.12285, 10.161303], { icon: createMarkerIcon() }),
    ]).addTo(map);

    const drinksLayer = L.layerGroup([
      L.marker([56.1218, 10.1587], { icon: createMarkerIcon() }),
      L.marker([56.1216, 10.16], { icon: createMarkerIcon() }),
      L.marker([56.1214, 10.1613], { icon: createMarkerIcon() }),
      L.marker([56.1204, 10.1593], { icon: createMarkerIcon() }),
      L.marker([56.1211, 10.1615], { icon: createMarkerIcon() }),
    ]).addTo(map);

    const toiletsLayer = L.layerGroup([
        L.marker([56.1214, 10.1587], { icon: createMarkerIcon() }),
      L.marker([56.1225, 10.161303], { icon: createMarkerIcon() }),
      L.marker([56.1211, 10.16108], { icon: createMarkerIcon() }),
      L.marker([56.1204, 10.16068], { icon: createMarkerIcon() }),
      L.marker([56.1204, 10.1598], { icon: createMarkerIcon() }),
    ]).addTo(map);

    markerLayersRef.current = {
      toilets: toiletsLayer,
      stages: stagesLayer,
      drinks: drinksLayer,
    };

    return () => {
      map.removeLayer(toiletsLayer);
      map.removeLayer(stagesLayer);
      map.removeLayer(drinksLayer);
    };
  }, [map]);

  useEffect(() => {
    if (
      !map ||
      !markerLayersRef.current.toilets ||
      !markerLayersRef.current.stages ||
      !markerLayersRef.current.drinks
    ) {
      return;
    }

    const { toilets, stages, drinks } = markerLayersRef.current;

    map.removeLayer(toilets);
    map.removeLayer(stages);
    map.removeLayer(drinks);

    if (selectedFilter === "toilets") {
      toilets.addTo(map);
      return;
    }

    if (selectedFilter === "stages") {
      stages.addTo(map);
      return;
    }

    if (selectedFilter === "drinks") {
      drinks.addTo(map);
      return;
    }

    toilets.addTo(map);
    stages.addTo(map);
    drinks.addTo(map);
  }, [map, selectedFilter]);

  return null;
};

export default MapMarkers;
