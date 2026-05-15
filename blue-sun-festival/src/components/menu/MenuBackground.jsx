const MenuBackground = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-[430px] mb-[18%] mb-10pct-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 430 536"
        fill="none"
        className="w-full h-auto block"
      >
        <path
          d="M18.1465 28.7955H-3L-1.99302 536H430V0L388.21 9.59849L270.898 0L219.542 17.6814L119.348 0.505184L18.1465 28.7955Z"
          fill="#22428F"
        />

        <foreignObject x="0" y="0" width="430" height="536">
          <div xmlns="http://www.w3.org/1999/xhtml" className="p-[8%]">
            {children}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default MenuBackground;
