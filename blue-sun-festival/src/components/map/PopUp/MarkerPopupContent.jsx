import React from "react";
import HeartIcon from "../../icons/HeartIcon";

const InfoCard = ({ label, value }) => (
  <div className="marker-popup__info-item">
    <p className="marker-popup__info-label">{label}</p>
    <div className="marker-popup__info-value">{value}</div>
  </div>
);

const MarkerPopupContent = ({ marker }) => {
  if (!marker) return null;

  return (
    <div className="marker-popup__sheet">
      <div className="marker-popup__header">
        <h3 className="marker-popup__title">{marker.title}</h3>
        <button
          className="marker-popup__favorite"
          type="button"
          aria-label="Save location"
        >
          <HeartIcon />
        </button>
      </div>

      <div className="marker-popup__info-grid">
        <InfoCard label="Time in line" value={marker.queueTime} />
        <InfoCard label="Preparation" value={marker.prepTime} />
      </div>

      <p className="marker-popup__description">{marker.description}</p>

      <div className="marker-popup__bottom-cards">
        <div className="marker-popup__card">
          <p className="marker-popup__card-label">Time in line</p>
          <div className="marker-popup__card-value">{marker.queueTime}</div>
        </div>
        <div className="marker-popup__card">
          <p className="marker-popup__card-label">Preparation</p>
          <div className="marker-popup__card-value">{marker.prepTime}</div>
        </div>
      </div>
    </div>
  );
};

export default MarkerPopupContent;
