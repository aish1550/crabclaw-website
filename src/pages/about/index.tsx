import React from "react";
import { PageWrapper } from "@/components";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <PageWrapper>
      <Typography variant="h3" fontWeight={"bold"} paragraph>
        About me
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

      <Typography paragraph>
        Ut ac felis nibh. Cras mauris odio, auctor vitae erat sit amet, rutrum
        varius dui. Ut eget sem vitae justo molestie eleifend. Duis vehicula
        magna et urna vestibulum, sit amet tempor erat aliquet. Nullam volutpat
        eros ultrices, aliquam lorem accumsan, vehicula lectus. Vestibulum eget
        justo vel eros consectetur ornare. Mauris purus leo, eleifend vel porta
        vehicula, iaculis in ante. Etiam laoreet dui arcu, eu tincidunt ligula
        aliquam sit amet. Ut consequat lacus sapien. Donec venenatis iaculis
        nisi, ut lobortis lectus consequat quis. Duis commodo, dui non
        consectetur pharetra, mi tortor euismod risus, eget posuere nisi purus
        non sem. Nam iaculis orci justo, in ornare metus pretium vitae.
        Vestibulum sollicitudin urna vel nulla tincidunt malesuada. Aenean
        luctus libero nec nibh posuere sagittis. Cras ac aliquam libero.
      </Typography>
    </PageWrapper>
  );
};

export default About;
