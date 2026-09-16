import { useForm, ValidationError } from "@formspree/react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
    const [state, handleSubmit] = useForm("mkjgwkpa");

    if (state.succeeded) {
        return (
            <section
                id="contact"
                className="bg-gray-100 py-16"
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-10 text-center">
                        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-3xl">✓</span>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-3">
                            Message Sent!
                        </h2>

                        <p className="text-gray-600">
                            Thank you for reaching out. I'll get back to you
                            as soon as possible.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section
            id="contact"
            className="bg-gray-100 py-16"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Let's{" "}
                        <span className="text-orange-500">
                            Work Together
                        </span>
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
                                <Mail
                                    className="text-orange-500"
                                    size={24}
                                />
                            </div>

                            <div>
                                <p className="font-semibold text-gray-800">
                                    Email
                                </p>

                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mehreenkhurshid8@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-orange-500 transition"
                                >
                                    mehreenkhurshid8@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">

                            {/* GitHub */}
                            <a
                                href="https://github.com/mehreenkhurshid"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-100 rounded-lg hover:bg-orange-500 hover:text-white transition"
                                aria-label="GitHub"
                            >
                                <Github size={22} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/mehreen-khurshid-9023562b6"
                                target="_blank"
                                rel="noopener noreferrer"
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

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >

                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />

                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />

                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                                ></textarea>

                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* General Error */}
                            <ValidationError
                                errors={state.errors}
                                className="text-red-500 text-sm"
                            />

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {state.submitting
                                    ? "Sending..."
                                    : "Send Message"}
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}