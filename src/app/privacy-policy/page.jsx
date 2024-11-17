export const metadata = {
    title: 'Privacy Policy | ArcadeHub.io',
    description: 'Read the privacy policy for ArcadeHub.io. Learn how we handle user data and protect your privacy while you enjoy free online games on our platform.',
};

export default function PrivacyPolicy() {
    return (
        <div className="bg-black text-gray-300 py-12 px-6 lg:px-20">
            <div className="max-w-5xl mx-auto bg-gray-800 shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
                <p className="mb-4 text-gray-400">
                    At <strong>ArcadeHub.io</strong>, we are committed to protecting your privacy. As we do not require users to log in, we do not collect personal information for user identification. This Privacy Policy explains how we collect, use, and protect your data when you visit and interact with our website.
                </p>

                {/* Section 1 */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">1. Information We Collect</h2>
                    <p className="text-gray-400">
                        When you visit our website, we may collect the following types of information:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                        <li>Non-personal information such as browser type, device, and IP address.</li>
                        <li>Usage data like games played, pages visited, and interactions with the website.</li>
                        <li>Cookies and tracking technologies to enhance your experience and analyze usage.</li>
                    </ul>
                </section>

                {/* Section 2 */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">2. How We Use Your Information</h2>
                    <p className="text-gray-400">
                        We use the information collected for the following purposes:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                        <li>To provide you with a seamless gaming experience.</li>
                        <li>To analyze website traffic and improve our content and features.</li>
                        <li>To use cookies for functionality, preferences, and analytics purposes.</li>
                    </ul>
                </section>

                {/* Section 3 */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">3. Cookies and Tracking Technologies</h2>
                    <p className="text-gray-400">
                        We use cookies to enhance your user experience. Cookies allow us to remember your preferences, track how you interact with the website, and provide analytics data.
                    </p>
                </section>

                {/* Section 4 */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">4. Third-Party Services</h2>
                    <p className="text-gray-400">
                        We may use third-party services like Google Analytics to collect and analyze non-personal data such as site traffic and user behavior.
                    </p>
                </section>

                {/* Section 5 */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">5. Your Rights</h2>
                    <p className="text-gray-400">
                        Since we do not collect personal information or require user accounts, there is no personal data to manage. If you wish to stop using cookies, you can modify your browser settings.
                    </p>
                </section>

                {/* Section 6 */}
                <section>
                    <h2 className="text-2xl font-semibold text-white mb-2">6. Changes to This Privacy Policy</h2>
                    <p className="text-gray-400">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly.
                    </p>
                </section>

                {/* Contact Information */}
                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-white mb-2">7. Contact Us</h2>
                    <p className="text-gray-400">
                        If you have any questions about this Privacy Policy, feel free to reach out to us at:
                    </p>
                    <p className="text-gray-400 mt-2">
                        Email: <a href="mailto:support@arcadehub.io" className="text-blue-400 hover:underline">support@arcadehub.io</a>
                    </p>
                </section>

                {/* Effective Date */}
                <p className="text-sm text-gray-500 mt-8">
                    Effective Date: November 17, 2024
                </p>
            </div>
        </div>
    );
}
