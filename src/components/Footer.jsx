export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h3 className="text-xl font-bold text-white mb-2">
                    MyPortfolio
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                    Frontend UI Developer | React.js | Next.js | Tailwind CSS
                </p>

                <div className="border-t border-gray-700 pt-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}