import Discover from "../../../assets/icons/discoverIcon.svg";

const DiscoverButton = () => {
  return (
    <div className="bg-[white] flex flex-col justify-center items-center rounded-[30px] w-[130px] h-[110px]">
      <div className="rounded-[50%] bg-[#0199D7] p-[15px]">
        <img src={Discover} alt="Discover" height={20} width={25} />
      </div>
      <p className="m-[0px] text-[#22428F] text-[16px]">Discover</p>
    </div>
  );
};

export default DiscoverButton;
