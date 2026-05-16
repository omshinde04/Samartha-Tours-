import "./globals.css";
import { Sora, Poppins } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Shree Swami Samartha Tours & Travels",
  description: "Luxury Tempo Traveller Rental Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}