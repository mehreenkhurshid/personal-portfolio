import { motion } from "motion/react";

export default function Hero() {
    return (
        <section
            id="home"
            className="bg-gray-200 text-black"
        >
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-10">

                {/* Left Content */}
                <motion.div
                    className="space-y-6 mt-12 text-center md:text-left"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.p
                        className="text-orange-500 font-semibold text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Hi, I'm Mehreen Khurshid
                    </motion.p>

                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Frontend UI <br />
                        <span className="text-orange-500">Developer</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg text-black max-w-lg"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        I design and develop responsive, user-friendly, and modern websites using
                        <span className="font-semibold"> React.js, Next.js</span> &{" "}
                        <span className="font-semibold">Tailwind CSS</span>.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        <motion.a
                            href="#projects"
                            className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-400 transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            View My Work
                        </motion.a>

                        <motion.a
                            href="#contact"
                            className="px-6 py-3 bg-white text-orange-500 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Let's Work Together
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                >
                    <motion.img
                        src="/images/illustration.jpg"
                        alt="Web development illustration"
                        className="rounded-xl shadow-lg border border-white/20 md:mt-16 sm:mt-10"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

            </div>
        </section>
    );
}
