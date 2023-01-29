import { Typography } from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <section className="contact">
            <div className="container">
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        textTransform: "uppercase",
                        paddingBottom: { xs: "35px", md: "50px" },
                        fontSize: { xs: "40px", md: "48px" },
                    }}>
                    Contact
                </Typography>
                <Typography variant="h4" sx={{ textAlign: "center" }} className="email">
                    <a href="mailto:sasha.brecha@gmail.com" style={{ color: "white" }}>
                        <FormattedMessage id="getInTouch" />
                    </a>
                </Typography>
            </div>
        </section>
    );
}
