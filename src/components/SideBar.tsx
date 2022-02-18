import React from "react";
import { styled, Box, Typography } from "@mui/material";

const Container = styled("div")(({ theme }) => ({
  padding: theme.spacing(7),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

interface Props {
  children?: React.ReactNode;
}

const SideBar: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Typography variant="h5" sx={{ paddingBottom: 4 }}>
        Live Now Foodball
      </Typography>
      <Box
        component="img"
        src="https://dummyimage.com/600x400/000/fff"
        alt="feature article"
        sx={{ objectFit: "cover", width: "100%" }}
      />
    </Container>
  );
};

export default SideBar;
