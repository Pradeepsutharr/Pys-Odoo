// components/SplitText.tsx
"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

type SplitTextProps = {
  text: string,
  type?: "word" | "char",
  className?: string,
};

export default function SplitText({
  text,
  type = "word",
  className = "",
}: SplitTextProps) {
  const ref = useRef(null);
  const inView = useInView(ref, );
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const split = type === "char" ? [...text] : text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: .8, ease: "easeOut" },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className={`inline-block ${className}`}
    >
      {split.map((wordOrChar, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block whitespace-pre"
        >
          {wordOrChar}
          {type === "word" && " "}
        </motion.span>
      ))}
    </motion.span>
  );
}



