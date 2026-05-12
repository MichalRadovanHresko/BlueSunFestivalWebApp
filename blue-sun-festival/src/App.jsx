import Map from "./components/map/Map";

function App() {
  const options = [
    "Toilet",
    "Drinks",
    "Stage",
    "Food",
    "Entrances",
    "Exits",
    "Help",
  ];
  const newFilterOptions = options.map((opt) => <li>{opt}</li>);
  return (
    <>
      <header>
        <h1 className="text-center">BLÅ SOL</h1>
      </header>

      <nav>
        <ul className="flex flex-row flex-nowrap list-none gap-[5px]">
          {newFilterOptions}
        </ul>
      </nav>

      <main>
        <section id="map-section">
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
