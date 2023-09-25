import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CssBaseline } from "../material-ui-module/ui";

function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
    </React.Fragment>
  );
}
export default FixedContainer;
