import { Box, Typography } from "@mui/material"
import "./style.scss"

export default function Solution() {
    return (
        <Box id="solution" component="section" className="section">
            <Typography className="title bold" data-aos="fade-up">
                Serviços
            </Typography>
            <Box className="container">
                <Typography variant="h6" className="options" data-aos="fade-up" data-aos-duration="1000">
                    Exame Ocular
                </Typography>
                <Typography variant="h6" className="options" data-aos="fade-up" data-aos-duration="1200">
                    Cirurgia
                </Typography>
                <Typography variant="h6" className="options" data-aos="fade-up" data-aos-duration="1400">
                    Óculos de Grau
                </Typography>
            </Box>
        </Box>
    )
}