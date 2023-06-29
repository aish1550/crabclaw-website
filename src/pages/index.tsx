import { Container, Typography } from "@mui/material";
import Head from "next/head";

export const MetaData = () => (
  <Head>
    <title>Crabclaw</title>
    <meta
      name="description"
      content="CrabClaw | Online porfolio of Aadam Ishmael"
    />
  </Head>
);

export default function Home() {
  return (
    <>
      <MetaData />
      <Container>
        <Typography variant="h3" gutterBottom align="center">
          CrabClaw
        </Typography>
        <Typography gutterBottom align="center">
          Currently under construction. Please bear with...
        </Typography>
      </Container>
    </>
  );
}
