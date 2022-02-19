import React from "react";
import { styled, Link, Box } from "@mui/material";
import { CasinoWinType } from "../../types/dataTypes";

const ComponentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "35px",
}));

const Text = styled("div")(({ theme }) => ({
  fontSize: "0.8rem",
}));

interface Props {
  casinoWin?: CasinoWinType;
}

const CasinoWinItem: React.FC<Props> = ({ casinoWin }) => {
  return (
    <Link href={casinoWin?.link}>
      <ComponentContainer>
        <Box
          component="img"
          src={casinoWin?.picture || "https://dummyimage.com/50x50/000/fff.png"}
          sx={{
            objectFit: "contain",
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            mr: 1.5,
          }}
        />
        <Text>
          <span style={{ fontWeight: "900", fontSize: "0.85rem" }}>
            {casinoWin?.name}
          </span>{" "}
          win{" "}
          <span style={{ fontWeight: "900", fontSize: "0.85rem" }}>
            {casinoWin?.amount}
          </span>{" "}
          at{" "}
          <span style={{ fontWeight: "900", fontSize: "0.85rem" }}>
            {casinoWin?.game}
          </span>
        </Text>
      </ComponentContainer>
    </Link>
  );
};

export default CasinoWinItem;
