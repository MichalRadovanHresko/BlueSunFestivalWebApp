import useMap from "../../../hooks/useMap";
import useLocationMarker from "../../../hooks/useLocationMarker";
import festivalMap from "../../../assets/map/map.png";
import AddPhotoButton from "../../../components/map/buttons/AddPhotoButton";
import { useEffect } from "react";
import { createAvatarIcon } from "../../../components/map/mapIcons";
import L from "leaflet";
import friend1 from "../../../assets/friends/prop1.jpg";
import friend2 from "../../../assets/friends/prop2.jpg";
import friend3 from "../../../assets/friends/prop3.jpg";

const DiscoverMap = () => {
  const { mapContainerRef, mapInstance } = useMap(festivalMap);
  useLocationMarker(mapInstance);

  useEffect(() => {
    if (!mapInstance) return;

    const markers = [
      { pos: [56.12185, 10.16065], avatar: friend1, name: "JOHN" },
      { pos: [56.1211, 10.16074], avatar: friend2, name: "IDA" },
      { pos: [56.1214, 10.1585], avatar: friend3, name: "MIKKEL" },
    ];

    markers.forEach(({ pos, avatar, name }) => {
      L.marker(pos, { icon: createAvatarIcon(avatar, name) }).addTo(
        mapInstance,
      );
    });
  }, [mapInstance]);

  return (
    <div className="relative w-full h-[66vh]">
      <div ref={mapContainerRef} className="absolute z-0 h-full w-full" />
      <AddPhotoButton />
    </div>
  );
};

export default DiscoverMap;
