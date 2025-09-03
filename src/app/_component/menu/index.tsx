"use client";
import { useState } from "react";
import Logo from '../logo';
import './style.scss'
import { Box } from "@mui/material";

export default function Menu() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);

    return (
        <>
            <nav className="menu">
                <Box component="section" className="menu-inner">
                    <Logo />
                    <button className={`menu-toggle ${open ? "open" : ""}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className={`menu-list ${open ? "menu-list-open" : ""}`}>
                        <li>
                            <a href="#top" onClick={() => setOpen(false)}>Home</a>
                        </li>
                        <li>
                            <a href="#solution" onClick={() => setOpen(false)}>Serviços</a>
                        </li>
                        <li>
                            <a href="#talkToUs" onClick={() => setOpen(false)}>Agendamento</a>
                        </li>
                        <li>
                            <a
                                href={process.env.NEXT_PUBLIC_WHATSAPPS_MSG}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setOpen(false)}
                            >
                                Contato
                            </a>
                        </li>
                    </ul>

                </Box>
            </nav>

            {open && <Box component="span" className="menu-overlay" onClick={toggleMenu}></Box>}
        </>
    );
}
