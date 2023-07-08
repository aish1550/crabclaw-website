import React from "react";
import { socialLinks } from "@/appConfig";
import { IconButton, Grid, Box, BoxProps } from "@mui/material";
import Link from "next/link";

export type SocialNetworkLinksProps = BoxProps & {};

const SocialNetworkLinks = (props: SocialNetworkLinksProps) => {
  return (
    <Box {...props}>
      <Grid container spacing={1}>
        {socialLinks.map((socialItem) => {
          const Component = socialItem.icon;

          return (
            <Grid key={socialItem.name} item>
              <IconButton
                LinkComponent={Link}
                href={socialItem.url}
                target="_blank"
              >
                <Component />
              </IconButton>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SocialNetworkLinks;
