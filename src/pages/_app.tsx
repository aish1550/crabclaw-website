import { Footer, TopBar } from "@/components";
import { theme } from "../styles/theme";
import { CssBaseline, ThemeProvider, Container } from "@mui/material";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar sx={{ py: 3 }} />
        <Container component={"main"} disableGutters id="main-content">
          <Component {...pageProps} />
        </Container>
        <Footer sx={{ py: 3 }} />
      </ThemeProvider>
    </div>
  );
}
