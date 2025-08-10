import React from 'react';
import CP from './CP.jsx';
import { FaStar } from 'react-icons/fa';
import { motion } from "framer-motion";

const About = () => {
    const achievements = [
        "AI Intern at Mirai school of technology, did my summer internship learning machine learning and ai and working with real world projects and problem solving.",
        "Participated in various hackathons and coding competitions and contests on platforms like codeforces and leetcode done over 250 problems on leetcode in C++ and Java.",
        
         "Currently doing an Internship at DGLiger consulting as a Backend intern with java and springboot.",

    ];

    const technicalSkills = {
        "Programming Language:": "C, C++, JavaScript, Java, Python",
        "Frameworks/ Libraries:": "React.js, Node.js, Express.js, TailwindCSS, BootStrap,SpringBoot",
        "Database:": "MySQL, MongoDB"
    };

    return (
        <div className="mt-[80px] md:mt-[130px] min-h-auto flex items-center mx-6 text-[#C5C6C7] p-8 ">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-bold mb-8 text-[#66FCF1]"
                >
                    About Me
                </motion.h1>

                <div className="flex flex-col lg:flex-row gap-12 mb-12">
                    <motion.div initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:w-2/3"
                    >
                        <p className="text-xl mb-6">
                            Hi!! Everyone, I am Kartikey Sharma. Aspiring Web developer.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4 text-[#45A29E]">
                            Some of my experiences:
                        </h2>
                        <ul className="space-y-2">
                            {achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start">
                                    <FaStar className="text-[#66FCF1] mt-1 mr-2 flex-shrink-0" />
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="lg:w-1/3"
                    >
                        <img src="/about.png" alt="Programming Illustration" className="w-full" />
                    </motion.div>
                </div>
                <CP />
                <div className="bg-[#1f2833] rounded-lg p-6 shadow-2xl">
                    <h2 className="text-3xl font-bold mb-6 text-center text-[#66FCF1]">My Technical Skills</h2>
                    {Object.entries(technicalSkills).map(([category, skills], index) => (
                        <div key={index} className="mb-4">
                            <span className="text-[#45A29E] font-semibold">{category}</span>{" "}
                            <span className="text-[#C5C6C7]">{skills}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
