import useMap from "../../../hooks/useMap";
import useLocationMarker from "../../../hooks/useLocationMarker";
import festivalMap from "../../../assets/map/map.png";
import MapButton from "../../../components/map/buttons/MapButton";
import MapMarkers from "../../../components/map/MapMarkers";

const Map = ({ selectedFilter = "all" }) => {
  const { mapContainerRef, mapInstance } = useMap(festivalMap);
  useLocationMarker(mapInstance);

  return (
    <div className="relative w-full h-[66vh]">
      <div ref={mapContainerRef} className="absolute z-0 h-full w-full" />
      <MapMarkers map={mapInstance} selectedFilter={selectedFilter} />
      <MapButton />
    </div>
  );
};

export default Map;
