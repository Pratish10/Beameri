import Card from "../components/Card";
import Vision from "../components/Vision";
import HowItWorks from "../components/HowItWorks";
import Hero from "../components/Hero";

const CARD_CONTENT = [
  {
    id: "c1",
    title: "Experience the Warm Heart Difference",
    content:
      "At Warm Heart, we don't just send messages; we create moments that linger in the heart. Explore these three videos to witness the transformative power of AI-generated personalized messages.",
    content2:
      "Each video carries the same message but is uniquely addressed to a different individual, capturing the essence of what makes Warm Heart special.",
  },
  {
    id: "c2",
    title: "Pricing that Fits your Heart",
    content:
      "At Beameri, we believe in affordability and flexibility. Our pricing is straightforward - you pay per second for your personalized videos. It's as simple as that. Plus, we offer various packages to match your unique needs, ensuring that heartfelt connections don't break the bank. Create unforgettable moments without the financial worry - explore our pricing options today!",
    content2: "",
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <Vision />
      <HowItWorks />
      {CARD_CONTENT.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          content={card.content}
          content2={card.content2}
        />
      ))}
    </>
  );
};

export default Home;
