'use client';
import './style.scss'
import Image from 'next/image';
import logo from '@img/logo.webp'
import { Box } from '@mui/material';

export default function FooterNav() {

    function handleClick() {
        try {
            window.location.href = "https://api.whatsapp.com/send/?phone=5521973102724&text=Ol%C3%A1+Eloisa+Technosou,+poderia+me+ajudar?&type=phone_number&app_absent=0";

        } catch (error) {
            console.error("Routing Error", error)
        }
    }

    return (
        <Box className="footer" onClick={handleClick}>
            <p className='description'>© Copyright</p>
            <Image src={logo} alt="Logo Technosou Solution" width={20} />
            <p className='description'>Technosou - Since 2023</p>
        </Box>
    )
}
