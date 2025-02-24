"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";

const slides = [
    {
        image: "/images/web-development.jpg",
        title: "Master Web Development",
        description: "Learn the latest web technologies and build stunning websites.",
    },
    {
        image: "/images/data-science.jpg",
        title: "AI & Data Science",
        description: "Become an expert in AI and machine learning with hands-on projects.",
    },
    {
        image: "/images/ui-ux.webp",
        title: "UI/UX Design Excellence",
        description: "Craft beautiful and user-friendly designs with industry tools.",
    },
];

const BannerSlider = () => {
    return (
        <section className="relative w-full h-[75vh]">
            <Swiper
                modules={[Autoplay, Navigation, Pagination, EffectFade]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                effect="fade"
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full overflow-hidden">
                            {/* Background Image with Smooth Transition */}
                            <div className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="brightness-75 transform scale-105 transition-transform duration-1000 ease-in-out object-cover"
                                    priority
                                />
                            </div>

                            {/* Gradient Overlay & Content */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-8 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
                                <div className="backdrop-blur-md bg-white/10 p-6 rounded-xl shadow-lg">
                                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">{slide.title}</h2>
                                    <p className="text-lg lg:text-xl mb-6 opacity-90">{slide.description}</p>
                                    <Link href="/courses">
                                        <button className="btn btn-primary px-6 py-3 text-lg transition-all transform hover:scale-110">
                                            Explore Courses
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default BannerSlider;
