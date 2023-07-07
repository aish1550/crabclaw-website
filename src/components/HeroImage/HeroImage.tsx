import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

const HeroImage = () => {
  {
    /* TODO: create image or animation */
  }

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        pb: "62%",
      }}
    >
      <Image
        fill
        className={"image"}
        alt=""
        src="https://res.cloudinary.com/snyk/image/upload/v1663712676/wordpress-sync/illustration-snyk-code-hero.svg"
      />
    </Box>
  );
};

export default HeroImage;
