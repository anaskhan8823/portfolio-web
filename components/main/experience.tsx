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

const experiences = [
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
  {
    title: "Flutter Developer",
    companyName: "Eaisoft | Karachi, Pakistan (On Site)",
    icon: "/experience/eaisoft.jpg",
    iconBg: "#E6DEDD",
    date: "September 2023 - August 2024",
    points: [
      "Implement tinder like swap feature for liking and disliking cars and show feed accordingly.",
      "Integrated AI Model for checking tire trade.",
      "Integrated Ai Model for checking extra panel gaps between two panels of the car.",
      "Integrated Ai Voice assistant for search cars according to user needs.",
      "Collaborated with UX/UI designers to create an intuitive and visually appealing interface.",
      "Implement Google login, Facebook login and Apple login.",
      "Lead project including planning, execution, mentoring juniors and coordination with team members to meet deadlines.",
      "Troubleshot and debugged critical issues reported by testers ensuring app stability.",
      "Translated complex Figma designs into responsive application for android and IOS.",
      "Managed deployment of the app on Test flight, Apple’s Oculus for testing, and publish on Play Store and App Store.",
    ],
  },
  {
    title: "Flutter Developer",
    companyName: "SoftMax | Malaysia (Remote)",
    icon: "/experience/flutter.webp",
    iconBg: "#E6DEDD",
    date: "April 2023 - September 2023",
    points: [
      "Develop and maintain various application modules, ensuring seamless integration of APIs.",
      "Implementing new features to enhance system functionality.",
      "Implemented GetX for state management.",
      "Implemented Bloc for state management.",
      "Implemented scalable MVC architecture, and created personalised, reusable widgets.",
      "Perform testing and debugging of code to identify and resolve issues.",
      "Attended daily meetings, and shared updates with the team team members to meet deadlines.",
      "Optimised codebases for enhanced performance.",
      "Contributed to successful deployment of applications, improving overall project efficiency.",
      "Deploy app on on Play Store and App Store.",
    ],
  },
  {
    title: "Software Engineer",
    companyName: "Intrapreneur | Karachi, Pakistan (On Site)",
    icon: "/experience/intrapreneur.jpg",
    iconBg: "#E6DEDD",
    date: "December 2021 - April 2023",
    points: [
      "Convert Figma and Adobe XD designs into responsive and efficient Flutter code.",
      "Ensure proper and accurate implementation of UI/UX designs.",
      "Integrate Google Maps into Flutter applications.",
      "Integrate features like geotagging, geolocation.",
      "Google Maps API for directions to enhance user experience.",
      "Implement local storage solutions and Firebase real-time database.",
      "Implement MVC architecture.",
      "Integrate and manage various RESTful APIs to expand application functionality and improve data interactions.",
      "Manage project effectively, ensuring timely delivery of project.",
    ],
  },
  {
    title: "Junior Flutter Developer",
    companyName: "Creative Computers | United States (Remote)",
    icon: "/experience/flutter.webp",
    iconBg: "#E6DEDD",
    date: "January 2019 - December 2020",
    points: [
      "Build and maintain visually appealing, responsive, and user-friendly Flutter UI components using best practices.",
      "Create and modify Flutter widgets to match design requirements, ensuring pixel-perfect UI.",
      "Implementation and convert websites in to mobile app using web view flutter.",
      "Implement Flutter state management techniques to maintain smooth UI interactions.",
      "Implement lotti animations, transitions, and other UI effects to improve user experience.",
      "Ensure the UI is optimised for different screen sizes.",
      "Stay updated with the latest Flutter UI trends, best practices, and emerging design patterns.",
      "Learn from senior developers, participate in code reviews, and improve UI development skills.",
    ],
  },      
];

const ExperienceCard = ({ title, companyName, icon, iconBg, date, points }) => (
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

export const Experience = () => {
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
              <ExperienceCard
                key={`experience-${index}`}
                {...experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};