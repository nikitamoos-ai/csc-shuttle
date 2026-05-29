"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Tours from "@/components/Tours";
import Coffeeshops from "@/components/Coffeeshops";
import Preise from "@/components/Preise";
import RegisterModal from "@/components/RegisterModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <Navbar onRegister={open} />
      <main>
        <Hero onRegister={open} />
        <Features />
        <Tours onRegister={open} />
        <Coffeeshops />
        <Preise onRegister={open} />
      </main>
      <Footer />
      <RegisterModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
