"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref, // Ensure this container has `overflow-y: auto` styling
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  // Precompute breakpoints for performance optimization
  const cardsBreakpoints = useMemo(
    () => content.map((_, index) => index / cardLength),
    [content, cardLength]
  );

  // Update active card based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Define background colors and gradients
  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    if (linearGradients.length > 0) {
      setBackgroundGradient(
        linearGradients[activeCard % linearGradients.length]
      );
    }
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      style={{ willChange: "background-color" }}
      animate={{
        backgroundColor:
          backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-screen overflow-y-auto flex justify-center items-center relative space-x-10 rounded-md p-5"
      ref={ref}
    >
      <div className="relative flex items-start px-10 h-screen">
        <div className="max-w-screen-lg">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      {content && content.length > 0 ? (
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden lg:block h-72 w-96 rounded-md bg-white sticky top-10 overflow-hidden justify-center",
            contentClassName
          )}
        >
          {content[activeCard]?.content ?? null}
        </div>
      ) : (
        <div>No content available</div>
      )}
    </motion.div>
  );
};
