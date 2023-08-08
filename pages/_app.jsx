import "@/styles/font.css";
import GlobalStyle from "../styles/globalStyles";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider
      session={session}
      refetchOnWindowFocus={false}
      refetchInterval={15 * 60}
    >
      <GlobalStyle />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
