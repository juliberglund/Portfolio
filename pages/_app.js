import "@/styles/globals.css";
import { useEffect } from "react";
import PortfolioProvider from "@/contexts/PortfolioContext";
import "../i18n";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "sunset";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <PortfolioProvider>
      <Component {...pageProps} />
    </PortfolioProvider>
  );
}
