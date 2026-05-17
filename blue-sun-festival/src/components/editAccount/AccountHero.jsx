import editIcon from "../../assets/editIcon.png";
import BackButton from "./BackButton";

const EditAccountHero = () => {
  return (
    <section className="relative px-[7%]">
      <div className="flex flex-row gap-[15px] items-center text-[#22428F]">
        <BackButton />
        <p className="text-[20px]">ACCOUNT</p>
      </div>
      <div className="flex flex-col items-center text-[#22428F]">
        <img
          src={editIcon}
          alt="profile-image"
          className="h-[150px] w-[150px] mb-[10px]"
        />

        <p className="text-[20px] font-[600] mt-[0px] font-['Poppins']">
          IDA JENSEN
        </p>
      </div>
    </section>
  );
};

export default EditAccountHero;
