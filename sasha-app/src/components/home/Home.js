import { Box, ImageList, Typography } from "@mui/material";
import React from "react";
import mainFoto from "../../assets/img/main.jpg";

export default function Home() {
    return (
        <section className="home" id="home">
            <div className="container">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: "50px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Box sx={{ maxWidth: 350, maxHeight: 350 }}>
                        <img style={{ maxWidth: "100%", height: "auto" }} src={mainFoto} />
                    </Box>

                    <Box sx={{ color: "white" }}>
                        <Typography
                            variant="h3"
                            sx={{ textAlign: "center", fontSize: { xs: "36px", md: "48px" } }}>
                            ALEXANDRA BRECHKO{" "}
                        </Typography>
                        <Typography
                            sx={{ fontSize: { xs: "18px", md: "20px" }, textAlign: "center" }}>
                            Freelance video & photo producer, post-production producer
                        </Typography>
                    </Box>
                </Box>
            </div>
        </section>
    );
}
