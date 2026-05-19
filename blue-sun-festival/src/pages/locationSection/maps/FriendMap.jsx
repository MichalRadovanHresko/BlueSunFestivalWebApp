import { useEffect } from "react";
import L from "leaflet";
import useMap from "../../../hooks/useMap";
import festivalMap from "../../../assets/map/map.png";
import { createLocationIcon } from "../../../components/map/mapIcons";
import MapButton from "../../../components/map/MapButton";

const FriendMap = () => {
  const { mapContainerRef, mapInstance } = useMap(festivalMap);

  useEffect(() => {
    if (!mapInstance) return;
    L.marker([56.1215, 10.161], {
      icon: createLocationIcon({ name: "NINA" }),
    }).addTo(mapInstance);
    L.marker([56.121, 10.159], {
      icon: createLocationIcon({ name: "ANN" }),
    }).addTo(mapInstance);
    L.marker([56.122, 10.15895], {
      icon: createLocationIcon({ name: "IVAN" }),
    }).addTo(mapInstance);
  }, [mapInstance]);

  return (
    <div className="relative w-full h-[66vh]">
      <div ref={mapContainerRef} className="absolute z-0 h-full w-full" />
      <MapButton />
    </div>
  );
};

export default FriendMap;
