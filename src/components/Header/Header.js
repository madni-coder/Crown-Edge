"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { smoothScrollTo } from "../../utils/animations";
import { useResponsive } from "../../hooks/useResponsive";
import "./Header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { isMobile, isTablet, isDesktop } = useResponsive();

    // Navigation items
    const navItems = [
        { id: "home", label: "Home", href: "#home" },
        { id: "about", label: "About", href: "#about" },
        { id: "services", label: "Services", href: "#services" },
        { id: "portfolio", label: "Portfolio", href: "#portfolio" },
        { id: "team", label: "Team", href: "#team" },
        { id: "contact", label: "Contact", href: "#contact" },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle navigation click
    const handleNavClick = (href) => {
        const targetId = href.replace("#", "");
        smoothScrollTo(targetId, 80); // 80px offset for fixed header
        setIsMenuOpen(false); // Close mobile menu
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest(".header")) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    return (
        <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
            <div className="container">
                <div className="header__content ">
                    {/* Logo on the left (size unchanged) */}
                    {/* <div className="header__logo-container ">
                            <Image
                                src="/companyLogo.png"
                                alt="Nexa Agency Logo"
                                fill
                                sizes="(max-width: 768px) 40px, 50px"
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div> */}
                    <button
                        onClick={() => handleNavClick("#home")}
                        className="header__logo-link"
                        style={{ marginRight: "auto" }} // keep logo pinned to the left in flex
                        aria-label="Nexa Agency Home"
                    ></button>

                    {/* Desktop Navigation */}
                    <nav
                        className="header__nav header__nav--desktop"
                        aria-label="Main navigation"
                    >
                        <ul className="header__nav-list">
                            {navItems.map((item) => (
                                <li key={item.id} className="header__nav-item">
                                    <button
                                        onClick={() =>
                                            handleNavClick(item.href)
                                        }
                                        className="header__nav-link"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={`header__menu-toggle ${
                            isMenuOpen ? "header__menu-toggle--active" : ""
                        }`}
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        <span className="header__menu-line"></span>
                        <span className="header__menu-line"></span>
                        <span className="header__menu-line"></span>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <nav
                    className={`header__nav header__nav--mobile ${
                        isMenuOpen ? "header__nav--mobile-open" : ""
                    }`}
                    aria-label="Mobile navigation"
                >
                    <ul className="header__nav-list header__nav-list--mobile">
                        {navItems.map((item, index) => (
                            <li
                                key={item.id}
                                className="header__nav-item header__nav-item--mobile"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <button
                                    onClick={() => handleNavClick(item.href)}
                                    className="header__nav-link header__nav-link--mobile"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className="header__overlay"
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </header>
    );
};

export default Header;
