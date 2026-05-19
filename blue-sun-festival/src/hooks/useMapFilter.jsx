import { useState } from "react";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Toilet", value: "toilets" },
  { label: "Drinks", value: "drinks" },
  { label: "Stage", value: "stages" },
  { label: "Food", value: "food" },
  { label: "Entrances", value: "entrances" },
  { label: "Exits", value: "exits" },
  { label: "Help", value: "help" },
];

const useMapFilter = (initialFilter = "all") => {
  const [selectedFilter, setSelectedFilter] = useState(initialFilter);

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
  };

  const getFill = (value) => (selectedFilter === value ? "#0199D7" : "#22428F");

  return {
    filterOptions,
    selectedFilter,
    handleFilterChange,
    getFill,
  };
};

export default useMapFilter;
