"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi"; // Search icon
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitch } from "react-icons/fa"; // Social media icons

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-16 w-full shadow-md flex justify-between px-6 items-center z-30 top-0 sticky transition-all duration-300 box-shadow-game-1 bg-black/60 backdrop-blur-md ${isScrolled ? "bg-black" : "bg-transparent"
        }`}
      style={{ overflow: "hidden" }}
    >
      {/* Logo Section */}
      <div className="flex items-center h-full">
        <Link href={process.env.NEXT_PUBLIC_BASE_URL} passHref>
          <img
            className="h-full object-contain w-40"
            src="/logo.png"
            alt="ArcadeHub.io"
            width={160}
            height={40}
            loading="lazy"
          />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md hidden md:block">
        <label htmlFor="search-bar" className="sr-only">
          Search for games
        </label>
        <input
          id="search-bar"
          type="text"
          placeholder="Search for games..."
          className="w-full pl-6 pr-4 py-2 rounded-full bg-white/10 text-white placeholder-white/70 backdrop-blur-lg backdrop-saturate-150 border border-transparent focus:border-white/30 focus:bg-white/15 focus:outline-none transition-all duration-300"
        />
        <FiSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/70" />
      </div>

      {/* Social Links */}
      <div className="flex gap-4 items-center">
        <Link
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-white/70 hover:text-white transition p-2 rounded-full"
          style={{ backgroundColor: "#3b5998" }} // Facebook brand color
        >
          <FaFacebookF />
        </Link>
        <Link
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white/70 hover:text-white transition p-2 rounded-full"
          style={{ backgroundColor: "#E1306C" }} // Instagram brand color
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://www.x.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-white/70 hover:text-white transition p-2 rounded-full"
          style={{ backgroundColor: "black" }} // X/Twitter brand color
        >
          <FaXTwitter />
        </Link>
        <Link
          href="https://www.twitch.tv"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitch"
          className="text-white/70 hover:text-white transition p-2 rounded-full"
          style={{ backgroundColor: "#9146FF" }} // Twitch brand color
        >
          <FaTwitch />
        </Link>
      </div>
    </header>
  );
};

export default Header;
