import React from "react";
import {
  Box,
  Grid,
  Link,
  styled,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  AdvertisementType,
  ArticleType,
  CasinoWinType,
  HighProfitBetType,
  LiveFootballType,
} from "../../types/dataTypes";
import LiveFootball from "./LiveFootball";
import BettingGuideItem from "./BettingGuideItem";
import CasinoWinItem from "./CasinoWinItem";
import HighProfitBetItem from "./HighProfitBetItem";
import NewsSideBarItem from "./NewsSideBarItem";

const Container = styled("div")(({ theme }) => ({
  padding: theme.spacing(7),
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const HeaderText = styled(Typography)(({ theme }) => ({
  padding: `${theme.spacing(2)} 0`,
  fontWeight: 900,
}));

interface Props {
  liveFootballs?: LiveFootballType[];
  advertisement?: AdvertisementType;
  bettingGuides?: ArticleType[];
  casinoWins?: CasinoWinType[];
  highProfitBets?: HighProfitBetType[];
  newsSideBar: ArticleType[];
}

const SideBar: React.FC<Props> = ({
  liveFootballs,
  advertisement,
  bettingGuides,
  casinoWins,
  highProfitBets,
  newsSideBar,
}) => {
  const mobileMD = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Container>
      {/* Live foodball */}
      <HeaderText variant="h5">Live Now Foodball</HeaderText>
      {liveFootballs &&
        liveFootballs.map((liveFootball: LiveFootballType, index: number) => {
          return (
            <LiveFootball liveFootball={liveFootball} key={liveFootball.id} />
          );
        })}

      {/* Advertisement */}
      {advertisement && (
        <Link href={"/news/" + advertisement?.link} target="__blank">
          <Box
            component={"img"}
            src={advertisement?.picture}
            sx={{
              objectFit: "contain",
              width: "100%",
              maxHeight: "300px",
              my: 5,
            }}
          />
        </Link>
      )}

      {/* Betting Guides */}
      <HeaderText variant="h5" sx={{ pt: 0, pb: 1 }}>
        Betting Guides
      </HeaderText>
      {bettingGuides && (
        <Grid container spacing={1} sx={{ backgroundColor: "secondary.main" }}>
          {bettingGuides.map((article: ArticleType, index: number) => {
            return (
              <Grid item xs={6} md={12} key={article.id}>
                <BettingGuideItem article={article} />
              </Grid>
            );
          })}
        </Grid>
      )}

      {/* Latest Casino Win */}
      {!mobileMD && (
        <>
          <HeaderText variant="h5" sx={{ pt: 5, pb: 3 }}>
            Latest Casino Win
          </HeaderText>
          {casinoWins && (
            <Grid
              container
              spacing={1}
              sx={{ backgroundColor: "secondary.main" }}>
              {casinoWins.map((casinoWin: CasinoWinType, index: number) => {
                return (
                  <Grid item xs={12} key={casinoWin.id}>
                    <CasinoWinItem casinoWin={casinoWin} />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </>
      )}

      {/* High Profit Bettings */}
      {!mobileMD && (
        <>
          <HeaderText variant="h5" sx={{ pt: 5, pb: 3 }}>
            High Profit Bettings
          </HeaderText>
          {highProfitBets && (
            <Grid
              container
              spacing={2}
              sx={{ backgroundColor: "secondary.main" }}>
              {highProfitBets.map(
                (highProfitBet: HighProfitBetType, index: number) => {
                  return (
                    <Grid item xs={12} key={highProfitBet.id}>
                      <HighProfitBetItem highProfitBet={highProfitBet} />
                    </Grid>
                  );
                }
              )}
            </Grid>
          )}
        </>
      )}

      {/* News Side Bar */}
      {!mobileMD && (
        <>
          {newsSideBar && (
            <Grid container spacing={2} sx={{ pt: 5 }}>
              {newsSideBar.map((article: ArticleType, index: number) => {
                return (
                  <Grid item xs={12} key={article.id}>
                    <NewsSideBarItem article={article} />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </>
      )}
    </Container>
  );
};

export default SideBar;
