import "./globals.css";

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
      <body className="bg-background">{children}</body>
    </html>
  );
}
