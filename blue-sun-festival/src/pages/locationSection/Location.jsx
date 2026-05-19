import Map from "./maps/Map.jsx";
import Filter from "../../components/header/Filter.jsx";
import Header from "../../components/header/Header.jsx";
import useMapFilter from "../../hooks/useMapFilter.jsx";
import Introduction from "../../components/map/Introduction.jsx";

const Location = () => {
  const { selectedFilter, handleFilterChange, filterOptions, getFill } =
    useMapFilter();

  return (
    <>
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
        filterOptions={filterOptions}
        getFill={getFill}
      />
      <Introduction />
      <section id="map-section">
        <Map selectedFilter={selectedFilter} />
      </section>
    </>
  );
};

export default Location;
