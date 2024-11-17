import React from 'react';
import Link from 'next/link'; // Use 'react-router-dom' if not using Next.js
import { FaFacebookF, FaInstagram, FaTwitch, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Information */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            <img
              className="h-full object-contain w-40"
              src="/logo.png"
              alt="ArcadeHub.io"
            />
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            ArcadeHub.io is your free gaming universe. Play a variety of games online without fees
            and experience unlimited fun. Join our community today!
          </p>
          <p className="text-gray-400 text-sm mt-4">
            © 2024 ArcadeHub.io. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/games" className="text-gray-400 hover:text-white transition">
                Games
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Social Media Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Legal & Social</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition">
                Terms of Service
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-4 mt-6">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="X (formerly Twitter)"
            >
              <FaXTwitter size={20} />
            </Link>

            <Link
              href="https://www.twitch.tv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Twitch"
            >
              <FaTwitch size={20} />
            </Link>
            <Link
              href="https://www.discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Discord"
            >
              <FaDiscord size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>
          Designed with ❤️ by ArcadeHub.io. Boosting online gaming experiences across the globe.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
