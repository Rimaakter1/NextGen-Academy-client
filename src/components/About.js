"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="py-40 bg-gray-100 dark:bg-gray-900">
            <div className="container w-10/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full h-[450px]"
                    >
                        <Image
                            src="/images/about.jpg"
                            alt="About NextGen Academy"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl shadow-lg"
                            priority
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >
                        <h2 className="rounded-3xl text-lg w-fit py-1 px-5 font-extrabold text-blue-800 bg-blue-100 dark:text-white">
                            Get More About Us
                        </h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            NextGen Academy is an innovative platform dedicated to helping learners master modern skills.
                            From Web Development to Data Science and UI/UX Design, we provide top-tier courses with hands-on projects.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-6">
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-primary">50K+</h3>
                                <p className="text-gray-700 dark:text-gray-400">Students Enrolled</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-primary">200+</h3>
                                <p className="text-gray-700 dark:text-gray-400">Expert Instructors</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-primary">98%</h3>
                                <p className="text-gray-700 dark:text-gray-400">Success Rate</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Link href="/courses">
                                <button className="btn btn-primary px-6 py-3 text-lg transition-all transform hover:scale-105">
                                    Explore Courses
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
