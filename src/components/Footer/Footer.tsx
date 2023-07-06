import React, { FC } from "react";
import { Container, Divider, Typography, ContainerProps } from "@mui/material";
import SocialNetworkLinks from "../SocialNetworkLinks/SocialNetworkLinks";

type FooterProps = ContainerProps & {
  divider?: boolean;
};

const Footer: FC<FooterProps> = ({ divider, ...rest }) => {
  return (
    <>
      {divider && <Divider />}
      <Container component={"footer"} maxWidth={false} disableGutters {...rest}>
        <Container>
          <Typography>Footer</Typography>
          <SocialNetworkLinks />
        </Container>
      </Container>
    </>
  );
};

export default Footer;
