import About from "@/components/About";
import BannerSlider from "@/components/BannerSlider";
import CoursesSection from "@/components/CoursesSection";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <BannerSlider></BannerSlider>
      <About></About>
      <CoursesSection></CoursesSection>
      <Newsletter></Newsletter>
    </div>
  );
}
