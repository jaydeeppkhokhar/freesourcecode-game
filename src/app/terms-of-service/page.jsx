export const metadata = {
    title: 'Terms of Service | ArcadeHub.io',
    description: 'Review the terms of service for ArcadeHub.io. Understand your rights and responsibilities while playing free online games on our platform.',
};

export default function TermsOfService() {
    return (
        <div className="bg-black text-gray-300 py-12 px-6 lg:px-20">
            <div className="max-w-5xl mx-auto bg-gray-800 shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold text-white mb-6">Terms of Service</h1>
                <p className="mb-4 text-gray-400">
                    Welcome to <strong>ArcadeHub.io</strong>. By using our platform, you agree to these Terms of Service. Please read them carefully.
                </p>

                {/* Section 1 */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">1. Acceptance of Terms</h2>
                    <p className="text-gray-400">
                        By accessing and using ArcadeHub.io, you agree to abide by these Terms of Service and all applicable laws.
                    </p>
                </section>

                {/* Section 2 */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">2. Usage of the Platform</h2>
                    <p className="text-gray-400">
                        ArcadeHub.io offers free online games. You agree to use the platform only for lawful purposes and not to disrupt or misuse the services provided.
                    </p>
                </section>

                {/* Section 3 */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">3. Account Registration</h2>
                    <p className="text-gray-400">
                        Currently, ArcadeHub.io does not require users to create an account or log in. As such, no personal data is collected unless voluntarily provided through forms.
                    </p>
                </section>

                {/* Section 4 */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">4. Limitation of Liability</h2>
                    <p className="text-gray-400">
                        ArcadeHub.io is not liable for any damages arising from the use of the site or games. We do not guarantee uninterrupted service or error-free content.
                    </p>
                </section>

                {/* Section 5 */}
                <section>
                    <h2 className="text-2xl font-semibold text-white mb-2">5. Changes to Terms</h2>
                    <p className="text-gray-400">
                        We may update these Terms of Service from time to time. Any changes will be posted here, and you are encouraged to review them periodically.
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
