import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import MarkerPopupContent from "./MarkerPopupContent";

const MarkerBottomPopup = ({ marker, onClose }) => {
  return (
    <Popup
      open={Boolean(marker)}
      modal
      closeOnDocumentClick
      onClose={onClose}
      overlayStyle={{
        background: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingBottom: "90px",
        paddingLeft: "6px",
        paddingRight: "6px",
      }}
      contentStyle={{
        background: "transparent",
        border: "none",
        padding: 0,
        width: "min(430px, calc(100vw - 12px))",
        margin: 0,
        boxShadow: "none",
      }}
    >
      <MarkerPopupContent marker={marker} />
    </Popup>
  );
};

export default MarkerBottomPopup;
