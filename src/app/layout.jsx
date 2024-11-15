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

      <head>
        {/* <script data-cfasync="false" src="//dcbbwymp1bhlf.cloudfront.net/?wbbcd=1117370"></script>
        <script data-cfasync="false" src="//dcbbwymp1bhlf.cloudfront.net/?wbbcd=1117381"></script>
        <script data-cfasync="false" src="//dcbbwymp1bhlf.cloudfront.net/?wbbcd=1117382"></script>
        <script data-cfasync="false" src="//dcbbwymp1bhlf.cloudfront.net/?wbbcd=1117385"></script>
        <script data-cfasync="false" src="//dcbbwymp1bhlf.cloudfront.net/?wbbcd=1117386"></script> */}

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}');
        `,
          }}
        />
      </head>

      <body className={`dark text-foreground bg-background ${rubik.className}`}>
        <Providers>
          <Headers />
          {children}
        </Providers>

        {/* <script src="https://alwingulla.com/88/tag.min.js" data-zone="113526" async data-cfasync="false"></script> */}
      </body>
    </html>
  );
}
