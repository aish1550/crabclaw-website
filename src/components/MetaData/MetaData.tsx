import { FC } from "react";
import Head from "next/head";

export type MetaDataProps = {
  siteName?: string;
  description?: string;
};

const MetaData: FC<MetaDataProps> = ({ siteName, description }) => (
  <Head>
    <title>{`${siteName} | ${description}`}</title>
    <meta name="description" content={`${siteName} | ${description}`} />
  </Head>
);

export default MetaData;
