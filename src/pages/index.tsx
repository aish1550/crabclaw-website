import { Container, Typography, Grid, Box } from "@mui/material";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { HeroTitle, HeroImage, PageWrapper, useApp } from "@/components";
import { interpolateString } from "../utils/interpolateString";

export default function Home({
  subtitle,
  authorSummary,
  currentWorkplace,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { appName } = useApp();

  return (
    <>
      <PageWrapper
        sx={{
          py: [6, 14],
        }}
      >
        <Grid container spacing={4} alignItems={"center"}>
          <Grid item sm={12} md={6}>
            <HeroTitle sx={{ mb: 1 }}>{appName}</HeroTitle>
            <Box sx={{ mb: 5 }}>
              <Typography variant="h5">{subtitle}</Typography>
              <Typography variant="h5">
                Currently working @{" "}
                <span style={{ fontWeight: "bold" }}>{currentWorkplace}</span>
              </Typography>
            </Box>
            <Typography gutterBottom variant="body2">
              {interpolateString(
                authorSummary,
                "{EXPERIENCE_YEARS}",
                `${new Date().getFullYear() - 2007}`
              )}
            </Typography>
          </Grid>

          <Grid item xs={12} md sx={{ display: ["none", "none", "flex"] }}>
            <HeroImage />
          </Grid>
        </Grid>
      </PageWrapper>
    </>
  );
}

type ContentfulReponse = {
  subtitle: string;
  authorSummary: string;
  currentWorkplace: string;
};

export const getServerSideProps: GetServerSideProps<
  ContentfulReponse
> = async () => {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_PREVIEW_ACCESS_TOKEN } = process.env;

  const baseUrl = "https://preview.contentful.com";
  const space_id = CONTENTFUL_SPACE_ID;
  const access_token = CONTENTFUL_PREVIEW_ACCESS_TOKEN;
  const environment_id = "master";
  const entry_id = "4hFPXBuB7pYRhaWIvL4CWT";

  const result = await fetch(
    `${baseUrl}/spaces/${space_id}/environments/${environment_id}/entries/${entry_id}?access_token=${access_token}`
  ).then((res) => res.json());

  return {
    props: {
      ...result.fields,
    },
  };
};
