import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "UniTech Teacher Backoffice",
  description: "Technology Case",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className + " bg-background"}>{children}</body>
    </html>
  );
}
