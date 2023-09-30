"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import greenFlask from "@/src/statics/images/logo2.png";

export default function BackgroundDecoration() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen z-10 overflow-hidden">
      {/* Top Right blurred effect */}

      <div className="remedy">SCALEX</div>
    </div>
  );
}
