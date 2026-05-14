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
  const newFilterOptions = options.map((opt) => (
    <li key={opt} className="text-[black]">
      {opt}
    </li>
  ));
  return (
    <ul className="pl-[30px] flex flex-row gap-[12vw] justify-start list-none overflow-x-auto">
      {newFilterOptions}
    </ul>
  );
};

export default Filter;
