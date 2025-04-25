import type { Metadata } from "next";
import { Roboto, Inter, Poppins } from "next/font/google";
import "./page.module.css";

const geistSans = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const geistMono = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Job Tracker BD",
  description: "Job Tracker BD is a job tracking application that helps you keep track of your job applications.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
