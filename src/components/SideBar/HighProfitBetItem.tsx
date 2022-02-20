import React from "react";
import { Link, Typography } from "@mui/material";
import { HighProfitBetType } from "../../types/dataTypes";

interface Props {
  highProfitBet?: HighProfitBetType;
}

const HighProfitBetItem: React.FC<Props> = ({ highProfitBet }) => {
  return (
    <Link href={highProfitBet?.link}>
      <Typography
        variant="body1"
        sx={{ p: 0, fontWeight: "900", fontSize: "0.95rem" }}>
        {highProfitBet?.betName}
      </Typography>
      <Typography variant="body2" sx={{ p: 0, fontSize: "0.8rem" }}>
        {highProfitBet?.a} vs
      </Typography>
      <Typography variant="body2" sx={{ p: 0, fontSize: "0.8rem" }}>
        {highProfitBet?.b}
      </Typography>
      <Typography
        variant="body2"
        sx={{ p: 0, fontWeight: "900", fontSize: "0.95rem" }}>
        {highProfitBet?.low} - {highProfitBet?.high}
      </Typography>
    </Link>
  );
};

export default HighProfitBetItem;
