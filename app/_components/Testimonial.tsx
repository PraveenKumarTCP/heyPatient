"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

export const Testimonial = () => {
    const testimonials = [
        {
            name: "Dr. Daniel Heller",
            role: "President of the Board",
            hospital: "Kantonsspital Baden AG",
            image: "/images/home/testimonial-portrait.png",
            content: "As a leading tertiary care hospital in Switzerland, we use the patient portal from heyPatient. In our new building, Agnes, we rely on their smart patient call system, which is redefining efficiency and the patient experience. This sets new standards in patient guidance and support.\n\nThe experts at heyPatient excel in high-level process automation and develop practical solutions in co-creation with hospital professionals. They are visionary, always open to feedback, and willing to go the extra mile. heyPatient is a reliable partner, and we look forward to continued collaboration and future innovations."
        }
    ];

    return (
        <section className="py-12">
            <div className="site-container">
                <div className="bg-[#008A8A] text-white rounded-[2rem] relative overflow-hidden min-h-[550px] flex items-center py-16">

                    {/* Background Image and Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/home/bg-overlay.jpg"
                            alt="Background"
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-[#008A8A] mix-blend-multiply opacity-90"></div>

                        {/* Plus Signs (Right) */}
                        <div className="absolute top-0 right-0 w-1/3 h-full flex flex-wrap content-center justify-center gap-12 rotate-12">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="text-4xl font-light opacity-30">+</div>
                            ))}
                        </div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-10 lg:px-16 relative z-10 w-full">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 6000 }}
                            className="testimonial-swiper"
                        >
                            {testimonials.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                                        <div className="lg:col-span-7 pr-0 lg:pr-8" data-aos="fade-up">
                                            <h4 className="text-white text-[15px] font-medium mb-2 opacity-90">Testimonials</h4>
                                            <h2 className="text-[20px] md:text-[28px] lg:text-[32px] font-bold mb-10 leading-tight">
                                                Why Our Clients Continue to<br className="hidden md:block" /> Love Working With Us
                                            </h2>

                                            <div className="bg-white text-[#1E293B] p-8 md:p-12 rounded-[1.5rem] shadow-xl relative mt-4">
                                                <div className="whitespace-pre-line text-[14px] md:text-[15px] leading-[1.8] mb-8 text-gray-700">
                                                    {item.content}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-[#008A8A] text-[15px]">
                                                        {item.name}, {item.role}
                                                    </p>
                                                    <p className="text-[#008A8A] text-[15px] font-bold">
                                                        {item.hospital}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-5 flex justify-center lg:justify-end" data-aos="fade-left">
                                            <div className="relative w-full max-w-[380px] h-[480px] rounded-[1.5rem] overflow-hidden border-8 border-white/10 shadow-2xl bg-[#005454]">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover grayscale-[0.1]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .testimonial-swiper .swiper-pagination {
                    bottom: 40px !important;
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                }
                .testimonial-swiper .swiper-pagination-bullet {
                    background: white !important;
                    opacity: 0.3;
                    width: 8px;
                    height: 8px;
                    transition: all 0.3s ease;
                }
                .testimonial-swiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    width: 24px;
                    border-radius: 4px;
                }
            `}</style>
        </section>
    );
};
