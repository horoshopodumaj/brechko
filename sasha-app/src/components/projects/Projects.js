import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import mirror1 from "../../assets/img/mirror1.jpeg";
import mirror2 from "../../assets/img/mirror2.jpeg";
import mirror3 from "../../assets/img/mirror3.jpeg";
import mirror4 from "../../assets/img/mirror4.jpeg";
import etnos1 from "../../assets/img/etnos1.jpg";
import etnos2 from "../../assets/img/etnos2.jpg";
import etnos3 from "../../assets/img/etnos3.jpg";
import etnos4 from "../../assets/img/etnos4.jpg";

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        textTransform: "uppercase",
                        paddingBottom: { xs: "35px", md: "50px" },
                        fontSize: { xs: "40px", md: "48px" },
                    }}>
                    <FormattedMessage id="projects" />
                </Typography>
                <Grid
                    container
                    sx={{ justifyContent: "center", alignItems: "center", paddingBottom: "50px" }}>
                    <Grid item xs={12} md={5} pr="15px">
                        <Typography variant="h5" sx={{ pb: "5px" }}>
                            <FormattedMessage id="mirrorTitle" />
                        </Typography>
                        <Typography sx={{ pb: "20px" }}>
                            <FormattedMessage id="mirrorTime" />
                        </Typography>
                        <Typography sx={{ pb: "5px" }}>
                            <FormattedMessage id="mirrorDirector" />
                        </Typography>
                        <Typography sx={{ pb: "25px" }}>
                            <FormattedMessage id="mirrorDOP" />
                        </Typography>
                        <Typography sx={{ pb: "25px", textAlign: "justify" }}>
                            <FormattedMessage id="mirrorSummary" />
                        </Typography>
                        <Typography sx={{ pb: "15px", textAlign: "justify" }}>
                            <FormattedMessage id="mirrorStarring" />
                        </Typography>
                        <Link
                            to="https://disk.yandex.ru/i/zta6nTaVY3v1pg"
                            target="_blank"
                            style={{ color: "white", marginBottom: "15px", display: "block" }}>
                            <Button
                                variant="outlined"
                                color="inherit"
                                sx={{
                                    "&:hover": { color: "black", background: "white" },
                                }}>
                                <Typography>
                                    <FormattedMessage id="mirrorTrailer" />
                                </Typography>
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={7} sx={{ textAlign: "center" }}>
                        <Box
                            sx={{
                                pb: "20px",
                                display: "flex",
                                gap: { xs: "10px", sm: "20px" },
                                justifyContent: "center",
                                flexDirection: { xs: "column", sm: "row" },
                                alignItems: "center",
                            }}>
                            <img
                                src={mirror1}
                                alt="mirror1"
                                style={{ maxWidth: "230px", maxHeight: "330px" }}
                            />
                            <img
                                src={mirror2}
                                alt="mirror2"
                                style={{ maxWidth: "230px", maxHeight: "330px" }}
                            />
                        </Box>
                        <Box
                            sx={{
                                pb: "20px",
                                display: "flex",
                                gap: "20px",
                                justifyContent: "center",
                                flexDirection: { xs: "column", sm: "row" },
                                alignItems: "center",
                            }}>
                            <img
                                src={mirror3}
                                alt="mirror3"
                                style={{ maxWidth: "230px", maxHeight: "330px" }}
                            />
                            <img
                                src={mirror4}
                                alt="mirror4"
                                style={{ maxWidth: "230px", maxHeight: "330px" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    container
                    sx={{ justifyContent: "center", alignItems: "center", paddingBottom: "50px" }}>
                    <Grid item xs={12} md={5} pr="15px">
                        <Typography variant="h5" sx={{ pb: "5px" }}>
                            <FormattedMessage id="etnosTitle" />
                        </Typography>
                        <Typography sx={{ pb: "20px" }}>
                            <FormattedMessage id="etnosTime" />
                        </Typography>
                        <Typography sx={{ pb: "5px" }}>
                            <FormattedMessage id="etnosDirector" />
                        </Typography>
                        <Typography sx={{ pb: "25px" }}>
                            <FormattedMessage id="etnosProd" />
                        </Typography>
                        <Typography sx={{ pb: "25px" }}>
                            <FormattedMessage id="etnosDOP" />
                        </Typography>
                        <Typography sx={{ pb: "25px", textAlign: "justify" }}>
                            <FormattedMessage id="etnosSummary" />
                        </Typography>
                        <Typography sx={{ pb: "15px", textAlign: "justify" }}>
                            <FormattedMessage id="etnosTrailer" />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={7} sx={{ textAlign: "center" }}>
                        <Box
                            sx={{
                                pb: "20px",
                                display: "flex",
                                gap: { xs: "10px", sm: "20px" },
                                justifyContent: "center",
                                flexDirection: { xs: "column", sm: "row" },
                                alignItems: "center",
                            }}>
                            <img
                                src={etnos1}
                                alt="mirror1"
                                style={{ maxWidth: "230px", maxHeight: "330px" }}
                            />
                            <img
                                src={etnos2}
                                alt="mirror2"
                                style={{ maxWidth: "230px", maxHeight: "330px" }}
                            />
                        </Box>
                        <Box
                            sx={{
                                pb: "20px",
                                display: "flex",
                                gap: "20px",
                                justifyContent: "center",
                                flexDirection: { xs: "column", sm: "row" },
                                alignItems: "center",
                            }}>
                            <img
                                src={etnos3}
                                alt="mirror3"
                                style={{ maxWidth: "230px", maxHeight: "330px" }}
                            />
                            <img
                                src={etnos4}
                                alt="mirror4"
                                style={{ maxWidth: "230px", maxHeight: "330px" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
}
