import { Typography } from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        textTransform: "uppercase",
                        paddingBottom: { xs: "35px", md: "20px" },
                        fontSize: { xs: "40px", md: "48px" },
                        paddingTop: { xs: "80px", md: "130px" },
                    }}>
                    <FormattedMessage id="contact" />
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        paddingBottom: { xs: "380px", sm: "460px", md: "560px" },
                    }}
                    className="email">
                    <a href="mailto:sasha.brecha@gmail.com" style={{ color: "white" }}>
                        <FormattedMessage id="getInTouch" />
                    </a>
                </Typography>
            </div>
        </section>
    );
}
