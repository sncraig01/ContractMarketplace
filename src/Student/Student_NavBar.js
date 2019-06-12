import Tooltip from "@material-ui/core/Tooltip";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Home from "@material-ui/icons/Home";
import Store from "@material-ui/icons/Store";
import ExitToApp from "@material-ui/icons/ExitToApp";
import MoreIcon from "@material-ui/icons/MoreVert";
import GroupIcon from "@material-ui/icons/Group";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  company: {
    marginRight: theme.spacing(5)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  fab: {
    margin: theme.spacing(2)
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3)
  }
}));

function StudentNavBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    />
  );

  const studentDashboardClicked = e => {
    // Redirects to admin home page
    props.history.push("/studentdashboard");
  };

  const marketplaceClicked = e => {
    // Redirects to marketplace page
    props.history.push("/marketplace");
  };

  const studentCommunityClicked = e => {
    // Redirects to marketplace page
    props.history.push("/studentcommunity");
  };

  const logoutClicked = e => {
    // Redirects to landing page
    props.history.push("/");
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit" onClick={() => studentDashboardClicked()}>
          <Home />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit" onClick={() => marketplaceClicked()}>
          <Store />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit" onClick={() => studentCommunityClicked()}>
          <GroupIcon />
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton color="inherit" onClick={() => logoutClicked()}>
          <ExitToApp />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className={classes.company}
            variant="h5"
            noWrap
            style={{ fontSize: "26px" }}
          >
            RevTek
          </Typography>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Tooltip title="Dashboard">
              <IconButton
                color="inherit"
                onClick={() => studentDashboardClicked()}
              >
                <Home />
              </IconButton>
            </Tooltip>
            <Tooltip title="Contract Marketplace">
              <IconButton color="inherit" onClick={() => marketplaceClicked()}>
                <Store />
              </IconButton>
            </Tooltip>
            <Tooltip title="Student Community">
              <IconButton
                color="inherit"
                onClick={() => studentCommunityClicked()}
              >
                <GroupIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Logout">
              <IconButton color="inherit" onClick={() => logoutClicked()}>
                <ExitToApp />
              </IconButton>
            </Tooltip>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderMobileMenu}
    </div>
  );
}

export default StudentNavBar;
