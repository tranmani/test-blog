import React from "react";
import { Button, styled, Link, alpha } from "@mui/material";
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
  "& a": {
    width: "130px",
    fontSize: "0.775rem",
    color: alpha("#B9B9B9", 0.8),
    display: "block",
    padding: theme.spacing(1),
    "&:hover": {
      color: alpha("#B9B9B9", 1),
    },
  },
}));

const Nav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavContainer>
        {categories.categories.map((category: CategoryType) => {
          if (!category.isFolder)
            return (
              <NavItem
                key={category.name}
                disableRipple={true}
                onClick={() => navigate("/news/" + slugify(category.name))}>
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
                      <Link
                        href={"/news/" + slugify(subcategory.name)}
                        key={subcategory.name}>
                        {subcategory.name}
                      </Link>
                    );
                  })}
                </SubMenuContent>
              </SubMenuContainer>
            );
        })}
      </NavContainer>
    </>
  );
};

export default Nav;
