import Map from "../components/map/Map";
import Filter from "../components/Filter.jsx";
import Header from "../components/Header.jsx";

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
