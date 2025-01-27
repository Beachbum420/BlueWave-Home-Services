import React from "react";
import { motion } from "framer-motion";
import { LucideMail, LucidePhone } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen">
      <section className="bg-blue-600 text-white text-center py-16">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">BlueWave Home Services</h1>
          <p className="text-lg mb-8">Luxury, Modern, and Professional Care for Your Home</p>
        </motion.div>
      </section>
    </div>
  );
}