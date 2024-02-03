import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { useContext } from "react";

import t from "../../../../i18n/Translations";
import { navigateToOptionsPage } from "../../../../repository/SettingsRepository";
import { ThemeContext } from "../../../contexts/Theme";
import { useToggleTheme } from "../../../hooks/useToggleTheme";

type HeaderProps = {
  onChangeSearchText: (value: string) => void;
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Header = (props: HeaderProps) => {
  const { onChangeSearchText } = props;
  const { theme } = useContext(ThemeContext);
  const toggleTheme = useToggleTheme();
  const onInputSearchField = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeSearchText(event.target.value);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder={t.searchTabs}
            onChange={onInputSearchField}
            autoFocus
            fullWidth
          />
        </Search>
        <IconButton
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
          color="inherit"
        >
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        <IconButton onClick={() => navigateToOptionsPage()} color="inherit">
          <SpaceDashboardIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
