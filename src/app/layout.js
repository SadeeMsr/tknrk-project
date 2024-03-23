import { Inter } from "next/font/google";
import "../styles/globals.css";
import { NextUIStyleProviders } from "./NextUIStyleProvider";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIStyleProviders>
          <Header />
          {children}
          <Footer />
        </NextUIStyleProviders>
      </body>
    </html>
  );
}
