import Map from "../components/map/Map";
import Filter from "../components/header/Filter.jsx";
import Header from "../components/header/Header.jsx";

const Location = () => {
  return (
    <>
      <Header />
      <Filter />
      <section id="map-section">
        <Map />
      </section>
    </>
  );
};

export default Location;
