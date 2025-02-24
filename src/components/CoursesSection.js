"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const courses = [
    {
        title: "Web Development",
        description: "Learn how to build websites with HTML, CSS, JavaScript, and frameworks like React.",
        image: "/images/card-1.webp",
        link: "/courses/web-dev",
        duration: "12 Weeks",
        difficulty: "Beginner - Intermediate",
        instructor: "John Doe",
        price: 5000,
        topics: ["HTML & CSS", "JavaScript & ES6", "React & Next.js", "Backend Basics", "Responsive Design"],
    },
    {
        title: "Data Science",
        description: "Master the skills of data analysis, machine learning, and big data tools.",
        image: "/images/card-2.jpeg",
        link: "/courses/data-science",
        duration: "16 Weeks",
        difficulty: "Intermediate - Advanced",
        instructor: "Sarah Johnson",
        price: 5500,
        topics: ["Python & Pandas", "Machine Learning", "Deep Learning", "Big Data", "Data Visualization"],
    },
    {
        title: "UI/UX Design",
        description: "Understand the design process to create beautiful and user-centered websites and apps.",
        image: "/images/card-3.jpeg",
        link: "/courses/ui-ux",
        duration: "10 Weeks",
        difficulty: "Beginner - Intermediate",
        instructor: "Michael Lee",
        price: 4500,
        topics: ["User Research", "Wireframing & Prototyping", "UI Design Principles", "Figma & Adobe XD", "User Testing"],
    },
];

const CoursesSection = () => {
    return (
        <section className=" bg-gray-100 dark:bg-gray-900 pb-40">
            <div className="container  w-10/12 mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-12">
                    Our Popular Courses
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="relative bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl flex flex-col"
                        >
                            <div className="relative w-full h-56">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover rounded-t-2xl"
                                />
                            </div>

                            <div className="p-4 flex-grow">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                    {course.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mt-2">
                                    {course.description}
                                </p>
                            </div>

                            <div className="px-4 pb-4 mt-auto">
                                <Link href={course.link} passHref>
                                    <motion.button

                                        className="btn bg-blue-600 hover:bg-blue-800 text-white w-full text-lg"
                                    >
                                        View Details
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
