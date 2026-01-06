"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { smoothScrollTo } from "../../utils/animations";
import "./Header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Navigation items with proper routes
    const navItems = [
        { id: "home", label: "Home", href: "/" },
        { id: "about", label: "About", href: "/about" },
        { id: "services", label: "Services", href: "/services" },
        { id: "portfolio", label: "Portfolio", href: "/portfolio" },
        { id: "team", label: "Team", href: "/team" },
        { id: "contact", label: "Contact", href: "/contact" },
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

    // Handle navigation click - scroll to section if on home page
    const handleNavClick = (item, e) => {
        // If we're on the home page, scroll to the section
        if (pathname === "/") {
            e.preventDefault();
            const targetId = item.id;
            smoothScrollTo(targetId, 80); // 80px offset for fixed header
        }
        // Otherwise, let the Link navigate to the route
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
                    {/* Logo on the left */}
                    <Link
                        href="/"
                        className="header__logo-link"
                        aria-label="Crown Edge Technologies Home"
                    >
                        <div className="header__logo-container">
                            <Image
                                src="/companyLogo.png"
                                alt="Crown Edge Technologies Logo"
                                width={40}
                                height={40}
                                style={{ objectFit: "contain" }}
                                priority
                            />

                            <span
                                className="header__logo-text"
                                style={{ marginLeft: "8px" }}
                            >
                                Crown Edge Technologies
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav
                        className="header__nav header__nav--desktop"
                        aria-label="Main navigation"
                    >
                        <ul className="header__nav-list">
                            {navItems.map((item) => (
                                <li key={item.id} className="header__nav-item">
                                    <Link
                                        href={item.href}
                                        onClick={(e) =>
                                            handleNavClick(item, e)
                                        }
                                        className="header__nav-link"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={`header__menu-toggle ${isMenuOpen ? "header__menu-toggle--active" : ""
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
                    className={`header__nav header__nav--mobile ${isMenuOpen ? "header__nav--mobile-open" : ""
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
                                <Link
                                    href={item.href}
                                    onClick={(e) => handleNavClick(item, e)}
                                    className="header__nav-link header__nav-link--mobile"
                                >
                                    {item.label}
                                </Link>
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
