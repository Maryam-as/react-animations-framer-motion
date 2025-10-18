import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import AnimatedSection from "../components/AnimatedSection";
import { SECTIONS_DATA } from "../sections-data";
import cityImg from "../assets/city.jpg";
import heroImg from "../assets/hero.png";

export default function WelcomePage() {
  const { scrollY } = useScroll();

  // Header animations
  const yCity = useTransform(scrollY, [0, 200], [0, -100]);
  const opacityCity = useTransform(
    scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  );
  const yHero = useTransform(scrollY, [0, 200], [0, -180]);
  const opacityHero = useTransform(scrollY, [0, 300, 500], [1, 1, 0]);
  const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 300]);
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.5]);

  return (
    <>
      <header id="welcome-header">
        <motion.div
          style={{ scale: scaleText, y: yText }}
          id="welcome-header-content"
        >
          <h1>Ready for a challenge?</h1>
          <Link id="cta-link" to="/challenges">
            Get Started
          </Link>
        </motion.div>
        <motion.img
          style={{ opacity: opacityCity, y: yCity }}
          src={cityImg}
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
        <motion.img
          style={{ opacity: opacityHero, y: yHero }}
          src={heroImg}
          alt="A superhero wearing a cape"
          id="hero-image"
        />
      </header>
      <main id="welcome-content">
        {SECTIONS_DATA.map((section, i) => (
          <AnimatedSection
            key={i}
            title={section.title}
            text={section.text}
            delay={i * 0.1}
          />
        ))}
      </main>
    </>
  );
}
