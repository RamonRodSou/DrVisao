import './style.scss'
import logoImg from '@img/00_logo.png';
import Image from 'next/image';

export default function Logo() {
    return (
        <div>
            <Image
                src={logoImg}
                alt="Logo Doutor Visão"
                className='logo'
            />
        </div>
    )
}