import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-8 text-white">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4">
                At <strong>ArcadeHub.io</strong>, your privacy is critically important to us. This Privacy Policy explains how we collect, use, and share your personal information when you visit or use our website.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
            <ul className="list-disc ml-6">
                <li>
                    <strong>Personal Information:</strong> When you interact with our site (e.g., signing up, leaving a comment), we may collect your name, email address, and other details.
                </li>
                <li>
                    <strong>Usage Data:</strong> Information about your use of the website, such as your IP address, browser type, and browsing behavior.
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
            <p className="mb-4">
                The information we collect is used to:
            </p>
            <ul className="list-disc ml-6">
                <li>Provide and maintain our services</li>
                <li>Personalize your experience</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze and improve the functionality of our website</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Sharing Your Information</h2>
            <p className="mb-4">
                We do not sell your personal information to third parties. However, we may share your data with:
            </p>
            <ul className="list-disc ml-6">
                <li>Service providers who assist us in operating the website</li>
                <li>Legal authorities, if required by law</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Cookies</h2>
            <p className="mb-4">
                We use cookies to improve your browsing experience. You can disable cookies in your browser settings, but some parts of our website may not function correctly.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Your Rights</h2>
            <p className="mb-4">
                You have the right to access, modify, or delete your personal information. If you wish to exercise these rights, please contact us.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Policy</h2>
            <p className="mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
            <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:support@arcadehub.io" className="text-blue-400">support@arcadehub.io</a>
            </p>
        </div>
    );
};

export default PrivacyPolicy;
