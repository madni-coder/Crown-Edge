"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "../../lib/gsap";
import { smoothScrollTo } from "../../utils/animations";
import { useEnquireNow } from "../../context/EnquireNowContext";
import { useMagnetic } from "../../hooks/useMagnetic";
import "./Header.css";

const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/services" },
    { id: "portfolio", label: "Work", href: "/portfolio" },
    { id: "about", label: "About", href: "/about" },
    { id: "contact", label: "Contact", href: "/contact" },
];

const menuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
};

const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const logoRef = useRef(null);
    const { openEnquiry } = useEnquireNow();
    const magnetic = useMagnetic(0.3);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!logoRef.current) return;
        gsap.fromTo(
            logoRef.current,
            { opacity: 0, y: -16, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out", delay: 0.1 }
        );
    }, []);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const handleNavClick = (item, e) => {
        if (pathname === "/") {
            e.preventDefault();
            smoothScrollTo(item.id, 88);
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
            <div className="container">
                <div className="header__content">
                    <Link
                        href="/"
                        className="header__logo-link"
                        aria-label="Crown Edge Technologies Home"
                        data-cursor="Home"
                    >
                        <div className="header__logo-container" ref={logoRef}>
                            <Image
                                src="/companyLogo.png"
                                alt="Crown Edge Technologies Logo"
                                width={160}
                                height={62}
                                style={{ objectFit: "contain", height: "72px", width: "auto" }}
                                priority
                            />
                        </div>
                    </Link>

                    <nav className="header__nav header__nav--desktop" aria-label="Main navigation">
                        <ul className="header__nav-list">
                            {navItems.map((item) => (
                                <li key={item.id} className="header__nav-item">
                                    <Link
                                        href={item.href}
                                        onClick={(e) => handleNavClick(item, e)}
                                        className="header__nav-link"
                                        data-cursor="View"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button
                        ref={magnetic.ref}
                        onMouseMove={magnetic.onMouseMove}
                        onMouseLeave={magnetic.onMouseLeave}
                        onClick={() => openEnquiry()}
                        className="header__cta btn btn-primary header__nav--desktop-only"
                        data-cursor="Go"
                        type="button"
                    >
                        Start a Project
                    </button>

                    <button
                        className={`header__menu-toggle ${isMenuOpen ? "header__menu-toggle--active" : ""}`}
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        type="button"
                    >
                        <span className="header__menu-line" />
                        <span className="header__menu-line" />
                        <span className="header__menu-line" />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        className="header__mobile-menu"
                        aria-label="Mobile navigation"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                    >
                        <motion.ul
                            className="header__mobile-list"
                            variants={listVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {navItems.map((item) => (
                                <motion.li key={item.id} variants={itemVariants}>
                                    <Link
                                        href={item.href}
                                        onClick={(e) => handleNavClick(item, e)}
                                        className="header__mobile-link"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li variants={itemVariants}>
                                <button
                                    className="btn btn-primary header__mobile-cta"
                                    type="button"
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        openEnquiry();
                                    }}
                                >
                                    Start a Project
                                </button>
                            </motion.li>
                        </motion.ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
