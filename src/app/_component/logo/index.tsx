import './style.scss'
import logoImg from '@img/00_logo.png';
import { Box } from '@mui/material';
import Image from 'next/image';

export default function Logo() {
    return (
        <Box component="div">
            <Image
                src={logoImg}
                alt="Logo Doutor Visão"
                className='logo'
            />
        </Box>
    )
}