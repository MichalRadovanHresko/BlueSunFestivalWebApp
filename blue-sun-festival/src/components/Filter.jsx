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
    <li className="px-[32px] mx-[13px] text-[#0199D7]">{opt}</li>
  ));
  return (
    <ul className="flex flex-row flex-nowrap justify-center list-none gap-[5px] overflow-hidden">
      {newFilterOptions}
    </ul>
  );
};

export default Filter;
