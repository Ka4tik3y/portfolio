// src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        {
            title: "Talkin",
            description: "Talkin is a full stack real time chat and video calling web app built with the MERN stack and WebRTC. It features user authentication, onboarding, one on one chat, video calls, and friend requests all with a clean and responsive UI.",
            image: "./Projects/talkin.png",
            liveLink: "https://streamifyy-e92a.onrender.com/",
            githubLink: "https://github.com/Ka4tik3y/talkinn"
        },
        {
            title: "MegaBlog",
            description: "Megablog is a dynamic blogging platform crafted with React and powered by Appwrite services. It offers users a seamless experience to sign up, create accounts, and publish blogs enriched with images. This interactive website aims to provide a user-friendly interface for both writing and sharing content effortlessly.",
            image: "./Projects/megablog.png",
            liveLink: 'https://mega-blog-pink-theta.vercel.app/',
            githubLink: "https://github.com/Ka4tik3y/MegaBlog"
        },
        {
            title: "Real-time Location Tracker",
            description: "A web application that allows users to track their real-time location and share it with others.",
            image: "./Projects/location.png",
            liveLink: null,
            githubLink: "https://github.com/Ka4tik3y/REAL-TIME-TRACKER"
        },
        {
            title: "Backend API for YouTube like multi media app",
            description: "User authentication using JWT, endpoints for user registration, login/logout, access to protected routes, token revocation and token expiration.",
            image: "./Projects/jwt.png",
            liveLink: null,
            githubLink: "https://github.com/Ka4tik3y/chillycap-youtube-backend"
        }
       
      
    ];

    return (
        <div className="h-auto mt-[130px] mb-12 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl font-bold text-[#66FCF1] text-center mb-12"
                >
                    My Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;