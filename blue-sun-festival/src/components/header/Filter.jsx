import useFilterColorSwitching from "../../hooks/useFilterColorSwitching";

const Filter = () => {
  const { handleScheduleClick, getFill } = useFilterColorSwitching();
  const options = [
    "Toilet",
    "Drinks",
    "Stage",
    "Food",
    "Entrances",
    "Exits",
    "Help",
  ];
  const newFilterOptions = options.map((opt, i) => (
    <li
      key={opt}
      onClick={() => handleScheduleClick(i)}
      className="text-[white] rounded-[12px] px-[30px] py-[5px]"
      style={{ backgroundColor: getFill(i) }}
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
