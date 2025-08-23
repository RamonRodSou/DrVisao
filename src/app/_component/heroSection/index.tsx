import { Box, Button, Typography } from "@mui/material"
import "./style.scss"
import Image, { StaticImageData } from "next/image"
import SendButton from "../SendButton";
import { reverse } from "dns";

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
        <section>
            <Box maxWidth="xl" className={`container ${reverse ? "reverse" : ""}`}>
                <Box className="data">
                    <Box className="info">
                        <Typography className="title">
                            <span>{highligh}</span>{title}<span>!</span>
                        </Typography>
                        <Typography className="description">
                            {description}
                        </Typography>
                    </Box>
                    <SendButton show={isTrue} />
                </Box>
                <Box className="box-img">
                    <Image
                        src={image}
                        width={650}
                        alt="Doutora Anotando"
                        className="img"
                    />
                </Box>
            </Box>
        </section>
    )
}
