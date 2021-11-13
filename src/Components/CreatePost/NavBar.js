import { AppBar, ButtonBase, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import RefreshIcon from "@mui/icons-material/Refresh";

const styles = {
  appBar: {
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
  },
  refreshButton: {
    backgroundColor: "gray",
    padding: "5px 30px",
    borderRadius: 1,
    marginRight: 5,
  },
};

const NavBar = (props) => {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar>
          <ButtonBase onClick={() => navigate(0)} sx={styles.refreshButton}>
            <RefreshIcon />
          </ButtonBase>
          {props.children}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
