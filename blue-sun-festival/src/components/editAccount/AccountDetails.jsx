import Form from "./Form";
import EditDetailsFormBackground from "./FormBackground";
import Overlay from "./Overlay";

const EditAccountDetails = () => {
  return (
    <Overlay>
      <h2 className="mb-[20px] text-[#FFF] text-center text-[38px] leading-none text-white">
        PERSONAL DETAILS
      </h2>
      <EditDetailsFormBackground>
        <Form />
      </EditDetailsFormBackground>
    </Overlay>
  );
};

export default EditAccountDetails;
