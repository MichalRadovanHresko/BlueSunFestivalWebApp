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
    <li key={opt} className="text-[black] rounded-[5px] bg-[#C7C7C7] px-[20px]">
      {opt}
    </li>
  ));
  return (
    <ul className="pl-[30px] flex flex-row gap-[8vw] justify-start list-none overflow-x-auto">
      {newFilterOptions}
    </ul>
  );
};

export default Filter;
