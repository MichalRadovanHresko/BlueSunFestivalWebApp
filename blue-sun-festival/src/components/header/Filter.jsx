const Filter = ({ onFilterChange, filterOptions, getFill }) => {
  const newFilterOptions = filterOptions.map((opt) => (
    <li
      key={opt.value}
      onClick={() => onFilterChange(opt.value)}
      className="text-[white] rounded-[12px] px-[30px] py-[5px]"
      style={{ backgroundColor: getFill(opt.value) }}
    >
      {opt.label}
    </li>
  ));
  return (
    <ul className="pl-[30px] flex flex-row rounded-[10px] gap-[4vw] justify-start list-none overflow-x-auto">
      {newFilterOptions}
    </ul>
  );
};

export default Filter;
