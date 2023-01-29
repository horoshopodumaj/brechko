import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LocalePicker from "./LocalePicker";
import { FormattedMessage } from "react-intl";

const drawerWidth = 240;
const navItems = ["home", "about", "projects", "contact"];

function NavBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <Typography variant="h6" sx={{ my: 2, textTransform: "uppercase" }}>
                    brechko
                </Typography>
            </Link>

            <Divider />
            <List>
                {navItems.map((item) => (
                    <a href={`#${item}`} style={{ color: "black" }} key={item}>
                        <ListItem key={item} disablePadding>
                            <ListItemButton sx={{ textAlign: "center" }}>
                                <ListItemText
                                    sx={{ textTransform: "uppercase" }}
                                    primary={<FormattedMessage id={`${item}`} />}
                                />
                            </ListItemButton>
                        </ListItem>
                    </a>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            {/* <CssBaseline /> */}
            <AppBar component="nav" sx={{ bgcolor: "black" }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                    <Link
                        to="/"
                        style={{ display: "block", textDecoration: "none", color: "white" }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                display: { xs: "block", sm: "block" },
                                textTransform: "uppercase",
                            }}>
                            brechko
                        </Typography>
                    </Link>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <a href={`#${item}`} key={item}>
                                <Button key={item} sx={{ color: "#fff" }}>
                                    <FormattedMessage id={`${item}`} />
                                </Button>
                            </a>
                        ))}
                    </Box>
                    <LocalePicker />
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}>
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default NavBar;
