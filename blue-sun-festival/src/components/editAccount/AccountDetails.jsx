import Form from "./Form";
import Overlay from "./Overlay";

const EditAccountDetails = () => {
  return (
    <Overlay>
      <h2 className="mb-[20px] text-[#FFF] text-center text-[38px] leading-none text-white">
        PERSONAL DETAILS
      </h2>
      <div className="px-[16px] py-[4%] flex flex-col content-center">
        <Form />
      </div>
    </Overlay>
  );
};

export default EditAccountDetails;
