const MapButton = () => {
  const styling = "absolute bottom-[1%] z-10 m-[2px]";
  return (
    <>
      <div className={`${styling} left-[2%]`}>
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
              cy="30"
              r="30"
              fill="#ffffff"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_486_1099"
              x="0"
              y="0"
              width="68"
              height="68"
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
                result="effect1_dropShadow_486_1099"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_486_1099"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={`${styling} right-[2%]`}>
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
              cy="30"
              r="30"
              fill="#ffffff"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_486_1099"
              x="0"
              y="0"
              width="68"
              height="68"
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
                result="effect1_dropShadow_486_1099"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_486_1099"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default MapButton;
