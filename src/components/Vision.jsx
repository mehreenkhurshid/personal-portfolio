import { Monitor, Code, Palette, Gauge } from "lucide-react";

const services = [
    {
        title: "Responsive Design",
        description: "I create modern, mobile-friendly websites that look great on all devices.",
        icon: <Monitor className="w-12 h-12 mx-auto text-blue-600" />,
    },
    {
        title: "UI Development",
        description: "Building fast and interactive UIs with React, Next.js, and Tailwind CSS.",
        icon: <Code className="w-12 h-12 mx-auto text-green-600" />,
    },
    {
        title: "UI/UX Focus",
        description: "Designing clean and user-friendly interfaces for better user experience.",
        icon: <Palette className="w-12 h-12 mx-auto text-pink-600" />,
    },
    {
        title: "Performance",
        description: "Building lightweight and optimized interfaces for a smooth and fast user experience.",
        icon: <Gauge className="w-12 h-12 mx-auto text-yellow-600" />,
    },
];

export default function Vision() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12"> What <span className="text-orange-500"> I Do  </span> </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="bg-white shadow-md rounded-lg px-4 py-8 text-center hover:shadow-xl transition"
                        >
                            {service.icon}
                            <h3 className="text-xl font-semibold mb-2 mt-4">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
