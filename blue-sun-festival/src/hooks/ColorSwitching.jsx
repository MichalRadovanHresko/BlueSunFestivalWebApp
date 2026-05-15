import { useState } from "react";

const useColorSwitching = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleScheduleClick = (i) => {
    setActiveIndex(i);
  };

  const getFill = (i) => (activeIndex === i ? "#22428F" : "#9574A2");

  return { activeIndex, handleScheduleClick, getFill };
};

export default useColorSwitching;
