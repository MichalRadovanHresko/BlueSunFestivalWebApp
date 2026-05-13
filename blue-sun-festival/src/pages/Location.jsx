import Map from "../components/map/Map";
import Filter from "../components/Filter.jsx";
const Location = () => {
  return (
    <>
      <header>
        <h1 className="text-center text-[#0199D7]">BLÅ SOL</h1>
      </header>

      <nav>
        <Filter />
      </nav>

      <main>
        <section id="map-section">
          <Map />
        </section>
      </main>
    </>
  );
};

export default Location;
