import { useEffect } from "react";
import L from "leaflet";
import useMap from "../../../hooks/useMap";
import festivalMap from "../../../assets/map/map.png";
import { createAvatarIcon } from "../../../components/map/mapIcons";
import avatar1 from "../../../assets/editAccountIcons/icon.png";
import avatar3 from "../../../assets/editAccountIcons/icon3.png";
import avatar4 from "../../../assets/editAccountIcons/icon4.png";
import FriendButton from "../../../components/map/FriendButton";

const FriendMap = () => {
  const { mapContainerRef, mapInstance } = useMap(festivalMap);

  useEffect(() => {
    if (!mapInstance) return;
    L.marker([56.1215, 10.161], {
      icon: createAvatarIcon(avatar1, "NINA"),
    }).addTo(mapInstance);
    L.marker([56.121, 10.159], {
      icon: createAvatarIcon(avatar3, "ANN"),
    }).addTo(mapInstance);
    L.marker([56.122, 10.15895], {
      icon: createAvatarIcon(avatar4, "IVAN"),
    }).addTo(mapInstance);
  }, [mapInstance]);

  return (
    <div className="relative w-full h-[66vh]">
      <div ref={mapContainerRef} className="absolute z-0 h-full w-full" />
      <FriendButton />
    </div>
  );
};

export default FriendMap;
