import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-gray-300">
      <main className="bg-greybg max-w-7xl mx-auto relative shadow-lg">
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          height={2}
          showOnShallow={true}
        />
        <section className="">
          <Component {...pageProps} />
        </section>
      </main>
    </main>
  );
}
