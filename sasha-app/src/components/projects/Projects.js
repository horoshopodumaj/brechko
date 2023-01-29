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
import vyksa1 from "../../assets/img/vyksa1.jpg";
import vyksa2 from "../../assets/img/vyksa2.jpg";
import vyksa3 from "../../assets/img/vyksa3.jpg";
import vyksa4 from "../../assets/img/vyksa4.jpg";
import aigel1 from "../../assets/img/aigel1.jpg";
import aigel2 from "../../assets/img/aigel2.jpg";
import aigel3 from "../../assets/img/aigel3.jpg";
import aigel4 from "../../assets/img/aigel4.jpg";
import alone1 from "../../assets/img/alone1.jpg";
import alone2 from "../../assets/img/alone2.jpg";
import alone3 from "../../assets/img/alone3.jpg";

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
                    <Grid item xs={12} md={5} sx={{ paddingRight: { xs: "0", md: "15px" } }}>
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
                            style={{
                                color: "white",
                                marginBottom: "15px",
                                display: "inline-block",
                            }}>
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
                    <Grid item xs={12} md={5} sx={{ paddingRight: { xs: "0", md: "15px" } }}>
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
                <Grid
                    container
                    sx={{ justifyContent: "center", alignItems: "center", paddingBottom: "50px" }}>
                    <Grid item xs={12} md={5} sx={{ paddingRight: { xs: "0", md: "15px" } }}>
                        <Typography variant="h5" sx={{ pb: "5px" }}>
                            <FormattedMessage id="vyksaTitle" />
                        </Typography>
                        <Typography sx={{ pb: "20px" }}>
                            <FormattedMessage id="vyksaTime" />
                        </Typography>
                        <Typography sx={{ pb: "5px" }}>
                            <FormattedMessage id="vyksaDirector" />
                        </Typography>
                        <Typography sx={{ pb: "25px" }}>
                            <FormattedMessage id="vyksaProd" />
                        </Typography>
                        <Typography sx={{ pb: "25px", textAlign: "justify" }}>
                            <FormattedMessage id="vyksaSummary" />
                        </Typography>
                        <Link
                            to="https://disk.yandex.ru/i/PGH6wXpXPHuwMQ"
                            target="_blank"
                            style={{
                                color: "white",
                                marginBottom: "15px",
                                display: "inline-block",
                            }}>
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
                                src={vyksa1}
                                alt="mirror1"
                                style={{ maxWidth: "230px", maxHeight: "330px" }}
                            />
                            <img
                                src={vyksa2}
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
                                src={vyksa3}
                                alt="mirror3"
                                style={{ maxWidth: "230px", maxHeight: "330px" }}
                            />
                            <img
                                src={vyksa4}
                                alt="mirror4"
                                style={{ maxWidth: "230px", maxHeight: "330px" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    container
                    sx={{ justifyContent: "center", alignItems: "center", paddingBottom: "50px" }}>
                    <Grid item xs={12} md={5} sx={{ paddingRight: { xs: "0", md: "15px" } }}>
                        <Typography variant="h5" sx={{ pb: "5px" }}>
                            <FormattedMessage id="aigelTitle" />
                        </Typography>
                        <Typography sx={{ pb: "20px" }}>
                            <FormattedMessage id="aigelTime" />
                        </Typography>
                        <Typography sx={{ pb: "5px" }}>
                            <FormattedMessage id="aigelDirector" />
                        </Typography>
                        <Typography sx={{ pb: "25px" }}>
                            <FormattedMessage id="aigelDOP" />
                        </Typography>
                        <Typography sx={{ pb: "25px", textAlign: "justify" }}>
                            <FormattedMessage id="aigelSummary" />
                        </Typography>
                        <Link
                            to="https://www.youtube.com/watch?v=tE_7HeBZgYE"
                            target="_blank"
                            style={{
                                color: "white",
                                marginBottom: "15px",
                                display: "inline-block",
                            }}>
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
                                src={aigel1}
                                alt="mirror1"
                                style={{ maxWidth: "230px", maxHeight: "330px" }}
                            />
                            <img
                                src={aigel2}
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
                                src={aigel3}
                                alt="mirror3"
                                style={{ maxWidth: "230px", maxHeight: "330px" }}
                            />
                            <img
                                src={aigel4}
                                alt="mirror4"
                                style={{ maxWidth: "230px", maxHeight: "330px" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    container
                    sx={{ justifyContent: "center", alignItems: "center", paddingBottom: "50px" }}>
                    <Grid item xs={12} md={5} sx={{ paddingRight: { xs: "0", md: "15px" } }}>
                        <Typography variant="h5" sx={{ pb: "5px" }}>
                            <FormattedMessage id="aloneTitle" />
                        </Typography>
                        <Typography sx={{ pb: "20px" }}>
                            <FormattedMessage id="aloneTime" />
                        </Typography>
                        <Typography sx={{ pb: "5px" }}>
                            <FormattedMessage id="aloneDirector" />
                        </Typography>
                        <Typography sx={{ pb: "25px" }}>
                            <FormattedMessage id="aloneDOP" />
                        </Typography>
                        <Typography sx={{ pb: "25px", textAlign: "justify" }}>
                            <FormattedMessage id="aloneDress" />
                        </Typography>
                        <Typography sx={{ pb: "25px", textAlign: "justify" }}>
                            <FormattedMessage id="aloneSummary" />
                        </Typography>
                        <Link
                            to="https://vimeo.com/418091746"
                            target="_blank"
                            style={{
                                color: "white",
                                marginBottom: "15px",
                                display: "inline-block",
                                marginRight: "10px",
                            }}>
                            <Button
                                variant="outlined"
                                color="inherit"
                                sx={{
                                    "&:hover": { color: "black", background: "white" },
                                }}>
                                <Typography>
                                    <FormattedMessage id="alonePart1" />
                                </Typography>
                            </Button>
                        </Link>
                        <Link
                            to="https://vimeo.com/418089194"
                            target="_blank"
                            style={{
                                color: "white",
                                marginBottom: "15px",
                                display: "inline-block",
                                marginRight: "10px",
                            }}>
                            <Button
                                variant="outlined"
                                color="inherit"
                                sx={{
                                    "&:hover": { color: "black", background: "white" },
                                }}>
                                <Typography>
                                    <FormattedMessage id="alonePart2" />
                                </Typography>
                            </Button>
                        </Link>
                        <Link
                            to="https://vimeo.com/418088189?embedded=true&source=vimeo_logo&owner=94203207"
                            target="_blank"
                            style={{
                                color: "white",
                                marginBottom: "15px",
                                display: "inline-block",
                                marginRight: "10px",
                            }}>
                            <Button
                                variant="outlined"
                                color="inherit"
                                sx={{
                                    "&:hover": { color: "black", background: "white" },
                                }}>
                                <Typography>
                                    <FormattedMessage id="alonePart3" />
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
                                src={alone1}
                                alt="mirror1"
                                style={{ maxWidth: "230px", maxHeight: "330px" }}
                            />
                            <img
                                src={alone2}
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
                                src={alone3}
                                alt="mirror3"
                                style={{ maxWidth: "230px", maxHeight: "330px" }}
                            />
                            {/* <img
                                src={aigel4}
                                alt="mirror4"
                                style={{ maxWidth: "230px", maxHeight: "330px" }}
                            /> */}
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
}
