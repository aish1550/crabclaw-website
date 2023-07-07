import { pageList } from "@/appConfig";
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
import { useApp } from "../AppProvider";

type TopBar = ContainerProps & {
  divider?: boolean;
};

export default function TopBar({ divider, ...rest }: TopBar) {
  const { appName } = useApp();

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
                {pageList.map((navItem) =>
                  navItem.show ? (
                    <Grid key={navItem.alias} item>
                      <GeneralLink
                        href={navItem.path}
                        variant="body2"
                        fontWeight={"bold"}
                      >
                        {navItem.name}
                      </GeneralLink>
                    </Grid>
                  ) : null
                )}
              </Grid>
            </Box>
          </Stack>
        </Container>
      </Container>
      {divider && <Divider />}
    </>
  );
}
