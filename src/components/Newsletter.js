"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email.includes("@")) {
            setMessage("⚠️ Please enter a valid email address.");
            return;
        }
        setMessage("🎉 Thank you for subscribing!");
        setEmail("");
    };

    return (
        <section
            className="relative py-8  mb-40 bg-cover bg-center bg-no-repeat text-white"
            style={{ backgroundImage: "url('/images/newsletter.jpg')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            <div className="relative container mx-auto px-6 lg:px-20 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-bold mb-6"
                >
                    📩 Subscribe to Our Newsletter
                </motion.h2>
                <p className="text-lg mb-8 opacity-90">
                    Get exclusive updates on new courses, special offers, and learning resources.
                </p>

                <motion.form
                    onSubmit={handleSubscribe}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-lg mx-auto bg-white/20 p-4 rounded-full flex items-center shadow-lg backdrop-blur-xl"
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 text-gray-800 bg-transparent outline-none placeholder-gray-200"
                        required
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-white text-blue-600 px-6 py-3 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
                        type="submit"
                    >
                        Subscribe 🚀
                    </motion.button>
                </motion.form>

                {message && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mt-4 text-lg font-medium"
                    >
                        {message}
                    </motion.p>
                )}
            </div>
        </section>
    );
};

export default Newsletter;
