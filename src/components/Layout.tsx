import React from "react";
import { Container } from "@mui/material";

const Layout: React.FC = ({ children }) => {
  return (
    <Container maxWidth="xl" disableGutters>
      <div style={{ backgroundColor: "#fff", marginBottom: "-25px" }}>
        {children}
      </div>
    </Container>
  );
};

export default Layout;
