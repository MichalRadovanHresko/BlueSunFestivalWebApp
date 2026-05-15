import AccountHeader from "../components/header/AccountHeader.jsx";
import Menu from "../components/menu/Menu.jsx";

export default function Account() {
  return (
    <>
      <AccountHeader />
      <p className="text-center">This is an Account page</p>
      <Menu />
    </>
  );
}
