import React, { useState } from "react";
import styles from "./Home.module.css";
import Modal from "./Modal"; // Corrected import since Modal is inside pages

const wellnessCenters = [
  { 
    name: "Serene Wellness Retreat", 
    img: "/img1.jpg",
    description: "A peaceful retreat offering holistic wellness treatments, nature therapy, and relaxation sessions.",
    price: "5000",
    location: "Rishikesh, India",
    mapLink: "https://maps.google.com/?q=Rishikesh",
    bookingLink: "https://serenewellness.com/book"
  },
  { 
    name: "Mountain Yoga Resort", 
    img: "/img2.jpg",
    description: "Experience yoga and meditation in the serene mountains, surrounded by breathtaking landscapes.",
    price: "7000",
    location: "Manali, India",
    mapLink: "https://maps.google.com/?q=Manali",
    bookingLink: "https://mountainyoga.com/book"
  },
  { 
    name: "Ocean Bliss Spa", 
    img: "/img3.jpg",
    description: "Enjoy luxurious spa treatments with oceanfront views to rejuvenate your body and mind.",
    price: "6000",
    location: "Goa, India",
    mapLink: "https://maps.google.com/?q=Goa",
    bookingLink: "https://oceanbliss.com/book"
  },
  { 
    name: "Zen Garden Wellness", 
    img: "/img4.jpg",
    description: "A tranquil wellness center featuring Zen gardens, deep relaxation, and herbal therapies.",
    price: "4500",
    location: "Jaipur, India",
    mapLink: "https://maps.google.com/?q=Jaipur",
    bookingLink: "https://zengarden.com/book"
  },
  { 
    name: "Ayurveda Healing Center", 
    img: "/img5.jpg",
    description: "Traditional Ayurveda therapies for detoxification, rejuvenation, and overall well-being.",
    price: "8000",
    location: "Kerala, India",
    mapLink: "https://maps.google.com/?q=Kerala",
    bookingLink: "https://ayurvedahealing.com/book"
  },
  { 
    name: "Luxury Detox Retreat", 
    img: "/img6.jpg",
    description: "Exclusive detox programs with spa, sauna, and nutrition plans for a refreshed you.",
    price: "10000",
    location: "Udaipur, India",
    mapLink: "https://maps.google.com/?q=Udaipur",
    bookingLink: "https://luxurydetox.com/book"
  },
  { 
    name: "Forest Meditation Escape", 
    img: "/img7.jpg",
    description: "Escape into the wild and experience guided meditation in lush green forests.",
    price: "5500",
    location: "Coorg, India",
    mapLink: "https://maps.google.com/?q=Coorg",
    bookingLink: "https://forestmeditation.com/book"
  },
  { 
    name: "Rejuvenation Therapy Spa", 
    img: "/img8.jpg",
    description: "A spa dedicated to skin rejuvenation, stress relief, and relaxation therapy.",
    price: "6500",
    location: "Mysore, India",
    mapLink: "https://maps.google.com/?q=Mysore",
    bookingLink: "https://rejuvenationtherapy.com/book"
  },
];

const Home = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);

  return (
    <div className={styles.container}>
      {/* Hero Section with Static Background Image */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Ramaa Wellness</h1>
          <p>Your journey to wellness begins here. Find the best wellness retreats and centers to rejuvenate your mind and body.</p>
        </div>
      </div>

      {/* Wellness Center Listings */}
      <div className={styles.listings}>
        {wellnessCenters.map((center, index) => (
          <div 
            key={index} 
            className={styles.card} 
            onClick={() => setSelectedCenter(center)}
          >
            <img
              src={center.img}
              alt={center.name}
              loading="lazy"
              onError={(e) => (e.target.src = "/fallback.jpg")} // A fallback image in case the image fails to load
            />
            <div className={styles.cardContent}>
              <h3>{center.name}</h3>
              <p>{center.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal (Shows only when a center is clicked) */}
      {selectedCenter && <Modal center={selectedCenter} onClose={() => setSelectedCenter(null)} />}
    </div>
  );
};

export default Home;
