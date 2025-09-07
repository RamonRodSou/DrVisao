import { Box, Typography } from "@mui/material"
import "./style.scss"
import Image, { StaticImageData } from "next/image"
import ScheduleBtn from "../scheduleBtn";

interface Props {
    highligh: string
    title: string;
    description: string;
    image: StaticImageData;
    reverse?: boolean;
}

export default function HeroSection({ highligh, title, description, image, reverse }: Props) {

    const isTrue: boolean = reverse ? reverse : false;

    return (
        <Box component="section" className="section" id="home">
            <Box component="div" maxWidth="xl" className={`box-data ${reverse ? "reverse" : ""}`}>
                <Box component="div" className="data">
                    <Box className="info">
                        <Typography className="title" data-aos="fade-up">
                            <span className="bold">{highligh}</span>{title}<span className="bold">!</span>
                        </Typography>
                        <Typography className="description" data-aos="fade-up" data-aos-duration="1000">
                            {description}
                        </Typography>
                    </Box>
                    <ScheduleBtn show={isTrue} />
                </Box>
                <Box className="box-img" data-aos="zoom-in" data-aos-duration="5000" data-aos-delay="500">
                    <Image
                        src={image}
                        width={650}
                        alt="Doutora Anotando"
                        className="img"
                    />
                </Box>
            </Box>
        </Box>
    )
}
