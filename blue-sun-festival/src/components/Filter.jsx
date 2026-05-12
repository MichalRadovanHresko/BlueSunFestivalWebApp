const Filter = () => {
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
    <ul className="flex flex-row flex-nowrap list-none gap-[5px]">
      {newFilterOptions}
    </ul>
  );
};

export default Filter;
