"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/motion";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
  alt: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon, alt }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt={alt}
            className="h-16 w-16 object-contain"
          />
          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const services = [
  {
    title: "App Developer",
    icon: "/overview/web.png",
    alt: "app-development",
  },
  {
    title: "Creative", 
    icon: "/overview/mobile.png",
    alt: "creative",
  },
  {
    title: "Collaboative",
    icon: "/overview/backend.png", 
    alt: "collaboative",
  },
  {
    title: "Poblem Solver",
    icon: "/overview/creator.png",
    alt: "poblem-solver",
  },
];

export const About = () => {
  return (
    <div className="flex flex-col items-center" id="about-me">
      <motion.h2
        variants={fadeIn("up", "spring", 0, 1)}
        className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8"
      >
        Who Am I?
      </motion.h2>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-gray-300 mt-4 max-w-3xl text-[17px] leading-[30px] text-center"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </div>
  );
};