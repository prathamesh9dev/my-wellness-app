import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ center, onClose }) => {
  if (!center) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>{center.name}</h2>
        <img src={center.img} alt={center.name} className={styles.modalImage} />
        <p><strong>Description:</strong> {center.description}</p>
        <p><strong>Price:</strong> ₹{center.price}</p>
        <p><strong>Location:</strong> {center.location}</p>

        {/* Display Google Maps Embed */}
        <iframe 
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(center.location)}`}
          title="Google Maps"
          className={styles.map}
          loading="lazy"
          allowFullScreen
        ></iframe>

        {/* Click to Book Button */}
        <a href={center.bookingLink} target="_blank" rel="noopener noreferrer" className={styles.bookButton}>
          Click to Book
        </a>
      </div>
    </div>
  );
};

export default Modal;
