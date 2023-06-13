import { Footer, TopBar } from "@/components";
import { createTheme, CssBaseline, ThemeProvider, Box } from "@mui/material";
import type { AppProps } from "next/app";

const theme = createTheme();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar sx={{ py: 2 }} />

      <main id="main-content">
        <Box py={2} id="main-content-spacer">
          <Component {...pageProps} />
        </Box>
      </main>

      <Footer sx={{ py: 2 }} />
    </ThemeProvider>
  );
}
