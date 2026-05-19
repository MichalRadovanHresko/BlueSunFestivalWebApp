import AccountHero from "../../components/editAccount/AccountHero";
import AccountDetails from "../../components/editAccount/AccountDetails";
import EditAccountHeader from "../../components/header/EditAccountHeader";

const EditAccount = () => {
  return (
    <main className="mx-auto w-full max-w-[430px]">
      <EditAccountHeader />
      <AccountHero />
      <AccountDetails />
    </main>
  );
};

export default EditAccount;
