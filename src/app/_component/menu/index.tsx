"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from '../logo';
import './style.scss'

export default function Menu() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);

    return (
        <>
            <nav className="menu">
                <div className="menu-inner">
                    <Logo />
                    <button className={`menu-toggle ${open ? "open" : ""}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul className={`menu-list ${open ? "menu-list-open" : ""}`}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/sobre">Sobre</Link></li>
                        <li><Link href="/servicos">Serviços</Link></li>
                        <li><Link href="/contato">Contato</Link></li>
                    </ul>
                </div>
            </nav>

            {open && <div className="menu-overlay" onClick={toggleMenu}></div>}
        </>
    );
}
