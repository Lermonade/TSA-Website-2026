import React, { useState, useEffect } from "react";
import styles from './typingText.module.css'

const TypingText: React.FC = () => {
  const texts = ["community resources", "volunteer opportunities", "upcoming events", "amenities", "support services"];
  const typingSpeed = 70;
  const deletingSpeed = 50;
  const pauseBetweenTexts = 1500;

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: number;

    const currentText = texts[textIndex];

    if (!isDeleting && charIndex < currentText.length) {
      timeout = window.setTimeout(() => {
        setCharIndex((prev) => prev + 1);
        setDisplayedText(currentText.slice(0, charIndex + 1));
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = window.setTimeout(() => {
        setCharIndex((prev) => prev - 1);
        setDisplayedText(currentText.slice(0, charIndex - 1));
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), pauseBetweenTexts);
    } else if (isDeleting && charIndex === 0) {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, pauseBetweenTexts);
    }

    return () => window.clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <p className={styles.typingText}>
      {displayedText}
      <span className={styles.cursor}>|</span>
    </p>
  );
};

export default TypingText;