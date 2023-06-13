import {
  Container,
  Typography,
  Box,
  Stack,
  Grid,
  Divider,
  ContainerProps,
} from "@mui/material";
import React from "react";

type TopBar = ContainerProps;

export default function TopBar(props: TopBar) {
  return (
    <header>
      <Container maxWidth={false} disableGutters>
        <Container {...props}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box id="logo">
              <Typography>CrabClaw</Typography>
            </Box>
            <Box>
              <Grid container spacing={2}>
                <Grid item>Nav</Grid>
                <Grid item>Nav</Grid>
                <Grid item>Nav</Grid>
              </Grid>
            </Box>
          </Stack>
        </Container>
        <Divider />
      </Container>
    </header>
  );
}
