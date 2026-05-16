import Header from "../components/header/Header.jsx";
import template from "../assets/templateArtist.png";

export default function Artists() {
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
