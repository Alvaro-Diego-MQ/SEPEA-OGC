import "@/styles/globals.css";

export const metadata = {
  title: "SEPEA-OGC",
  description: "SEPEA-OGC",
  icons: {
    icon: [
      { url: "/icon/ogc.png", sizes: "32x32", type: "image/png" },
      { url: "/icon/ogc-192.png", sizes: "192x192", type: "image/png" }, 
      { url: "/icon/ogc-512.png", sizes: "512x512", type: "image/png" }, 
    ],
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
