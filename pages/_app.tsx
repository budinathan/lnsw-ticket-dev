import Breadcrumbs from "@/components/core/breadcrumbs";
import Navbar from "@/components/others/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="max-w-7xl">
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        height={2}
        showOnShallow={true}
      />
      <Navbar />
      <Breadcrumbs />
      <section className="px-16 py-5 bg-greybg mx-auto max-md:px-6 max-md:py-3">
        <Component {...pageProps} />
      </section>
    </main>
  );
}
