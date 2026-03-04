"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="relative pt-20">
            {/* Angled Divider Effect */}
            <div className="site-container mb-[-80px] relative z-10 pointer-events-none">
                <div className="w-full h-32 bg-white" style={{ clipPath: 'polygon(0 0, 100% 80%, 100% 100%, 0% 100%)' }}></div>
            </div>

            <div className="site-container">
                <div className="bg-[#008A8A] text-white rounded-t-[1.5rem] relative overflow-hidden pt-32 pb-8">

                    {/* Background Image and Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/home/bg-overlay.jpg"
                            alt="Background"
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-[#008A8A] mix-blend-multiply opacity-90"></div>

                        {/* Pulse Line */}
                        <svg className="absolute bottom-0 left-0 w-full h-24" style={{ transform: 'translateY(10px)' }} preserveAspectRatio="none">
                            <path d="M0,50 L50,50 L60,30 L70,70 L80,50 L2000,50"
                                stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.2" />
                        </svg>

                        {/* Plus Signs */}
                        <div className="absolute top-0 right-0 w-1/3 h-full flex flex-wrap content-center justify-center gap-12 rotate-12 pointer-events-none">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="text-4xl font-light opacity-30">+</div>
                            ))}
                        </div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-10 lg:px-16 relative z-10">
                        {/* Branding */}
                        <div className="mb-16">
                            <Link href="/">
                                <div className="bg-white inline-block p-4 rounded-xl shadow-lg">
                                    <img src="/images/home/logo.png" alt="heyPatient" className="h-10 object-contain" />
                                </div>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 border-b border-white/10 pb-16">
                            {/* Mission */}
                            <div>
                                <p className="text-[14px] leading-relaxed opacity-90">
                                    heyPatient helps hospitals and clinics reduce administrative workload while enhancing patient engagement and satisfaction.
                                </p>
                            </div>

                            {/* Contact */}
                            <div>
                                <h4 className="font-bold text-[18px] mb-8">Contact Us</h4>
                                <ul className="space-y-4 text-[14px]">
                                    <li className="flex gap-3 opacity-90">
                                        <span className="font-bold shrink-0">📍</span> Technoparkstrasse 2, 8406 Winterthur
                                    </li>
                                    <li className="flex gap-3 opacity-90">
                                        <span className="font-bold shrink-0">✉️</span> team@heypatient.com
                                    </li>
                                    <li className="flex gap-3 opacity-90">
                                        <span className="font-bold shrink-0">📞</span> +41 84 584 02 01
                                    </li>
                                </ul>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="font-bold text-[18px] mb-8">Quick Links</h4>
                                <ul className="space-y-4 text-[14px]">
                                    <li><Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">Home</Link></li>
                                    <li><Link href="/offering" className="opacity-90 hover:opacity-100 transition-opacity">Offering</Link></li>
                                    <li><Link href="/#about" className="opacity-90 hover:opacity-100 transition-opacity">About Us</Link></li>
                                    <li><Link href="/#contact" className="opacity-90 hover:opacity-100 transition-opacity">Contact Us</Link></li>
                                </ul>
                            </div>

                            {/* Subscribe */}
                            <div>
                                <h4 className="font-bold text-[18px] mb-8">Subscribe</h4>
                                <div className="space-y-3 mb-6">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-white text-[#1E293B] px-4 py-3 rounded text-[14px] outline-none"
                                    />
                                    <button className="w-full bg-white text-[#008A8A] font-bold py-3 rounded text-[14px] hover:bg-gray-100 transition-colors">
                                        Subscribe
                                    </button>
                                </div>
                                <div>
                                    <h5 className="text-[14px] font-bold mb-4">Follow us</h5>
                                    <div className="flex gap-4">
                                        <Link href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-all flex items-center justify-center">
                                            <Facebook className="w-4 h-4" />
                                        </Link>
                                        <Link href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-all flex items-center justify-center">
                                            <Linkedin className="w-4 h-4" />
                                        </Link>
                                        <Link href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-all flex items-center justify-center">
                                            <Instagram className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] opacity-80 font-medium">
                            <p>© 2024. All Rights Reserved.</p>
                            <div className="flex gap-8">
                                <Link href="#" className="hover:underline">Imprint</Link>
                                <Link href="#" className="hover:underline">Privacy policy</Link>
                                <Link href="#" className="hover:underline">Terms of Use</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
