import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Let's <span className="text-orange-500">Work Together</span>
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Have a project in mind or need help with your website?
                        Feel free to get in touch with me.
                    </p>
                </div>

                {/* Contact Content */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* Left Side */}
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Get In Touch
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            I'm always open to discussing new projects, creative
                            ideas, or opportunities to build modern and responsive
                            web interfaces.
                        </p>

                        {/* Email */}
                        <div className="flex items-center gap-4 mb-5">
                            <div className="bg-orange-100 p-3 rounded-lg">
                                <Mail className="text-orange-500" size={24} />
                            </div>

                            <div>
                                <p className="font-semibold text-gray-800">
                                    Email
                                </p>
                                <a
                                    href="mailto:your@email.com"
                                    className="text-gray-600 hover:text-orange-500 transition"
                                >
                                    mehreenkhurshid8@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            <a
                                href="#"
                                className="p-3 bg-gray-100 rounded-lg hover:bg-orange-500 hover:text-white transition"
                                aria-label="GitHub"
                            >
                                <Github size={22} />
                            </a>

                            <a
                                href="#"
                                className="p-3 bg-gray-100 rounded-lg hover:bg-orange-500 hover:text-white transition"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                            Send a Message
                        </h3>

                        <form className="space-y-5">

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Message
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-400 transition"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}