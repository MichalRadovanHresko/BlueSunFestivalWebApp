const Form = () => {
  return (
    <>
      <label className="block text-[#FFF] text-[20px]" htmlFor="edit-username">
        Username
      </label>
      <input
        id="edit-username"
        type="text"
        placeholder="Ida Jensen"
        className="mb-[10px] h-[40px] w-[90%]  rounded-[10px] border-0 px-[18px] text-[20px] placeholder:text-[#8B8B8B] placeholder:opacity-100 focus:placeholder-transparent focus:outline-none"
      />

      <label className="text-[#FFF] text-[20px]" htmlFor="edit-email">
        Email
      </label>
      <input
        id="edit-email"
        type="email"
        placeholder="idajensen@gmail.com"
        className="mb-[10px] h-[40px] w-[90%] rounded-[10px] border-0 bg-[#E1E1E4] px-[18px] font-['Poppins'] text-[20px] font-normal text-[#22428F] placeholder:text-[#8B8B8B] placeholder:opacity-100 focus:placeholder-transparent focus:outline-none"
      />

      <label className="text-[#FFF] text-[20px]" htmlFor="edit-password">
        Password
      </label>
      <input
        id="edit-password"
        type="password"
        placeholder="Enter password"
        className="mb-[10px] h-[40px] w-[90%] rounded-[10px] border-0 bg-[#E1E1E4] px-[18px] text-[20px] text-[#22428F] placeholder:text-[#8B8B8B] placeholder:opacity-100 focus:placeholder-transparent focus:outline-none"
      />

      <button
        type="button"
        className="h-[40px] mx-auto max-w-[200px] rounded-[10px] px-[40px] py-[10px] border-0 text-[16px] font-[500] text-[#22428F]"
      >
        Save Changes
      </button>
    </>
  );
};

export default Form;
