import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Footer, TopBar, AppProvider } from "@/components";
import { theme } from "../styles/theme";
import { CssBaseline, ThemeProvider, Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <TopBar sx={{ py: 3 }} /> */}
          <Container
            component={"main"}
            disableGutters
            id="main-content"
            sx={{ textAlign: ["center", "center", "left"] }}
          >
            <Component {...pageProps} />
          </Container>
          <Footer sx={{ py: 3 }} />
        </ThemeProvider>
      </AppProvider>
    </div>
  );
}
