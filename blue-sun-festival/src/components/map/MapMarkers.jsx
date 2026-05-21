import { useEffect, useRef, useState } from "react";
import { markerData } from "./markers/markerData";
import { createLayerFromMarkers } from "./markers/createLayerFromMarkers";
import MarkerBottomPopup from "./PopUp/markersPopUps/MarkerBottomPopup";

const MapMarkers = ({ map, selectedFilter = "all" }) => {
  const markerLayersRef = useRef({ toilets: null, stages: null, drinks: null });
  const [activeMarker, setActiveMarker] = useState(null);

  useEffect(() => {
    if (!map) {
      return;
    }

    const stagesLayer = createLayerFromMarkers(
      markerData.stages,
      setActiveMarker,
      "stages",
    ).addTo(map);
    const drinksLayer = createLayerFromMarkers(
      markerData.drinks,
      setActiveMarker,
      "drinks",
    ).addTo(map);
    const toiletsLayer = createLayerFromMarkers(
      markerData.toilets,
      setActiveMarker,
      "toilets",
    ).addTo(map);

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

  return (
    <MarkerBottomPopup
      marker={activeMarker}
      onClose={() => setActiveMarker(null)}
    />
  );
};

export default MapMarkers;
