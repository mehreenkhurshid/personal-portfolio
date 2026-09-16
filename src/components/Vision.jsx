import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { Monitor, Code, Palette, Gauge } from "lucide-react";

const services = [
    {
        title: "Responsive Design",
        description:
            "I create modern, mobile-friendly websites that look great on all devices.",
        icon: <Monitor className="w-12 h-12 mx-auto text-blue-600" />,
    },
    {
        title: "UI Development",
        description:
            "Building fast and interactive UIs with React, Next.js, and Tailwind CSS.",
        icon: <Code className="w-12 h-12 mx-auto text-green-600" />,
    },
    {
        title: "UI/UX Focus",
        description:
            "Designing clean and user-friendly interfaces for better user experience.",
        icon: <Palette className="w-12 h-12 mx-auto text-pink-600" />,
    },
    {
        title: "Performance",
        description:
            "Building lightweight and optimized interfaces for a smooth and fast user experience.",
        icon: <Gauge className="w-12 h-12 mx-auto text-yellow-600" />,
    },
];

export default function Vision() {
    const sectionRef = useRef(null);

    const isInView = useInView(sectionRef, {
        amount: 0.5,
        once: false,
    });

    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.set("hidden");
        }
    }, [isInView, controls]);

    const headingVariants = {
        hidden: {
            opacity: 0,
            y: 20,
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

    const cardsContainerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.45,
                ease: "easeOut",
            },
        },
    };

    return (
        <section
            ref={sectionRef}
            className="bg-gray-50 py-16"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <motion.h2
                    variants={headingVariants}
                    initial="hidden"
                    animate={controls}
                    className="text-3xl font-bold text-center mb-12"
                >
                    What{" "}
                    <span className="text-orange-500">
                        I Do
                    </span>
                </motion.h2>

                {/* Cards */}
                <motion.div
                    variants={cardsContainerVariants}
                    initial="hidden"
                    animate={controls}
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={cardVariants}
                            whileHover={{
                                y: -3,
                                scale: 1.01,
                            }}
                            transition={{
                                duration: 0.2,
                                ease: "easeOut",
                            }}
                            className="bg-white shadow-md rounded-lg px-4 py-8 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                        >
                            {service.icon}

                            <h3 className="text-xl font-semibold mb-2 mt-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}