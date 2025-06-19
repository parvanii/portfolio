import React, { useState } from "react";
import { motion } from "framer-motion";
import TopBar from "./components/TopBar";
import Dock from "./components/Dock";

const textMotion = {
  hover: {
    scale: 1.2,
    y: -5,
    transition: { type: "spring", stiffness: 300 },
  },
};

const AnimatedLetters = ({ text, fontStyle, className }) => {
  return (
    <motion.div
      className={`flex justify-center ${className}`}
      style={{ fontFamily: fontStyle }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={textMotion}
          whileHover="hover"
          className="inline-block cursor-default"
          style={{ color: "black" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Optional error boundary wrapper
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1 className="text-center text-xl mt-10">Oops! Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setMousePosition({
      x: (clientX - centerX) / 25,
      y: (clientY - centerY) / 25,
    });
  };

  return (
    <ErrorBoundary>
      <div
        onMouseMove={handleMouseMove}
        className="relative h-screen w-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/wallpapers/bg.png')",
        }}
      >
        <TopBar />

        {/* Centered animated content */}
        <motion.div
          className="absolute top-1/2 left-1/2 text-center space-y-[-1.5rem] z-10"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px))`,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
          }}
        >
          <motion.p
            whileHover={{ scale: 1.1 }}
            className="italic mb-0 text-[35px] font-light"
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              color: "black",
            }}
          >
            explore my
          </motion.p>

          <AnimatedLetters
            text="portfolio"
            className="italic -mt-6 text-[120px]"
            fontStyle="'Instrument Serif', serif"
          />
        </motion.div>

        {/* Dock pinned to bottom */}
        <Dock />
      </div>
    </ErrorBoundary>
  );
}
