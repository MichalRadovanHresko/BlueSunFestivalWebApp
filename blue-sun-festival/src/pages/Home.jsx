import Map from "../components/map/Map";
import Filter from "../components/Filter.jsx";
const Home = () => {
  return (
    <>
      <header>
        <h1 className="text-center">BLÅ SOL</h1>
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

export default Home;
