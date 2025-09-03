import { Box, Typography } from "@mui/material";
import CardReview from "../cardReview";
import { listReviews } from "./listReviews";

export default function Reviews() {

    return (
        <Box component="section" className="section">
            <Typography variant="h6" className="title" data-aos="fade-up">
                <span className="bold">Depoimento</span> dos clientes<span className="bold">!</span>
            </Typography>
            <Box component="div" className="list">
                {listReviews.map((it, index) => (
                    <CardReview key={index} img={it.img} depoiment={it.depoiment} name={it.name} time={index} />
                ))}
            </Box>
        </Box>
    )
}