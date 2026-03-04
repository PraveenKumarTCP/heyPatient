"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/pagination';

export const Testimonial = () => {
    const testimonials = [
        {
            name: "Dr. Daniel Heller",
            role: "President of the Board",
            hospital: "Kantonsspital Baden AG",
            image: "/images/home/testimonials-1.png",
            content: "As a leading tertiary care hospital in Switzerland, we use the patient portal from heyPatient. In our new building, Agnes, we rely on their smart patient call system, which is redefining efficiency and the patient experience. This sets new standards in patient guidance and support.\n\nThe experts at heyPatient excel in high-level process automation and develop practical solutions in co-creation with hospital professionals. They are visionary, always open to feedback, and willing to go the extra mile. heyPatient is a reliable partner, and we look forward to continued collaboration and future innovations."
        },
        {
            name: "Prof. Sarah Jenkins",
            role: "Chief Medical Officer",
            hospital: "Zurich Health Center",
            image: "/images/home/medical-dr.png",
            content: "Implementation of the heyPatient portal has significantly reduced our administrative overhead. The automated registration process is seamless, allowing our clinical staff to focus more on direct patient care. Their commitment to data security and user-friendly design makes them a standout partner in digital health."
        },
        {
            name: "Markus Weber",
            role: "Head of Digital Transformation",
            hospital: "Swiss Orthopedic Clinic",
            image: "/images/home/doctor.png",
            content: "We were looking for a modular solution that could scale with our growing patient base. heyPatient delivered a platform that is not only robust but also extremely flexible. The 21-language support is crucial for our international patient demographic, ensuring every visitor feels understood and well-guided."
        },
        {
            name: "Dr. Elena Rossi",
            role: "Director of Patient Experience",
            hospital: "Geneva Medical Group",
            image: "/images/home/medical-dr.png",
            content: "The feedback from our patients has been overwhelmingly positive since we launched heyPatient. The intuitive interface and the convenience of managing appointments from their mobile devices have greatly improved our patient satisfaction scores. It truly is a 360-degree solution for modern healthcare needs."
        }
    ];

    return (
        <section className="py-12">
            <div className="site-container">
                <div className="bg-[#08949E] text-white rounded-[2rem] relative overflow-hidden min-h-[550px] flex items-center py-16">

                    {/* Background Motifs (Hexagons and Plus signs) */}
                    <div className="absolute inset-0 z-0">
                        {/* Hexagon Pattern Placeholder / Overlay */}
                        <div className="absolute inset-0 opacity-10 bg-[url('/images/home/bg-overlay.jpg')] bg-repeat mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-[#08949E] mix-blend-multiply opacity-80"></div>

                        {/* Plus Signs (Right side motif from screenshot) */}
                        <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-1/2 h-full flex flex-wrap content-center justify-center gap-16 rotate-12 pointer-events-none">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="text-8xl font-thin opacity-10 select-none">+</div>
                            ))}
                        </div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-10 lg:px-20 relative z-10 w-full">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            pagination={{
                                clickable: true,
                                el: '.custom-swiper-pagination'
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
                            }}
                            className="w-full cursor-pointer testimonial-swiper pb-20"
                        >
                            {testimonials.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                                        {/* Left Side: Text Area */}
                                        <div className="lg:col-span-7" data-aos="fade-right">
                                            <div className="mb-8">
                                                <h4 className="text-white! text-[16px] font-medium mb-3 opacity-90">Testimonials</h4>
                                                <h2 className="text-[24px] md:text-[32px] lg:text-[36px] font-bold text-white! leading-tight">
                                                    Why Our Clients Continue to<br className="hidden md:block" /> Love Working With Us
                                                </h2>
                                            </div>

                                            <div className="bg-white text-[#334155] p-10 lg:p-12 rounded-r-[1.5rem] lg:rounded-r-none rounded-l-[1.5rem] shadow-none relative lg:-mr-12 z-20">
                                                <div className="whitespace-pre-line text-[14px] md:text-[15px] leading-[1.7] mb-10 text-gray-600 font-medium">
                                                    {item.content}
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="font-bold text-[#08949E] text-[15px]">
                                                        {item.name}, {item.role}
                                                    </p>
                                                    <p className="text-[#08949E] text-[15px] font-bold">
                                                        {item.hospital}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Side: Portrait Image Area */}
                                        <div className="lg:col-span-5 flex justify-center lg:justify-end" data-aos="fade-left">
                                            <div className="relative w-full max-w-[420px] h-[520px] rounded-[1.5rem] overflow-hidden shadow-xl bg-[#067a82]">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                            {/* Pagination dots directly inside the swiper */}
                            <div className="custom-swiper-pagination flex justify-center gap-2.5 absolute bottom-0 left-0 right-0 z-30 pointer-events-auto"></div>
                        </Swiper>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .custom-swiper-pagination .swiper-pagination-bullet {
                    background: white !important;
                    opacity: 0.35 !important;
                    width: 7px !important;
                    height: 7px !important;
                    margin: 0 !important;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    border-radius: 50% !important;
                    cursor: pointer !important;
                    display: inline-block !important;
                }
                .custom-swiper-pagination .swiper-pagination-bullet-active {
                    opacity: 1 !important;
                    width: 24px !important;
                    border-radius: 6px !important;
                }
            `}</style>
        </section>
    );
};
