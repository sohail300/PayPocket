import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LaptopView from "@/components/LaptopView";
import WhyToChoose from "@/components/WhyToChoose";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <>
      <Hero />
      <WhyToChoose />
      <LaptopView />
      <Footer />
    </>
  );
}
