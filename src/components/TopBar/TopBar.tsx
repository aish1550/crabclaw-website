import { appName } from "@/appConfig";
import {
  Container,
  Typography,
  Box,
  Stack,
  Grid,
  Divider,
  ContainerProps,
} from "@mui/material";
import GeneralLink from "../GeneralLink/GeneralLink";
import React from "react";

type TopBar = ContainerProps & {
  divider?: boolean;
};

export default function TopBar({ divider, ...rest }: TopBar) {
  return (
    <>
      <Container component={"header"} maxWidth={false} disableGutters {...rest}>
        <Container>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box id="logo">
              <GeneralLink href="/" underline={"none"}>
                <Typography fontWeight={"bold"}>{appName}</Typography>
              </GeneralLink>
            </Box>
            <Box>
              <Grid container spacing={2}>
                <Grid item>
                  <GeneralLink href="/about">About</GeneralLink>
                </Grid>
                <Grid item>
                  <GeneralLink href="/contact">Contact</GeneralLink>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Container>
      </Container>
      {divider && <Divider />}
    </>
  );
}
