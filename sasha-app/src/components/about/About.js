import { Box, Typography } from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";

export default function About() {
    return (
        <section className="about" id="about">
            <div className="wpapper">
                <div className="container">
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: "center",
                            textTransform: "uppercase",
                            paddingBottom: { xs: "35px", md: "50px" },
                            fontSize: { xs: "40px", md: "48px" },
                        }}>
                        <FormattedMessage id="about" />
                    </Typography>
                    <Box sx={{ pb: "70px", maxWidth: { xs: "100%", md: "500px" } }}>
                        <Typography
                            variant="h4"
                            sx={{
                                pb: "20px",
                                textAlign: { xs: "center", md: "left" },
                                fontSize: { xs: "28px", md: "34px" },
                            }}>
                            <FormattedMessage id="education" />
                        </Typography>
                        <Typography sx={{ pb: "10px", fontSize: "18px", textAlign: "justify" }}>
                            <FormattedMessage id="firstEducat" />
                        </Typography>
                        <Typography sx={{ pb: "10px", fontSize: "18px", textAlign: "justify" }}>
                            <FormattedMessage id="secondEducat" />
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            maxWidth: { xs: "100%", md: "500px" },
                            float: { xs: "none", md: "right" },
                        }}>
                        <Typography
                            variant="h4"
                            sx={{
                                pb: "20px",
                                textAlign: { xs: "center", md: "left" },
                                fontSize: { xs: "28px", md: "34px" },
                            }}>
                            <FormattedMessage id="experience" />
                        </Typography>
                        <Typography sx={{ pb: "10px", fontSize: "18px", textAlign: "justify" }}>
                            <FormattedMessage id="firstExp" />
                        </Typography>
                        <Typography sx={{ pb: "10px", fontSize: "18px", textAlign: "justify" }}>
                            <FormattedMessage id="secondExp" />
                        </Typography>
                        <Typography sx={{ pb: "10px", fontSize: "18px", textAlign: "justify" }}>
                            <FormattedMessage id="thirdExp" />
                        </Typography>
                    </Box>
                </div>
            </div>
        </section>
    );
}
