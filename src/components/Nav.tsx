import React from "react";
import { Button, Menu, MenuItem, styled } from "@mui/material";
import categories from "../data/categories.json";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Category } from "../types/dataTypes";

const NavContainer = styled("div")(({ theme }) => ({
  display: "flex",
  columnGap: "3px",
  flexWrap: "wrap",
  margin: `${theme.spacing(4)} 0`,
}));

const NavItem = styled(Button)(({ theme }) => ({
  color: "black",
  padding: "5px",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
}));

const Nav: React.FC = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <NavContainer>
        {categories.categories.map((category: Category) => {
          if (!category.isFolder)
            return <NavItem key={category.name}>{category.name}</NavItem>;
          else
            return (
              <>
                <NavItem
                  key={category.name}
                  onClick={handleClick}
                  onMouseEnter={handleClick}
                  // onMouseLeave={handleClose}
                  disableRipple={true}
                  sx={{ cursor: "unset" }}>
                  {category.name} <KeyboardArrowDownIcon />
                </NavItem>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  sx={{
                    "& .MuiPaper-root": {
                      backgroundColor: "#191919",
                      color: "white",
                      borderRadius: 0,
                    },
                  }}>
                  <div onMouseLeave={handleClose}>
                    {category.items?.map((subcategory: Category) => {
                      return (
                        <MenuItem onClick={handleClose} key={subcategory.name}>
                          {subcategory.name}
                        </MenuItem>
                      );
                    })}
                  </div>
                </Menu>
              </>
            );
        })}
      </NavContainer>
    </>
  );
};

export default Nav;
