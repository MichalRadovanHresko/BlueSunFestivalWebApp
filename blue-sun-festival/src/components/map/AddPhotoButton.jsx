import PhotoIcon from "../icons/PhotoIcon";

const AddPhotoButton = () => {
  return (
    <div className="absolute bottom-[7%] w-full flex justify-around items-end z-10">
      <div className="bg-[white] flex flex-col justify-center items-center rounded-[30px] w-[130px] h-[110px]">
        <div className="rounded-[50%] bg-[#0199D7] p-[15px] h-[35px]">
          <PhotoIcon />
        </div>
        <p className="m-[0px] text-[#22428F] text-[16px]">Add photo</p>
      </div>
    </div>
  );
};

export default AddPhotoButton;
