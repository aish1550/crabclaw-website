import React, { FC } from "react";
import MetaData, { MetaDataProps } from "../MetaData";
import { Container, ContainerProps } from "@mui/material";
import { useApp } from "../AppProvider";

type PageWrapperProps = ContainerProps & MetaDataProps & {};

const PageWrapper: FC<PageWrapperProps> = ({
  siteName,
  description,
  ...rest
}) => {
  const { appName, globalMetaDescription } = useApp();

  return (
    <>
      <MetaData siteName={appName} description={globalMetaDescription} />
      <Container sx={{ py: 4 }} {...rest} />
    </>
  );
};

export default PageWrapper;
