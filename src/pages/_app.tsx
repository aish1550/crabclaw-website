import { Footer, TopBar } from "@/components";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Box,
  Container,
} from "@mui/material";
import type { AppProps } from "next/app";

const theme = createTheme();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar maxWidth={"md"} sx={{ py: 2 }} />

      <Container
        component={"main"}
        maxWidth={"md"}
        disableGutters
        id="main-content"
        sx={{
          py: 2,
        }}
      >
        <Component {...pageProps} />
      </Container>

      <Footer maxWidth={"md"} sx={{ py: 2 }} />
    </ThemeProvider>
  );
}
