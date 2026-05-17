const Overlay = ({ children }) => {
  return (
    <>
      <section className="bg-[#22428F] pb-[30%]">
        <div className="px-[22px] pt-[18px] flex flex-col items-center">
          {children}
        </div>
      </section>
    </>
  );
};

export default Overlay;
