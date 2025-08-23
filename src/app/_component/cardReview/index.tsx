import './style.scss';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Props {
    img: string;
    depoiment: string;
    name: string;
}

export default function CardReview({ img, depoiment, name }: Props) {
    return (
        <Card component="div" className="card">
            <CardMedia
                component="img"
                image={img}
                alt="Foto do cliente"
                className="cardMedia"
            />
            <CardContent>
                <Typography className="description">
                    {depoiment}
                </Typography>
                <Typography className="description bold" sx={{ paddingTop: "1rem" }}>
                    {name}
                </Typography>
            </CardContent>
        </Card>
    )
}