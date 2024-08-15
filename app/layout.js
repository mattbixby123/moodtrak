import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "moodtrak",
  description: "Track your daily mood, every day of the year",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>HEADER</header>
        {children}
        <footer>FOOTER</footer>
      </body>
    </html>
  );
}
