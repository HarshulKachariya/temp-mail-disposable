import Header from "@/components/header";
import HomePage from "@/components/home/home";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <HomePage />
    </main>
  );
}
