'use client';

import { useState } from "react";
import { Separator } from "@radix-ui/react-separator";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = ["Kailash Mansarovar", "ADI Kailash", "All Destinations", "WHO WE ARE"];
    const topLinks = ["Blogs", "JOIN POCKETCLUB", "OFFERS", "FAQs", "Contact"];
    const icons = ["magnifiying-glass", "wishlist", "cart", "user"];

    return (
        <header className="w-full overflow-x-hidden relative">
            {/* Top Bar */}
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap justify-between items-center gap-2">
                {/* Left Section */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2 sm:gap-4">
                        <img src="/images/header/facebook.svg" alt="Facebook" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                        <img src="/images/header/logo_51.svg" alt="Logo" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                        <img src="/images/header/instagram.svg" alt="Instagram" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                    </div>

                    <Separator orientation="vertical" className="!h-4 w-px bg-[#BBB] hidden lg:block" />

                    <div className="flex items-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] uppercase font-normal font-[Figtree] text-[#333] hidden lg:flex">
                        <img src="/images/header/calendar.svg" alt="Calendar" className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-[12px] md:text-[12px] lg:text-[14px]">2025 Calendar</span>
                    </div>

                    <Separator orientation="vertical" className="!h-4 w-px bg-[#BBB]" />
                    <div className="flex items-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] uppercase font-normal font-[Figtree] text-[#333] underline">
                        <img src="/images/header/call.svg" alt="Call" className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>+91 78270-33601</span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center flex-wrap gap-2 sm:gap-4">
                    {topLinks.map(link => (
                        <a key={link} href="#" className={`text-[#333] font-[Figtree] text-[12px] md:text-[12px] lg:text-[14px] uppercase ${link !== "FAQs" ? "hidden lg:block" : ""}`}>{link}</a>
                    ))}

                    <Separator orientation="vertical" className="!h-4 w-px bg-[#BBB] hidden lg:block" />

                    <div className="hidden lg:flex items-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] uppercase font-[Figtree] text-[#333]">
                        <span>EN</span>
                        <img src="/images/header/Polygon.svg" alt="Dropdown" className="w-2 h-2 sm:w-3 sm:h-3" />
                    </div>
                </div>
            </div>

            <Separator orientation="horizontal" className="bg-[#BBB] my-1" />

            {/* Bottom Bar */}
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-2 py-2">
                <div className="flex items-center gap-4">
                    {/* Hamburger Menu for Mobile & Tablet */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <img src="/images/header/dehaze.svg" alt="Menu" className="w-6 h-6" />
                    </button>

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img src="/images/footer/logo_design_travel_pocket.svg" alt="Logo" className="w-[100px] sm:w-[119px] h-auto" />
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center gap-4">
                    {navLinks.map((item) => (
                        <div key={item} className="flex items-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] font-semibold uppercase text-[#333]">
                            <span>{item}</span>
                            <img src="/images/header/path_up.svg" alt="" className="w-2 h-4 sm:w-3 sm:h-5" />
                        </div>
                    ))}
                </div>

                {/* Icons */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {icons.map((icon) => (
                        <img key={icon} src={`/images/header/${icon}.svg`} alt={icon} className={`w-5 h-5 sm:w-6 sm:h-6 ${icon === "wishlist" ? "hidden sm:block" : ""}`} />
                    ))}
                </div>
            </div>

            {/* Mobile/Tablet Sidebar Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsMenuOpen(false)}>
                        <img src="/images/header/close.svg" alt="Close" className="w-6 h-6" />
                    </button>
                </div>

                {/* Links */}
                <nav className="flex flex-col gap-4 px-6 mt-4">
                    {topLinks.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-[#333] font-[Figtree] text-[12px] md:text-[12px] lg:text-[14px] uppercase"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link}
                        </a>
                    ))}

                    <Separator orientation="horizontal" className="my-2 bg-[#BBB] border border-[#BBB]" />

                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-[#333] font-[Figtree] text-[12px] md:text-[12px] lg:text-[14px] uppercase"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-opacity-30 z-40"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </header>
    );
}
