import "./globals.css";
import Header from "@/components/header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sadat Shahriar Bari Portfolio",
  description:
    "I focus on building scalable and efficient web and mobile applications. I enjoy building and designing software products with clean, optimized code, and providing maintainable solutions as per client requirement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add the favicon */}
        <link rel="icon" href="/ssb-portfolio/images/my_logo.svg" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
