import './style.scss';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Props {
    img: string;
    depoiment: string;
    name: string;
    time: number;
}

export default function CardReview({ img, depoiment, name, time }: Props) {
    return (
        <Card component="div" className="card" data-aos="fade-up" data-aos-duration={`1${time}00`}>
            <CardMedia
                component="img"
                image={img}
                alt="Foto do cliente"
                className="cardMedia"
            />
            <CardContent>
                <Typography className="description" data-aos="fade-up" data-aos-duration={`1${time}40`}>
                    {depoiment}
                </Typography>
                <Typography className="description bold" sx={{ paddingTop: "1rem" }} data-aos="fade-up" data-aos-duration={`1${time}80`}>
                    {name}
                </Typography>
            </CardContent>
        </Card>
    )
}