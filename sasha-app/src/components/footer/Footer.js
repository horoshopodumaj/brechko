import { Box, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                        <Typography
                            variant="h6"
                            sx={{
                                my: 2,
                                textTransform: "uppercase",
                                margin: 0,
                                marginBottom: { xs: "15px", sm: "0px" },
                            }}>
                            brechko
                        </Typography>
                    </Link>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <List
                            sx={{
                                display: "flex",
                                justifyContent: { xs: "center", sm: "flex-end" },
                                padding: 0,
                                paddingBottom: "15px",
                            }}>
                            <Link to="https://www.instagram.com/brecha_s" target="_blank">
                                <ListItem sx={{ padding: 0, paddingRight: "10px" }}>
                                    <ListItemIcon
                                        sx={{
                                            minWidth: "fit-content",
                                        }}>
                                        <InstagramIcon
                                            sx={{
                                                "&.MuiSvgIcon-root:hover": {
                                                    color: "#FE4EDA",
                                                },
                                                color: "white",
                                            }}
                                        />
                                    </ListItemIcon>
                                </ListItem>
                            </Link>
                            <Link to="/">
                                <ListItem sx={{ padding: 0, paddingRight: "10px" }}>
                                    <ListItemIcon
                                        sx={{
                                            minWidth: "fit-content",
                                        }}>
                                        <FacebookIcon
                                            sx={{
                                                "&.MuiSvgIcon-root:hover": {
                                                    color: "#1877F2",
                                                },
                                                color: "white",
                                            }}
                                        />
                                    </ListItemIcon>
                                </ListItem>
                            </Link>
                            <Link to="https://t.me/SashaBrecha" target="_blank">
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemIcon
                                        sx={{
                                            minWidth: "fit-content",
                                        }}>
                                        <TelegramIcon
                                            sx={{
                                                "&.MuiSvgIcon-root:hover": {
                                                    color: "#1D9BF0",
                                                },
                                                color: "white",
                                            }}
                                        />
                                    </ListItemIcon>
                                </ListItem>
                            </Link>
                        </List>
                        <Typography sx={{ textAlign: "center" }}>
                            Copyright 2023. All Rights Reserved
                        </Typography>
                    </Box>
                </Box>
            </div>
        </footer>
    );
}
