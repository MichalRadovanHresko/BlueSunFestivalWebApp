import { useLocation } from "react-router-dom";
import BottomTab from "./components/footer/BottomTab.jsx";
import AppRoutes from "./components/AppRoutes.jsx";

export default function App() {
  const location = useLocation();
  const hideBottomTab = location.pathname === "/";

  return (
    <>
      <AppRoutes />
      {!hideBottomTab && <BottomTab />}
    </>
  );
}
