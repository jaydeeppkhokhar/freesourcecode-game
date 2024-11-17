import React from 'react';

const TermsOfService = () => {
    return (
        <div className="container mx-auto px-4 py-8 text-white">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="mb-4">
                Welcome to <strong>ArcadeHub.io</strong>. By using our website, you agree to comply with the following terms and conditions. Please read them carefully.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
                By accessing and using our website, you agree to these Terms of Service. If you do not agree, you must discontinue use immediately.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">2. Use of the Website</h2>
            <ul className="list-disc ml-6">
                <li>You must be at least 13 years old to use our services.</li>
                <li>You agree not to engage in any activity that disrupts or interferes with the website's functionality.</li>
                <li>All content on the website is for personal use only and may not be copied, reproduced, or distributed without permission.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">3. Intellectual Property</h2>
            <p className="mb-4">
                All content, including games, graphics, and text, is owned by ArcadeHub.io and is protected by intellectual property laws. Unauthorized use is strictly prohibited.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">4. Limitation of Liability</h2>
            <p className="mb-4">
                ArcadeHub.io is not liable for any damages resulting from the use or inability to use the website, including but not limited to loss of data or profits.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">5. User Content</h2>
            <p className="mb-4">
                By submitting any content (e.g., comments or suggestions), you grant us a non-exclusive, royalty-free license to use, reproduce, and distribute your content.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">6. Changes to Terms</h2>
            <p className="mb-4">
                We reserve the right to modify these Terms of Service at any time. Continued use of the website after changes indicates acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">7. Governing Law</h2>
            <p className="mb-4">
                These terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved in the courts of [Your Jurisdiction].
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
            <p>
                For any questions about these Terms of Service, please contact us at:
                <br />
                <a href="mailto:support@arcadehub.io" className="text-blue-400">support@arcadehub.io</a>
            </p>
        </div>
    );
};

export default TermsOfService;
