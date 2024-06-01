import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const Blogs = dynamic(() => import("@/pages/blogs/"), { ssr: true });
const Header = dynamic(() => import("@/components/header"), { ssr: false });
const Footer = dynamic(() => import("@/components/copyrightPage"), {
  ssr: false,
});
const HomePage = dynamic(() => import("@/components/home/home"), {
  ssr: false,
});

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
