import { motion } from "framer-motion";

const CircleSentence = ({ sentence }) => {
  const sentenceArray = sentence.split(" ");

  return (
    <div style={{ width: "400px", height: "400px", position: "relative" }}>
      {sentenceArray.map((word, index) => (
        <motion.span
          key={index}
          style={{
            display: "inline-block",
            position: "absolute",
            top: "50%",
            left: "50%",
            transformOrigin: "50% 50%",
            whiteSpace: "nowrap",
          }}
          animate={{
            rotate: 360 / sentenceArray.length * index,
            x: Math.cos(2 * Math.PI / sentenceArray.length * index) * 150,
            y: Math.sin(2 * Math.PI / sentenceArray.length * index) * 150,
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default CircleSentence;
