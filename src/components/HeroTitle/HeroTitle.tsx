import React, { FC } from "react";
import { Typography, TypographyProps, styled } from "@mui/material";

export type HeroTitleProps = TypographyProps;

const StyledTypography = styled(Typography)<HeroTitleProps>(({ theme }) => ({
  ...theme.typography.h3,
  fontWeight: "bold",
  [theme.breakpoints.up("sm")]: {
    ...theme.typography.h1,
    fontWeight: "bold",
  },
}));

const HeroTitle: FC<HeroTitleProps> = (props) => (
  <StyledTypography {...props} />
);

export default HeroTitle;
