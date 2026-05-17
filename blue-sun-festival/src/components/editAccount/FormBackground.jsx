const EditDetailsFormBackground = ({ children }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="333"
      height="376"
      viewBox="0 0 333 376"
      fill="none"
      className="block mx-auto"
    >
      <g filter="url(#filter0_d_770_1624)">
        <path
          d="M329 323V0L297 6L210 0L171.5 10.5L96 0L20 17H4V330.5L36 344L123 350.5L152 343.5L250 368L329 323Z"
          fill="#185CA4"
        />
      </g>
      <foreignObject x="15" y="15" width="293" height="400">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className="px-[16px] py-[4%] flex flex-col content-center"
        >
          {children}
        </div>
      </foreignObject>
    </svg>
  );
};

export default EditDetailsFormBackground;
