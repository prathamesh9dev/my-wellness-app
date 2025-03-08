import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <p>
        Welcome to RamaaWellness, your trusted platform for discovering the best
        wellness centers for tourism. Whether you're seeking relaxation,
        rejuvenation, or a complete wellness retreat, we connect you with the
        finest destinations across India and beyond.
      </p>

      <div className={styles.contactInfo}>
        <h2>Our Office</h2>
        <p>RamaaWellness Pvt. Ltd.</p>
        <p>4th Floor, Sunshine Towers</p>
        <p>Veera Desai Road, Andheri West</p>
        <p>Mumbai, Maharashtra - 400053</p>
        <p>India</p>

        <h2>Contact Details</h2>
        <p>Email: support@ramaawellness.com</p>
        <p>Phone: +91 1234 567890</p>
        <p>WhatsApp: +91 99999 88888</p>

        <h2>Follow Us</h2>
        <p>
          Stay updated on wellness trends and exclusive retreats by following us
          on:
        </p>
        <p>Instagram: @ramaawellness</p>
        <p>Facebook: facebook.com/ramaawellness</p>
        <p>Twitter: @ramaawellness</p>
      </div>
    </div>
  );
};

export default Contact;
