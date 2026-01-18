'use client';
import { Box, Button } from "@mui/material";
import "./style.scss";
import React from "react";

interface Props {
    description?: string;
    show: boolean;
}

export default function ScheduleBtn({ description, show }: Props) {
    const descriptionBtn = description || "AGENDAR EXAMES";

    function handleSchedule() {
        const externalUrl = "https://api.whatsapp.com/send/?phone=5515997227203&text=Ol%C3%A1+tudo+bem%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+exame+de+vista.&type=phone_number&app_absent=0";

        if (typeof window !== "undefined") {
            window.location.href = externalUrl;
        }
    }

    return (
        <Box 
            component="div" 
            height={100} 
            className={`box-button ${show ? "show" : ""}`} 
            data-aos="fade-up" 
            data-aos-duration="1500"
        >
            <Button
                variant="contained"
                className="button"
                onClick={handleSchedule}
            >
                {descriptionBtn}
            </Button>
        </Box>
    );
}