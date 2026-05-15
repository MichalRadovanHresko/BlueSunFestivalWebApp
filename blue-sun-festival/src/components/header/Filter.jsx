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
    <li
      key={opt}
      className="text-[white] rounded-[12px] bg-[#22428F] px-[30px] py-[5px]"
    >
      {opt}
    </li>
  ));
  return (
    <ul className="pl-[30px] flex flex-row gap-[4vw] justify-start list-none overflow-x-auto">
      {newFilterOptions}
    </ul>
  );
};

export default Filter;
