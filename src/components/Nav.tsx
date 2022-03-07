import React from "react";
import { Button, styled, alpha } from "@mui/material";
import categories from "../data/categories.json";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CategoryType } from "../types/dataTypes";
import { useNavigate } from "react-router-dom";
import slugify from "../utils/slugify";

const NavContainer = styled("div")(({ theme }) => ({
  display: "flex",
  columnGap: "3px",
  flexWrap: "wrap",
  margin: `${theme.spacing(4)} 0`,
  [theme.breakpoints.down("sm")]: {
    justifyContent: "space-evenly",
  },
}));

const NavItem = styled(Button)(({ theme }) => ({
  fontSize: "0.775rem",
  width: theme.spacing(10),
  color: "black",
  padding: "5px",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
}));

const SubMenuContainer = styled("div")(({ theme }) => ({
  position: "relative",
  "&:hover .SubMenuContent": {
    display: "block",
  },
}));

const SubMenuContent = styled("div")(({ theme }) => ({
  display: "none",
  position: "absolute",
  backgroundColor: theme.palette.primary.main,
  zIndex: 1,
  "& > div": {
    width: "130px",
    fontSize: "0.775rem",
    color: alpha("#B9B9B9", 0.8),
    display: "block",
    padding: theme.spacing(1),
    cursor: "pointer",
    "&:hover": {
      color: alpha("#B9B9B9", 1),
    },
  },
}));

const Nav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <NavContainer>
        {categories.categories.map((category: CategoryType) => {
          if (!category.isFolder)
            return (
              <NavItem key={category.name} disableRipple={true} onClick={() => navigate("/news/" + slugify(category.name))}>
                {category.name}
              </NavItem>
            );
          else
            return (
              <SubMenuContainer key={category.name}>
                <NavItem disableRipple={true} sx={{ cursor: "unset" }}>
                  {category.name} <KeyboardArrowDownIcon />
                </NavItem>
                <SubMenuContent className={"SubMenuContent"}>
                  {category.items?.map((subcategory: CategoryType) => {
                    return (
                      <div onClick={() => navigate("/news/" + slugify(subcategory.name))} key={subcategory.name}>
                        {subcategory.name}
                      </div>
                    );
                  })}
                </SubMenuContent>
              </SubMenuContainer>
            );
        })}
      </NavContainer>
    </nav>
  );
};

export default Nav;
