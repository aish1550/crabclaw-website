import React, { FC } from "react";
import MetaData, { MetaDataProps } from "../MetaData";
import { Container, ContainerProps } from "@mui/material";

type PageWrapperProps = ContainerProps & MetaDataProps & {};

const PageWrapper: FC<PageWrapperProps> = ({
  siteName,
  description,
  ...rest
}) => {
  return (
    <>
      <MetaData siteName={siteName} description={description} />
      <Container sx={{ py: 4 }} {...rest} />
    </>
  );
};

export default PageWrapper;
