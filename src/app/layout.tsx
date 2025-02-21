import "@/styles/globals.css";

export const metadata = {
  title: "Vachuska.cz",
  description: "Oceňování nemovitostí a tvorba webů.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
