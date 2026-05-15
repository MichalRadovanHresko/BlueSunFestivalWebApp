const Circle = ({ children }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
    >
      <g filter="url(#filter0_d_486_1099)">
        <circle
          cx="34"
          cy="34"
          r="30"
          fill="#ffffff"
          stroke="#FFFFFF"
          strokeWidth="2"
        />
      </g>
      {children}
    </svg>
  );
};

export default Circle;
