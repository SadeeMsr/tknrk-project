"use client";
import { motion } from "framer-motion";

const Wrapper = (props) => {
  return <span className="word-wrapper whitespace-nowrap">{props.children}</span>;
};

export default function AnimatedText({ placeHolders, textStyle }) {
  const item = {
    hidden: {
      y: "200%",
      color: "white",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: "white",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const splitWords = placeHolders?.text.split(" ");

  const words = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <h1>
      {words?.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index]?.flat().map((element, index) => {
              return (
                <h1
                  className={textStyle}
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </h1>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </h1>
  );
}
