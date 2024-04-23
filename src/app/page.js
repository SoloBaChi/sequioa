import Image from "next/image";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/HomePage.jsx";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between"></main>
    <>
      <HomePage />
      <Footer />
    </>
  );
}
