import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1>About RamaaWellness</h1>
      <p>
        RamaaWellness is a premier platform dedicated to helping travelers find
        the best wellness destinations worldwide. Whether you're looking for
        Ayurveda retreats, spa resorts, meditation centers, or yoga getaways,
        we make it easy to discover, compare, and book wellness experiences.
      </p>

      <div className={styles.section}>
        <h2>Our Vision</h2>
        <p>
          We aim to revolutionize wellness tourism by connecting national and
          international travelers with authentic, top-rated wellness centers.
          Our platform ensures a seamless experience from discovery to booking.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>🧘 Curated wellness destinations for mind and body healing</li>
          <li>🌍 Trusted by international and national wellness travelers</li>
          <li>🏨 Verified wellness centers for a hassle-free experience</li>
          <li>📅 Easy booking and personalized wellness recommendations</li>
          <li>🤝 Strong partnerships with renowned wellness retreats</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>Explore Our Services</h2>
        <p>
          Whether you're a solo traveler, a group, or a corporate team, we offer
          customized wellness plans that suit your needs. From traditional
          Ayurveda treatments in Kerala to luxurious spa resorts in the
          Himalayas, we bring you the best experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
