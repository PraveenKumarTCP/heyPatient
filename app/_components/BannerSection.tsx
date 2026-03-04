import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const BannerSection = () => {
    return (
        <section className="py-12">
            <div className="site-container">
                <div className="bg-[#08949E] text-white rounded-[2rem] min-h-[450px] relative overflow-hidden flex items-center">

                    {/* Background Image and Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/home/bg-overlay.jpg"
                            alt="Background"
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-[#08949E] mix-blend-multiply opacity-90"></div>

                        {/* Plus Signs (Right) */}
                        <div className="absolute top-0 right-0 w-1/3 h-full flex flex-wrap content-center justify-center gap-12 rotate-12">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="text-4xl font-light opacity-30">+</div>
                            ))}
                        </div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-10 lg:px-16 py-12 relative z-10 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            {/* Left Content */}
                            <div className="lg:col-span-7" data-aos="fade-up">
                                <h4 className="text-white! text-[15px] font-medium mb-4 opacity-90">Complete Care Under One System</h4>
                                <h3 className="text-white! text-[22px] md:text-[28px] lg:text-[32px] font-bold mb-10 leading-[1.3] tracking-normal">
                                    heyPatient brings every step together in one place and creates a relaxed experience for patients – in the app, on the web and at the terminal. Modular, flexible and available in 21 languages, ready for any hospital or health region.
                                </h3>

                                <div className="flex justify-start">
                                    <button className="bg-white text-[#08949E] rounded-full px-8 py-3 flex items-center gap-2 text-[14px] font-bold hover:bg-gray-100 transition-all shadow-lg">
                                        <span>Make Appointment</span>
                                        <ArrowUpRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Right Content: Doctor Image */}
                            <div className="lg:col-span-5 flex justify-center lg:justify-end self-end" data-aos="fade-left">
                                <div className="relative w-full max-w-[380px] h-full flex items-end">
                                    <img
                                        src="/images/home/doctor.png"
                                        alt="Doctor"
                                        className="w-full h-auto object-contain z-10"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const AppDownloadSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="site-container">
                <div className="container mx-auto px-4 sm:px-10">
                    <h3 className="text-[28px] md:text-[32px] font-bold text-center text-[#1E293B] mb-16 leading-tight">
                        For smooth workflows. For real relief. For a<br /> new digital experience.
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                        <div className="space-y-8 pt-4">
                            <p className="text-[17px] text-[#1E293B] leading-relaxed">
                                Order heyPatient as <a href="#" className="text-[#08949E] underline font-bold">preferred SaaS solution</a> right now in <a href="#" className="text-[#1E293B] underline font-bold">Microsoft App Store</a>
                            </p>

                            <div className="flex items-center gap-4 py-2 opacity-80">
                                <img src="/images/home/microsoft.png" alt="Microsoft" className="h-6 object-contain" />
                                <div className="h-6 w-[1.5px] bg-gray-300"></div>
                                <span className="text-[15px] font-medium text-gray-500">Marketplace</span>
                            </div>

                            <p className="text-[17px] text-[#1E293B] leading-relaxed">
                                Visit heyPatient in the <a href="#" className="text-[#1E293B] underline font-bold">Siemens Xcelerator-Business Marketplace.</a>
                            </p>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-8 pt-4">
                            <div className="flex flex-wrap justify-center md:justify-end gap-4">
                                <img src="/images/home/h-appstore.png" alt="App Store" className=" object-contain cursor-pointer hover:opacity-80 transition-opacity" />
                                <img src="/images/home/h-google-play.png" alt="Google Play" className=" object-contain cursor-pointer hover:opacity-80 transition-opacity" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
