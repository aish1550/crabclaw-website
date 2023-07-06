import React from "react";
import { PageWrapper } from "@/components";
import { Typography } from "@mui/material";

const Contact = () => {
  return (
    <PageWrapper>
      <Typography variant="h3" fontWeight={"bold"} paragraph>
        Contact
      </Typography>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id eros
        vitae mauris interdum molestie eu viverra odio. Nunc nec quam tempor mi
        mollis posuere vel at metus. Mauris gravida accumsan tortor vel
        fringilla. Nulla facilisi. Praesent pulvinar, sem quis efficitur congue,
        quam mauris hendrerit dui, non luctus tellus lorem et ipsum. Cras
        venenatis nisi id pellentesque sodales. Sed porta molestie erat vitae
        fermentum. Sed ac metus rhoncus, cursus tortor quis, pulvinar nunc.
        Aenean luctus consequat lorem, in pharetra ligula porta nec.
      </Typography>
    </PageWrapper>
  );
};

export default Contact;
