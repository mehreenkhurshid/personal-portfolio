export default function Projects() {
    const projects = [
        {
            title: "FoodEase Website",
            desc: "A modern and responsive food ordering website with a clean interface for browsing food and categories.",
            img: "/images/foodease.png",
            link: "#"
        },
        {
            title: "FlowTask Dashboard",
            desc: "A modern and responsive task management dashboard for organizing tasks and tracking project progress.",
            img: "/images/flowtask.png",
            link: "#"
        },
        {
            title: "Mini Ecommerce",
            desc: "A modern and responsive e-commerce interface with product browsing, product details, and a clean shopping experience.",
            img: "/images/website.png",
            link: "#"
        },
        {
            title: "Personal Portfolio",
            desc: "A modern and responsive portfolio website showcasing my skills, projects, and UI development expertise.",
            img: "/images/Portfolio.png",
            link: "#"
        }
    ];

    return (
        <section id="projects" className="bg-gray-100 py-16">
            <div className="max-w-8xl mx-auto px-8">
                <h2 className="text-3xl font-bold text-center mb-12">
                    My <span className="text-orange-500">Projects</span>
                </h2>

                <div className="grid md:grid-cols-4 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4"
                        >
                            <div className="h-52 w-full bg-gray-100 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-contain rounded-md"
                            />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4 flex-grow">{project.desc}</p>
                            <a
                                href={project.link}
                                className="inline-block px-4 py-2 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-400 transition"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
