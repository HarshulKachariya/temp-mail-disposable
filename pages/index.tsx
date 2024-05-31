import Header from "@/components/header";
import HomePage from "@/components/home/home";
import { Inter } from "next/font/google";
import Blogs from "../components/blogs";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <HomePage />
      <Blogs />
      <Footer />
    </main>
  );
}
