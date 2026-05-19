import Header from "../../components/header/Header.jsx";
import template from "../../assets/templates/templateSchedule.webp";

export default function Schedule() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <img
          src={template}
          alt="template-picture"
          className="w-full max-w-[450px]"
        />
      </div>
    </>
  );
}
