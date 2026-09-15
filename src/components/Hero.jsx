export default function Hero() {
    return (
        <section
            id="home"
            className="bg-gray-200 text-black"
        >
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-10">
                <div className="space-y-6 mt-12 text-center md:text-left">
                    <p className="text-orange-500 font-semibold text-lg"> Hi, I'm Mehreen Khurshid  </p>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight"> Frontend UI <br /> <span className="text-orange-500"> Developer </span> </h1>
                    <p className="text-lg text-black max-w-lg">
                        I design and develop responsive, user-friendly, and modern websites using
                        <span className="font-semibold"> React.js, Next.js</span> & <span className="font-semibold">Tailwind CSS</span>.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"> <a href="#projects" className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-400 transition" > View My Work </a> <a href="#contact" className="px-6 py-3 bg-white text-orange-500 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition" > Let's Work Together </a> </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src="/images/illustration.jpg"
                        alt="Web development illustration"
                        className="rounded-xl shadow-lg border border-white/20 md:mt-16 sm:mt-10"
                    />
                </div>
            </div>
        </section>
    );
}
