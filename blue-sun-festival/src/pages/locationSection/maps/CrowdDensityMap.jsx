import { useEffect } from "react";
import L from "leaflet";
import useMap from "../../../hooks/useMap";
import useLocationMarker from "../../../hooks/useLocationMarker";
import crowdMap from "../../../assets/map/crowdmap.png";
import MapButton from "../../../components/map/buttons/MapButton";
import { createInfoIcon } from "../../../components/map/mapIcons";

const CrowdDensityMap = () => {
  const { mapContainerRef, mapInstance } = useMap(crowdMap);
  useLocationMarker(mapInstance);

  useEffect(() => {
    if (!mapInstance) return;

    const infoLocations = [
      [56.12185, 10.16065],
      [56.1214, 10.1585],
      [56.1212, 10.16074],
      [56.1204, 10.1603],
      [56.1198, 10.1593],
    ];

    infoLocations.forEach((location) => {
      L.marker(location, { icon: createInfoIcon() }).addTo(mapInstance);
    });
  }, [mapInstance]);

  return (
    <div className="relative w-full h-[66vh]">
      <div ref={mapContainerRef} className="absolute z-0 h-full w-full" />
      <MapButton />
    </div>
  );
};

export default CrowdDensityMap;
