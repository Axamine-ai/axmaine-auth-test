import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Head from "next/head";
import StoreProvider from "./redux/StoreProvider";

export const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Add the weight variants you need
  subsets: ["latin"], // Add the subset variants you need
  variable: "--font-poppins", // Optional: Add a variable name for the font family
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Axamine.ai - Ai Integrated Diagnostic",
  description:
    "Axamine is an AI integrated diagnostic platform offering state-of-the-art solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Axamine - AI Integrated Diagnostic</title>
        <meta
          name="description"
          content="Axamine is an AI integrated diagnostic platform offering state-of-the-art solutions."
        />
        <meta
          name="keywords"
          content="Axamine, AI, Diagnostic, Healthcare, Technology,Henilsinh raj,axamine ai , medtech"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.axamine.in" />
      </Head>
      <body className={`${poppins.className}`}>
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
          <ScrollUp />
        </StoreProvider>
      </body>
    </html>
  );
}
