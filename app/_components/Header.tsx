"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Activity, Menu, X, Globe } from "lucide-react";
import { Button } from "./Button";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 120) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "heyPatient Visuals", href: "/heyPatient-visuals" },
        { label: "Offering", href: "/offering" },
        { label: "About Us", href: "/#about" },
        { label: "News", href: "/#news" },
        { label: "Webinar", href: "/#webinar" },
        { label: "Support", href: "/#support" },
        { label: "Invest", href: "/#invest" },
        { label: "Shop", href: "/#shop" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled ? "shadow-md py-3" : "py-5"
                }`}
        >
            <div className="site-container">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/images/home/logo.png" alt="Hey Patient" className="h-12 object-contain" />

                        </Link>

                        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`font-bold tracking-wide transition-colors ${link.label === 'Home' ? 'text-[#008A8A]' : 'text-[#1E293B] hover:text-[#008A8A]'}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="hidden lg:flex items-center gap-3">
                            <div className="flex items-center gap-1.5 font-bold text-[#1E293B] bg-[#F1F5F9] hover:bg-gray-200 transition-colors rounded-md px-3 py-1.5 cursor-pointer">
                                <span className="text-[14px] leading-none">🇬🇧</span>
                                <span>EN</span>
                                <span className="text-[8px] ml-0.5 mt-0.5">▼</span>
                            </div>
                            <Button variant="primary" className="px-5 py-1.5 rounded-md font-semibold whitespace-nowrap h-auto">
                                Contact Us
                            </Button>
                        </div>

                        <button
                            className="lg:hidden text-gray-700"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="block text-sm font-medium text-gray-700 hover:text-[#008A8A]"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button variant="primary" className="w-full">
                        Contact Us
                    </Button>
                </div>
            )}
        </header>
    );
};

