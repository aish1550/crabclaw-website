import React from "react";
import { Container, Divider, Typography, ContainerProps } from "@mui/material";

type footer = ContainerProps;

export default function Footer(props: ContainerProps) {
  return (
    <footer>
      <Container maxWidth={false} disableGutters>
        <Divider />
        <Container {...props}>
          <Typography>Footer</Typography>
        </Container>
      </Container>
    </footer>
  );
}
