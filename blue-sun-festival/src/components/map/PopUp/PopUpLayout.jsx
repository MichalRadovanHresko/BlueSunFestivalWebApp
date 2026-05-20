const IntroductionPopUp = ({ children, onClose }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="333"
      height="376"
      viewBox="0 0 333 376"
      fill="none"
    >
      <g filter="url(#filter0_d_770_1624)">
        <path
          d="M329 323V0L297 6L210 0L171.5 10.5L96 0L20 17H4V330.5L36 344L123 350.5L152 343.5L250 368L329 323Z"
          fill="#22428F"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_770_1624"
          x="0"
          y="0"
          width="333"
          height="376"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_770_1624"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_770_1624"
            result="shape"
          />
        </filter>
      </defs>
      <foreignObject x="20" y="15" width="293" height="330">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className="p-[8%]"
          style={{ position: "relative" }}
        >
          {onClose && (
            <div
              onClick={onClose}
              className="absolute top-[3%] right-[1%] w-[28px] h-[28px] rounded-[50%] bg-[white] flex items-center justify-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                style={{ display: "block" }}
              >
                <path
                  d="M11 3.80571L10.1943 3L7 6.19429L3.80571 3L3 3.80571L6.19429 7L3 10.1943L3.80571 11L7 7.80571L10.1943 11L11 10.1943L7.80571 7L11 3.80571Z"
                  fill="#22428F"
                />
              </svg>
            </div>
          )}
          {children}
        </div>
      </foreignObject>
    </svg>
  );
};

export default IntroductionPopUp;
