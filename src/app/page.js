import Image from "next/image";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/HomePage.jsx";
import Header from "./components/header/Header";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between"></main>
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}
