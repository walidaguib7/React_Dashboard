import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import PersonIcon from "@mui/icons-material/PersonOutlined";

import Search from "@mui/icons-material/Search";

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2}>
      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          backgroundColor: `${colors.primary[400]}`,
          borderRadius: "3px",
        }}>
        <InputBase sx={{ flex: 1, ml: 2 }} placeholder="Search" />
        <IconButton type="button" sx={{ padding: 1 }}>
          <Search />
        </IconButton>
      </Box>
      {/* Icons */}
      <Box display={"flex"} gap={1}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode == "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
