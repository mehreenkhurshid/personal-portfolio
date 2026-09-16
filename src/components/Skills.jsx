import { motion } from "motion/react";

export default function Skills() {
    const skills = [
        {
            name: "HTML5",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            name: "CSS3",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "Next.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
            name: "TailwindCSS",
            icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        },
        {
            name: "Bootstrap",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
    ];

    const containerVariants = {
        hidden: {
            opacity: 0,
        },

        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
                staggerChildren: 0.12,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },

        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="skills" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: false,
                        amount: 0.8,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
                >
                    My <span className="text-orange-500">Skills</span>
                </motion.h2>

                {/* Skills */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: false,
                        amount: 0.8,
                    }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-items-center"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.1,
                                y: -5,
                            }}
                            className="flex flex-col items-center space-y-2 cursor-pointer"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-14 h-14"
                            />

                            <p className="text-gray-700 font-medium">
                                {skill.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}