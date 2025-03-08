import React from "react";
import styles from "./Packages.module.css";

const packages = [
  {
    name: "Ayurveda Rejuvenation Package",
    img: "https://images.unsplash.com/photo-1626775986444-09b0b7a6c5fc",
    duration: "7 Days / 6 Nights",
    price: "₹45,000",
    description:
      "A complete Ayurveda experience with detox therapies, herbal treatments, and personalized wellness consultation.",
  },
  {
    name: "Luxury Spa & Detox Retreat",
    img: "https://images.unsplash.com/photo-1626201525708-b6e622f6b2d3",
    duration: "5 Days / 4 Nights",
    price: "₹60,000",
    description:
      "Enjoy luxury spa treatments, body detox programs, and meditation sessions in a 5-star wellness resort.",
  },
  {
    name: "Yoga & Meditation Retreat",
    img: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
    duration: "10 Days / 9 Nights",
    price: "₹30,000",
    description:
      "Immerse yourself in traditional yoga and guided meditation practices in a serene natural environment.",
  },
  {
    name: "Himalayan Spiritual Healing",
    img: "https://images.unsplash.com/photo-1563308091-bb11c4a3de62",
    duration: "8 Days / 7 Nights",
    price: "₹50,000",
    description:
      "A healing journey in the Himalayas with energy cleansing, mindfulness training, and nature therapy.",
  },
  {
    name: "Bali Holistic Wellness Escape",
    img: "https://images.unsplash.com/photo-1596495577886-d920f1c3d8f3",
    duration: "6 Days / 5 Nights",
    price: "₹55,000",
    description:
      "A tropical escape featuring organic meals, Balinese healing massages, and wellness workshops.",
  },
  {
    name: "Thailand Weight Loss & Detox",
    img: "https://images.unsplash.com/photo-1513628253939-010e64ac66cd",
    duration: "7 Days / 6 Nights",
    price: "₹65,000",
    description:
      "A scientifically designed detox and weight loss program with nutritionists, personal trainers, and spa therapies.",
  },
];

const Packages = () => {
  return (
    <div className={styles.container}>
      <h1>Wellness Packages</h1>
      <p>
        Choose from our carefully curated wellness packages to refresh your body and mind.
      </p>

      <div className={styles.grid}>
        {packages.map((pkg, index) => (
          <div key={index} className={styles.card}>
            <img src={pkg.img} alt={pkg.name} loading="lazy" />
            <h3>{pkg.name}</h3>
            <p><strong>Duration:</strong> {pkg.duration}</p>
            <p><strong>Price:</strong> {pkg.price}</p>
            <p>{pkg.description}</p>
            <button className={styles.bookNow}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
