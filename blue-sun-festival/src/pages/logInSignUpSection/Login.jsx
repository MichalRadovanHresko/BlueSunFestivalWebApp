import BlueSunBigIcon from "../../components/icons/BlueSunBigIcon";
import { NavLink } from "react-router-dom";

const Login = ({ setIndex }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mt-[10%] mb-[5%]">
        <BlueSunBigIcon />
        <h2 className="text-[#009AD5]">WELCOME BACK!</h2>
      </div>

      <div className="w-[70%] max-w-[450px] flex flex-col gap-[24px]">
        <input
          type="text"
          placeholder="Username or Email"
          className="px-[20px] py-[10px] rounded-[10px] border-none text-[16px] placeholder-[#00000061] shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-[20px] py-[10px] rounded-[10px] border-none text-[16px] placeholder-[#00000061] shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
        />
        <div className="flex justify-center">
          <NavLink to="/location">
            <button className="px-[60px] py-[12px] bg-[#0E8DBE] text-[white] text-[16px] rounded-[10px] border-none shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] cursor-pointer">
              Log in
            </button>
          </NavLink>
        </div>
        <div className="text-[12px] text-[#00000061] text-center">
          Forgot password?
        </div>
        <div className="text-center text-[14px] text-[#00000061]">
          Don't have an account yet?
          <button
            onClick={() => setIndex(1)}
            className="text-[#009AD5] cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
