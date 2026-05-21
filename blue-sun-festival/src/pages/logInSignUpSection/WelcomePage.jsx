import BackgroundVector from "../../components/icons/BackgroundVector";
import loginLogo from "../../assets/login/loginLogo.png";

const WelcomePage = ({ setIndex }) => {
  return (
    <div className="relative w-screen h-screen bg-[#009AD5]">
      <BackgroundVector />
      <div className="relative flex justify-center pt-[33%] pb-[18%]">
        <img src={loginLogo} alt="logo-img" width={300} height={300} />
      </div>
      <div className="relative flex justify-center gap-[20px]">
        <button
          onClick={() => setIndex(1)}
          className="px-[9%] py-[2%] rounded-[10px] border-none text-[16px] text-[#22428F] shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
        >
          Sign Up
        </button>
        <button
          onClick={() => setIndex(1)}
          className="px-[9%] py-[2%] rounded-[10px] text-[16px] bg-[#26358A] text-[white] border-[white] border-[3px] shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
