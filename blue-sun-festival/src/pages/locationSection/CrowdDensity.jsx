import Header from "../../components/header/Header";
import CrowdDensityMap from "./maps/CrowdDensityMap";

const CrowdDensity = () => {
  return (
    <>
      <Header />
      <h2 className="text-center text-[#22428F]">CROWD DENSITY</h2>
      <CrowdDensityMap />
    </>
  );
};

export default CrowdDensity;
