import { Box, Typography } from "@mui/material"
import "./style.scss"

export default function Solution() {
    return (
        <Box component="section" className="section">
            <Typography className="title bold">
                Serviços
            </Typography>
            <Box className="container">
                <Typography variant="h6" className="options">
                    Exame Ocular
                </Typography>
                <Typography variant="h6" className="options">
                    Cirurgia
                </Typography>
                <Typography variant="h6" className="options">
                    Óculos de Grau
                </Typography>
            </Box>
        </Box>
    )
}