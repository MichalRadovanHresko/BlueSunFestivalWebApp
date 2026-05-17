import Map from "../components/map/Map";
import Filter from "../components/header/Filter.jsx";
import Header from "../components/header/Header.jsx";
import Introduction from "../components/map/Introduction.jsx";

const Location = () => {
  return (
    <>
      <Header />
      <Filter />
      <Introduction />
      <section id="map-section">
        <Map />
      </section>
    </>
  );
};

export default Location;
