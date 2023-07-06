import React, { FC } from "react";
import Link, { LinkProps } from "next/link";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

type GeneralLinkProps = MuiLinkProps & LinkProps & {};

const GeneralLink: FC<GeneralLinkProps> = (props) => (
  <MuiLink component={Link} underline="none" {...props} />
);

export default GeneralLink;
