import { Rubik } from "next/font/google";
import "./globals.css";
import Headers from "@/components/template/header";
import { Providers } from "./providers";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: 'Online Games | Free Games | Play Games Online',
  description: 'Play free online games at PlayGamesOnline. We have a large collection of games for you to play. Play games now!',
}

export default function RootLayout({ children }) {
  return (
    <html className={`dark text-foreground bg-background ${rubik.className}`} lang="en">
      <body className={`dark text-foreground bg-background ${rubik.className}`}>
        <Providers>
          <Headers />
          {children}
        </Providers>
      </body>
    </html>
  );
}
