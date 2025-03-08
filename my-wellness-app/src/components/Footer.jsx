import React from "react";
import styles from "./Footer.module.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section - Contact Info */}
        <div className={styles.contactInfo}>
          <h3>Contact Us</h3>
          <p><FaPhone /> +91 98765 43210</p>
          <p><FaEnvelope /> contact@ramaawellness.com</p>
          <p><FaMapMarkerAlt /> Andheri West, Mumbai, India</p>
        </div>

        {/* Right Section - Social Media */}
        <div className={styles.socialMedia}>
          <h3>Follow Us</h3>
          <div className={styles.icons}>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyright}>
        <p>© 2025 RamaaWellness. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
