import { useState, useEffect } from "react";

const useTypingEffect = (paused: boolean = false) => {
  const texts = [
    "community resources",
    "volunteer opportunities",
    "upcoming events",
    "amenities",
    "support services",
  ];
  const typingSpeed = 70;
  const deletingSpeed = 50;
  const pauseBetweenTexts = 1500;

  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (paused) return;

    const currentText = texts[textIndex];
    let timeout: number;

    if (!isDeleting && displayedText.length < currentText.length) {
      timeout = window.setTimeout(() => {
        setDisplayedText(prev => currentText.slice(0, prev.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = window.setTimeout(() => {
        setDisplayedText(prev => currentText.slice(0, prev.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), pauseBetweenTexts);
    } else if (isDeleting && displayedText.length === 0) {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setTextIndex(prev => (prev + 1) % texts.length);
      }, pauseBetweenTexts);
    }

    return () => window.clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, paused]);

  return displayedText;
};

export default useTypingEffect;