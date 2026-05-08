import Map from "./components/map/Map";

function App() {
  return (
    <>
      <header>
        <h1>BLÅ SOL</h1>
        <p>6. JUNI</p>
      </header>

      <nav>
        <ul>
          <li>
            <a href="#toilet">Toilet</a>
          </li>
          <li>
            <a href="#drinks">Drinks</a>
          </li>
          <li>
            <a href="#stage">Stage</a>
          </li>
        </ul>
      </nav>

      <main>
        <section id="map-section">
          <h2>Festival Map</h2>
          <Map />
        </section>
      </main>

      <footer>
        <p>here we will have buttons for different pages</p>
      </footer>
    </>
  );
}

export default App;
