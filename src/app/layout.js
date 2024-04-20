import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/Index.css";

export const metadata = {
  title: "Sequioa App",
  description: "Where Professional Traders Meet Investors",
  keywords: ["Traders", "Investors", "forex", "copy trading"],
  icons: {
    icon: "/assets/sequioa-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
