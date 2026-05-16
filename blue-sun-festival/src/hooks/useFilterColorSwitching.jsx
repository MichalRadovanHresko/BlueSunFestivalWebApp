import { useState } from "react";

const useFilterColorSwitching = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleScheduleClick = (i) => {
    setActiveIndex((prev) => (prev === i ? null : i));
  };

  const getFill = (i) => (activeIndex === i ? "#0199D7" : "#22428F");

  return { activeIndex, handleScheduleClick, getFill };
};

export default useFilterColorSwitching;
