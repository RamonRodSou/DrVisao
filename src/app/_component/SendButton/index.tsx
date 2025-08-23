'use client';
import { Box, Button } from "@mui/material"
import "./style.scss"
import React from "react";

interface Prop {
    description?: string;
    show: boolean;
}

export default function SendButton({ description, show }: Prop) {

    const descriptionBtn = description ? description : "AGENDAR EXAMES";

    function handleSchedule() {
        alert("Agendou")
    }

    return (
        <Box component="div" height={100} className={`box-button ? ${show ? "show" : ""}`}>
            <Button
                variant="contained"
                className="button"
                onClick={handleSchedule}
            >
                {descriptionBtn}
            </Button>
        </Box >
    )
}