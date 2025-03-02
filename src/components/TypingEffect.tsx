import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number;
  delay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ words, speed = 100, delay = 1000 }) => {
  const [text, setText] = useState<string>("");
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentWord = words[roleIndex];

    if (!isDeleting && charIndex < currentWord.length) {
      setTimeout(() => setText(currentWord.substring(0, charIndex + 1)), speed);
      setTimeout(() => setCharIndex((prev) => prev + 1), speed);
    } else if (isDeleting && charIndex > 0) {
      setTimeout(() => setText(currentWord.substring(0, charIndex - 1)), speed / 2);
      setTimeout(() => setCharIndex((prev) => prev - 1), speed / 2);
    } else if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % words.length);
    }
  }, [charIndex, isDeleting, roleIndex, words, speed, delay]);

  return <h1 className="h-10 mt-5 text-3xl">{text}</h1>;
};

export default Typewriter;
