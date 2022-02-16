import React from "react";
import { Box, Container } from "@mui/material";

const Layout: React.FC = ({ children }) => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box sx={{ bgcolor: "#fff" }}>{children}</Box>
    </Container>
  );
};

export default Layout;
