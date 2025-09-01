"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import dynamic from "next/dynamic";

const VerticalTimeline = dynamic(
  () => import("react-vertical-timeline-component").then((mod) => mod.VerticalTimeline),
  { ssr: false }
);
const VerticalTimelineElement = dynamic(
  () => import("react-vertical-timeline-component").then((mod) => mod.VerticalTimelineElement),
  { ssr: false }
);

import "react-vertical-timeline-component/style.min.css";

interface Experience {
  title: string;
  companyName: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: "Flutter Developer",
    companyName: "Car Centric | Australia (Remote)",
    icon: "/experience/car-centric.jpg",
    iconBg: "#383E56",
    date: "August 2024 - December 2024",
    points: [
      "Create an application for android, IOS and web and make it adoptive and responsive for better user experience.",
      "Implement pdf view, web view for viewing pdf files.",
      "Implement one signal for seamless notifications.",
      "Integrate RESTful APIs and Firebase.",
      "Implemented GetX for state management.",
      "Implemented MVC architecture, and created personalised, reusable widgets.",
      "Attended standup meetings, and shared updates with the team.",
      "Translated complex Figma and Adobe XD designs into responsive mobile application.",
      "Managed end-to-end deployment processes on App Store and TestFlight.",
    ],
  },
  // ... rest of your experiences
];

interface ExperienceCardProps extends Experience {}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  companyName,
  icon,
  iconBg,
  date,
  points,
}) => (
  <VerticalTimelineElement
    visible={true}
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
      borderRadius: "12px",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={date}
    iconStyle={{ background: iconBg, border: "3px solid #232631" }}
    icon={
      <div className="flex h-full w-full items-center justify-center">
        <img
          src={icon}
          alt={companyName}
          className="h-[60%] w-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-[24px] font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-[16px] font-semibold mb-4">{companyName}</p>
    </div>
    <ul className="ml-5 mt-5 list-disc space-y-2">
      {points.map((point, index) => (
        <li
          key={`point-${index}`}
          className="text-gray-300 pl-1 text-[14px] tracking-wider leading-relaxed"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

export const Experience: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex flex-col items-center">
        <motion.h2
          variants={fadeIn("up", "spring", 0, 1)}
          className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
        >
          Work Experience
        </motion.h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-gray-400 text-center max-w-3xl text-lg mb-20"
        >
          My professional journey
        </motion.p>
        <div className="flex flex-col items-center space-y-8 mt-20">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="w-full max-w-3xl animate-pulse">
              <div className="bg-gray-700 h-32 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section id="experience">
      <div className="flex flex-col items-center">
        <motion.h2
          variants={fadeIn("up", "spring", 0, 1)}
          className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
        >
          Work Experience
        </motion.h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-gray-400 text-center max-w-3xl text-lg mb-20"
        >
          My Professional Journey
        </motion.p>
        <div className="mt-20 flex flex-col w-full">
          <VerticalTimeline lineColor="#232631">
            {experiences.map((experience, index) => (
              <ExperienceCard key={`experience-${index}`} {...experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};
