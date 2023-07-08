import React, { FC } from "react";
import {
  Container,
  Divider,
  Typography,
  ContainerProps,
  Grid,
} from "@mui/material";
import SocialNetworkLinks from "../SocialNetworkLinks/SocialNetworkLinks";
import { useApp } from "../AppProvider";

type FooterProps = ContainerProps & {
  divider?: boolean;
};

const Footer: FC<FooterProps> = ({ divider, ...rest }) => {
  const { appName } = useApp();

  return (
    <>
      {divider && <Divider />}
      <Container component={"footer"} maxWidth={false} disableGutters {...rest}>
        <Container sx={{ textAlign: ["center", "center", "inherit"] }}>
          <Grid container>
            <Grid item xs={12}>
              <SocialNetworkLinks mb={2} sx={{ display: "inline-block" }} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              ©{new Date().getFullYear()} {appName}. All rights reserved.
            </Typography>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
