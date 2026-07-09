"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  color?: string;
  bgColor?: string;
}

export function CircularProgress({
  percentage,
  size = 120,
  strokeWidth = 8,
  label,
  color = "#5CB8FF",
  bgColor = "#E6EEF7",
}: CircularProgressProps) {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  const displayValue = useSpring(0);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      springValue.set(percentage);
      displayValue.set(percentage);
    }
  }, [isInView, hasAnimated, percentage, springValue, displayValue]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(`progress-${label}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [label]);

  return (
    <div id={`progress-${label}`} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={bgColor}
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{
              strokeDashoffset: isInView ? offset : circumference,
            }}
            transition={{
              duration: 1.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        </svg>
        {/* Percentage text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <motion.span
            className="text-2xl font-bold text-[#16243A]"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
          >
            {percentage}%
          </motion.span>
        </motion.div>
      </div>
      {label && (
        <span className="mt-3 text-sm font-medium text-[#6B7280]">{label}</span>
      )}
    </div>
  );
}

interface ProgressBarProps {
  percentage: number;
  label?: string;
  color?: string;
}

export function ProgressBar({
  percentage,
  label,
  color = "#5CB8FF",
}: ProgressBarProps) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(`progress-bar-${label}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [label]);

  return (
    <div id={`progress-bar-${label}`} className="w-full">
      {label && (
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-[#16243A]">{label}</span>
          <span className="text-sm font-medium text-[#6B7280]">{percentage}%</span>
        </div>
      )}
      <div className="h-2 bg-[#E6EEF7] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${percentage}%` : 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </div>
  );
}
