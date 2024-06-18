import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-slate-950 scrollbar-track-zinc-800 hover:scrollbar-thumb-purple-700 active:scrollbar-thumb-purple-900 scrollbar overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-1">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
