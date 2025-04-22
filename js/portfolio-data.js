// Portfolio data
const portfolioData = {
    about: {
        name: "Ícaro Caldeira Botelho",
        title: "Systems Development Teacher | Software Engineering Student",
        location: "Joinville, Santa Catarina, Brazil",
        description: `Technology professional with experience in systems development and technical education.
        I currently work as a Systems Development Instructor at SENAI/SC,
        sharing knowledge and training new professionals for the technology market.
        
        I am a Software Engineering student at Católica SC, constantly seeking to improve
        my technical skills and knowledge in the development field.
        
        I have previous experience in the industry, having worked as a Production Controller I and
        Technical Assistant in Plastic Lamination at Whirlpool Corporation.`
    },
    skills: [
        { name: "JavaScript", level: 85, certified: true },
        { name: "Python", level: 80, certified: true },
        { name: "PHP", level: 75, certified: false },
        { name: "HTML", level: 90, certified: false },
        { name: "CSS", level: 85, certified: false },
        { name: "MySQL", level: 80, certified: false },
        { name: "SQL", level: 80, certified: false },
        { name: "Communication", level: 90, certified: false },
        { name: "Microsoft Excel", level: 85, certified: true },
        { name: "Adobe Photoshop", level: 70, certified: false },
        { name: "Sleep", level: 2, certified: false }
    ],
    projects: [
        {
            name: "Digital Library of Babel",
            description: "A digital implementation of the Library of Babel, a concept created by Jorge Luis Borges. This project allows you to explore a virtual library that contains all possible texts.",
            technologies: ["JavaScript"],
            link: "https://github.com/icrcode/dbdnr-library-of-babel"
        },
        {
            name: "Node Express MySQL API",
            description: "Project to create an API developed in Node.js using the Express framework and MySQL database. This repository demonstrates the construction of an API capable of performing CRUD operations.",
            technologies: ["JavaScript", "Node.js", "Express", "MySQL"],
            link: "https://github.com/icrcode/api-node-express-mysql2"
        },
        {
            name: "Personal Portfolio",
            description: "My first website that I developed in my life! The idea was to create a resume/portfolio. I always like to revisit it to observe how much I've evolved over time.",
            technologies: ["HTML"],
            link: "https://github.com/icrcode/botelho-icaro"
        },
        {
            name: "Sorting Algorithms",
            description: "Repository dedicated to the study and implementation of sorting algorithms. Here, we explore theoretical concepts, complexity analyses, and practical implementations of various sorting methods.",
            technologies: ["Python"],
            link: "https://github.com/icrcode/ordenacao-v4"
        },
        {
            name: "User Management System",
            description: "A simple user management system built with PHP and MySQL, designed to allow user registration, login, profile photo uploads, and viewing of all registered users.",
            technologies: ["PHP", "MySQL"],
            link: "https://github.com/icrcode/crud-php"
        }
    ],
    experience: [
        {
            title: "Systems Development Instructor",
            company: "SENAI/SC - National Service for Industrial Learning",
            period: "December 2023 - Present",
            description: "Working as a systems development teacher, training new professionals for the technology market."
        },
        {
            title: "Trainee Instructor",
            company: "SENAI/SC - National Service for Industrial Learning",
            period: "August 2023 - December 2023",
            description: "Training program for instructors, focusing on teaching methodologies and pedagogical practices."
        },
        {
            title: "Production Controller I",
            company: "Whirlpool Corporation",
            period: "July 2022 - July 2023",
            description: "Working in the control and monitoring of production processes."
        },
        {
            title: "Technical Assistant in Plastic Lamination",
            company: "Whirlpool Corporation",
            period: "March 2021 - June 2022",
            description: "Apprenticeship program focusing on technical processes of plastic lamination."
        }
    ],
    education: [
        {
            degree: "Bachelor's Degree in Software Engineering",
            institution: "Católica SC",
            period: "In progress"
        },
        {
            degree: "Systems Development Technician",
            institution: "SENAI/SC",
            period: "Completed"
        },
        {
            course: "Algorithm and Programming Language in Arduino",
            institution: "ALPHA - UDESC Joinville"
        },
        {
            course: "DEVinHouse LAB 365 Teachers",
            institution: "SENAI/SC"
        },
        {
            course: "Mobile Robotics - EV3",
            institution: "UDESC Joinville"
        },
        {
            course: "Project Development in Programming Teaching",
            institution: "SENAI/SC"
        }
    ],
    contact: {
        email: "icarobotelhosocial@gmail.com",
        linkedin: "https://www.linkedin.com/in/icarocbotelho/",
        github: "https://github.com/icrcode"
    }
};
