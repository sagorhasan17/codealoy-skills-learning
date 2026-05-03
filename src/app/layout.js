import ReactToastContainer from "@/components/ReactToastContainer";
import { Outfit } from "next/font/google";
import "./globals.css";

const outFit = Outfit({
  variable: "--font-outfit",
});

export const metadata = {
  title: "Codealoy Skills Learning",
  description:
    "A platform to learn and enhance your coding skills with interactive lessons, coding challenges, and a supportive community.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${outFit.variable}`}
      suppressHydrationWarning
    >
      <body className={`${outFit.className}`}>
        {children}
        <ReactToastContainer></ReactToastContainer>
      </body>
    </html>
  );
}
