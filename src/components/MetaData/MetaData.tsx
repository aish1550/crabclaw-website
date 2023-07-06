import { FC } from "react";
import Head from "next/head";
import { appName, globalMetaDescription } from "@/appConfig";

export type MetaDataProps = {
  siteName?: string;
  description?: string;
};

const MetaData: FC<MetaDataProps> = ({
  siteName = appName,
  description = globalMetaDescription,
}) => (
  <Head>
    <title>{`${siteName} | ${description}`}</title>
    <meta name="description" content={`${siteName} | ${description}`} />
  </Head>
);

export default MetaData;
