import useMap from "../../../hooks/useMap";
import useLocationMarker from "../../../hooks/useLocationMarker";
import crowdMap from "../../../assets/map/crowdmap.png";
import MapButton from "../../../components/map/MapButton";

const CrowdDensityMap = () => {
  const { mapContainerRef, mapInstance } = useMap(crowdMap);
  useLocationMarker(mapInstance);

  return (
    <div className="relative w-full h-[66vh]">
      <div ref={mapContainerRef} className="absolute z-0 h-full w-full" />
      <MapButton />
    </div>
  );
};

export default CrowdDensityMap;
