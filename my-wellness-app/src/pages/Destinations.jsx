import React from "react";
import styles from "./Destinations.module.css";

const destinations = [
  {
    name: "Rishikesh - Yoga Capital of the World",
    img: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
    description:
      "Nestled in the foothills of the Himalayas, Rishikesh is the ultimate destination for yoga and meditation lovers.",
  },
  {
    name: "Kerala - Ayurveda & Spa Retreats",
    img: "https://images.unsplash.com/photo-1626775986444-09b0b7a6c5fc",
    description:
      "Experience authentic Ayurvedic healing in Kerala’s lush backwaters and rejuvenate with traditional therapies.",
  },
  {
    name: "Goa - Beachfront Wellness & Spa",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    description:
      "Relax in luxury spa resorts by the sea, offering yoga, detox programs, and holistic wellness treatments.",
  },
  {
    name: "Himalayas - Meditation & Spiritual Healing",
    img: "https://images.unsplash.com/photo-1563308091-bb11c4a3de62",
    description:
      "A peaceful retreat for deep meditation, mindfulness, and natural healing in the serenity of the mountains.",
  },
  {
    name: "Bali - Holistic Wellness Paradise",
    img: "https://images.unsplash.com/photo-1596495577886-d920f1c3d8f3",
    description:
      "Bali offers a perfect blend of spirituality, organic food, and holistic healing for a complete wellness escape.",
  },
  {
    name: "Thailand - Detox & Wellness Resorts",
    img: "https://images.unsplash.com/photo-1513628253939-010e64ac66cd",
    description:
      "Famous for its luxury wellness retreats, Thailand provides detox, spa, and fitness programs in tropical settings.",
  },
];

const Destinations = () => {
  return (
    <div className={styles.container}>
      <h1>Top Wellness Destinations</h1>
      <p>
        Explore the world’s most serene wellness retreats, designed to refresh your body, mind, and soul.
      </p>

      <div className={styles.grid}>
        {destinations.map((destination, index) => (
          <div key={index} className={styles.card}>
            <img src={destination.img} alt={destination.name} loading="lazy" />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
