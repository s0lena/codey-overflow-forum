import "./globals.css";
import Nav from "../components/navigation/Nav";
import UrlBar from "../lib/UrlBar/UrlBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UrlBar />
        <Nav />
        {children}
      </body>
    </html>
  );
}

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }
