import Breadcrumbs from "@/components/core/breadcrumbs";
import Navbar from "@/components/others/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-[#F8F9FA]">
      <main className="bg-greybg max-w-7xl mx-auto relative">
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          height={2}
          showOnShallow={true}
        />
        <Navbar />
        <Breadcrumbs />
        <section className="px-16 py-5 max-md:px-6 max-md:py-3">
          <Component {...pageProps} />
        </section>
      </main>
    </main>
  );
}
