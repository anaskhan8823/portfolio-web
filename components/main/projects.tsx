"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/motion";

type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

type TProject = {
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  sourceCodeLink: string;
} & Required<Pick<TCommonProps, "name">>;

const projects: TProject[] = [
  {
    name: "Car Centric",
    description:
      "The application transforms the automotive buying and selling experience by offering a streamlined platform for browsing, valuing, and purchasing vehicles.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "android-ios",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: '/projects/07.jpg',
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "BeAna Qutor, BeAna",
    description:
      "This app allows you to improve your reading and understanding of the Quran. Manage students and much more.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "android-ios",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: '/projects/01.jpg',
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "BeAna Student, BeAna",
    description:
      "This app allows you to improve your reading and understanding of the Quran. Manage class bookings and much more",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "android-ios",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: '/projects/02.jpg',
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Osmani HRMS, Intrapreneur",
    description:
      "This application is designed to make it easier for their staff to complete HR tasks including requesting leaves, making requests, or filing grievances.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "android-ios",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: '/projects/03.jpg',
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "BCDA Survey, Intrapreneur, Link",
    description:
      "A project for the Government of Baluchistan initiated by Baluchistan Coastal Development Authority (BCDA). The purpose of this app is to take and manage surveys.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "android-ios",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: '/projects/04.jpg',
    sourceCodeLink: "https://github.com/",
  }, 
  {
    name: "WASA Digital Survey, Intrapreneur",
    description:
      "This app is for Wasa Hyderabad to conduct surveys of actual or potential customers.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "android-ios",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: '/projects/05.jpg',
    sourceCodeLink: "https://github.com/",
  }, 
  {
    name: "AI CARZ, EAISoft",
    description:
      "Application which transforms the automotive buying and selling process. The app features a comprehensive vehicle inspection tool for assessing key components such as tyres and body condition.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "android-ios",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: '/projects/06.jpg',
    sourceCodeLink: "https://github.com/",
  },           
];

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareColor="#915EFF"
        glareMaxOpacity={0.1}
      >
        <div className="bg-[#1a1a2e] w-full rounded-3xl p-6 sm:w-[350px] min-h-[520px] border border-[#2a2a4e] hover:border-[#915EFF] transition-all duration-300 pb-20">
          <div className="relative h-[250px] w-full mb-6">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover"
            />
            <div className="absolute top-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="bg-black bg-opacity-80 hover:bg-[#915EFF] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <img
                  src='/projects/github.png'
                  alt="github"
                  className="h-6 w-6 object-contain invert"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col h-[200px]">
            <h3 className="text-white text-[28px] font-bold mb-4 leading-tight">{name}</h3>
            <p className="text-[#b8b8d1] text-[16px] leading-relaxed flex-grow mb-6">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-3 mt-auto">
              {tags.map((tag) => (
                <span 
                  key={tag.name} 
                  className={`text-[14px] font-medium px-3 py-1 rounded-full border ${
                    tag.name === 'react' ? 'text-[#61DAFB] border-[#61DAFB]' :
                    tag.name === 'mongodb' ? 'text-[#47A248] border-[#47A248]' :
                    tag.name === 'tailwind' ? 'text-[#06B6D4] border-[#06B6D4]' :
                    tag.name === 'nextjs' ? 'text-white border-white' :
                    tag.name === 'supabase' ? 'text-[#3ECF8E] border-[#3ECF8E]' :
                    tag.name === 'css' ? 'text-[#1572B6] border-[#1572B6]' :
                    tag.name === 'restapi' ? 'text-[#FF6B35] border-[#FF6B35]' :
                    tag.name === 'scss' ? 'text-[#CF649A] border-[#CF649A]' :
                    'text-[#915EFF] border-[#915EFF]'
                  } bg-opacity-10 hover:bg-opacity-20 transition-all duration-200`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center mb-[100px]">
      {/* Section Heading */}
      <div className="text-center mb-12">
      <motion.h2
        variants={fadeIn("up", "spring", 0, 1)}
        className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8"
      >
        Projects
      </motion.h2>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-gray-300 mt-4 max-w-3xl text-[17px] leading-[30px] text-center"
      >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};