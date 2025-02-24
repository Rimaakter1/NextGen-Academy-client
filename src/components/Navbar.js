"use client";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const newTheme = !prev;
            if (newTheme) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
            return newTheme;
        });
    };

    return (
        <div className="navbar bg-base-100 dark:bg-gray-900 shadow-lg sticky top-0 z-50 px-6">
            <div className="w-10/12 mx-auto">
                <div className="navbar-start">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="NextGen Academy Logo"
                            width={60}
                            height={50}
                            className="h-auto w-auto"
                            priority
                        />
                    </Link>
                </div>

                <div className="navbar-center hidden  py-2 lg:flex">
                    <ul className="menu menu-horizontal px-1  dark:text-white space-x-6">
                        <li><Link href="/" className="hover:text-primary">Home</Link></li>
                        <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                        <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                        <li>
                            <details>
                                <summary className="cursor-pointer">Courses</summary>
                                <ul className="p-2 shadow bg-white dark:bg-gray-800 rounded-box w-52">
                                    <li><Link href="/courses/web-dev">Web Development</Link></li>
                                    <li><Link href="/courses/data-science">Data Science</Link></li>
                                    <li><Link href="/courses/ui-ux">UI/UX Design</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end flex items-center space-x-6">
                    <button className="btn btn-circle btn-ghost" onClick={toggleDarkMode}>
                        {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-600" />}
                    </button>

                    <Link href="/login" className="btn btn-primary px-6 transition-transform transform hover:scale-110 hover:shadow-lg">
                        Login
                    </Link>

                    <button className="lg:hidden btn btn-circle btn-ghost" onClick={() => setMenuOpen(!menuOpen)}>
                        <Menu className="w-7 h-7" />
                    </button>
                </div>

                {menuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 p-5 shadow-md flex flex-col space-y-3 lg:hidden">
                        <Link href="/" className="block text-lg hover:text-primary dark:text-white">Home</Link>
                        <Link href="/about" className="block text-lg hover:text-primary dark:text-white">About Us</Link>
                        <Link href="/contact" className="block text-lg hover:text-primary dark:text-white">Contact</Link>
                        <Link href="/blog" className="block text-lg hover:text-primary dark:text-white">Blog</Link>
                        <details className="dropdown w-full">
                            <summary className="cursor-pointer text-lg dark:text-white">Courses</summary>
                            <ul className="dropdown-content menu p-2 shadow bg-white dark:bg-gray-800 rounded-box w-full">
                                <li><Link href="/courses/web-dev">Web Development</Link></li>
                                <li><Link href="/courses/data-science">Data Science</Link></li>
                                <li><Link href="/courses/ui-ux">UI/UX Design</Link></li>
                            </ul>
                        </details>
                        <Link href="/login" className="block text-lg hover:text-primary dark:text-white">Login</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
