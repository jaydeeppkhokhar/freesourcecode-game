import { Rubik } from "next/font/google";
import "./globals.css";
import Headers from "@/components/template/header";
import Footer from "@/components/template/footer";
import { Providers } from "./providers";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "600"],  // Reduced font weights for optimization
});

export const metadata = {
  title: 'ArcadeHub.io - Play Free Online Games | Your Free Gaming Universe',
  description: 'Play free online games at ArcadeHub.io. We offer a large collection of games to play, from arcade classics to modern hits. Join now and start playing!',
  openGraph: {
    title: 'ArcadeHub.io - Play Free Online Games | Your Free Gaming Universe',
    description: 'Play free online games at ArcadeHub.io. We offer a large collection of games to play, from arcade classics to modern hits. Join now and start playing!',
    url: 'https://www.arcadehub.io',
    site_name: 'ArcadeHub.io',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ArcadeHub.io - Play Free Online Games'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arcadehub',
    title: 'ArcadeHub.io - Play Free Online Games | Your Free Gaming Universe',
    description: 'Join ArcadeHub.io to play free online games from a wide variety of genres and categories.',
    image: '/images/twitter-card.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html className={`dark text-foreground bg-background ${rubik.className}`} lang="en">
      <head>
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`} />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}');
          `,
        }} />
      </head>

      <body className={`dark text-foreground bg-background ${rubik.className}`}>
        <a href="#content" className="sr-only focus:not-sr-only">Skip to main content</a>

        <Providers>
          <Headers />
          <main id="content">{children}</main>
        </Providers>

        <Footer />

        <script src="./pet-cat/pet_cat.js"></script>
      </body>
    </html>
  );
}