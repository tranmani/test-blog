import React from "react";
import { styled, Box, Link } from "@mui/material";
import { LiveFootballType } from "../../types/dataTypes";

const ComponentContainer = styled("div")(({ theme }) => ({
  padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
  backgroundColor: "white",
  height: 30,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(0.5),
  [theme.breakpoints.down("md")]: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const TeamName = styled("div")(({ theme }) => ({
  fontSize: "0.7rem",
}));

const TeamLogo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

interface Props {
  liveFootball?: LiveFootballType;
}

const LiveFootball: React.FC<Props> = ({ liveFootball }) => {
  return (
    <Link href={liveFootball?.link} target="__blank">
      <ComponentContainer>
        <TeamName>
          <Box
            component={"span"}
            sx={{ fontSize: "0.7rem", fontWeight: "900" }}>
            {liveFootball?.homeTeam.name}
          </Box>
          {" vs "}
          <Box
            component={"span"}
            sx={{ fontSize: "0.7rem", fontWeight: "900" }}>
            {liveFootball?.awayTeam.name}
          </Box>
        </TeamName>
        <TeamLogo>
          <Box
            component={"img"}
            src={liveFootball?.homeTeam.logo}
            sx={{ objectFit: "contain", width: "22px", height: "22px" }}
          />
          <Box
            component={"img"}
            src={liveFootball?.awayTeam.logo}
            sx={{ objectFit: "contain", width: "22px", height: "22px" }}
          />
        </TeamLogo>
      </ComponentContainer>
    </Link>
  );
};

export default LiveFootball;
