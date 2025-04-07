import React, { useState } from "react";
import { assets } from "../assets/assets";
import 'boxicons';
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <div className="sticky top-0 z-50 bg-white shadow-lg">
            <div className="flex items-center justify-between py-4 px-6 md:px-8">
                {/* Logo */}
                <Link to="/">
                    <img
                        src={assets.treasurit_logo}
                        alt="Logo"
                        className="w-20 h-10 cursor-pointer"
                    />
                </Link>

                {/* Hamburger Menu Button */}
                <button 
                    className="md:hidden text-gray-800"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <box-icon name={mobileMenuOpen ? "x" : "menu"} size="md"></box-icon>
                </button>

                {/* Navigation Links (Desktop) */}
                <div className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
                    <Link to="/about" className="hover:text-blue-500">About Us</Link>

                    <div className="relative">
                        <button
                            className="flex items-center hover:text-blue-500"
                            onClick={() => toggleDropdown("escrow")}
                        >
                            Escrow Use Cases
                            <img
                                src={assets.dropdown_icon}
                                alt="Dropdown"
                                className={`ml-2 w-4 transition-transform duration-300 ${openDropdown === "escrow" ? "rotate-180" : ""}`}
                            />
                        </button>
                        {openDropdown === "escrow" && (
                            <div className="absolute left-0 mt-2 w-80 bg-white shadow-lg border rounded-lg">
                                <ul className="py-2">
                                    {[
                                        { name: "Diaspora Protection", link: "/escrow/diaspora-protection" },
                                        { name: "B2B, B2C, C2C Use Cases", link: "/escrow/b2b-b2c-c2c" },
                                        { name: "Enterprise B2C", link: "/escrow/enterprise-b2c" },
                                        { name: "B2G Use Cases", link: "/escrow/b2g" },
                                        { name: "Agency Escrow", link: "/escrow/agency" },
                                        { name: "Import/Export Use Cases", link: "/escrow/import-export" },
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 hover:bg-blue-100 hover:text-blue-600 cursor-pointer"
                                        >
                                            <Link to={item.link}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Icons */}
                <div className="hidden md:flex items-center gap-6">
                    <img src={assets.phone} alt="Phone" className="cursor-pointer w-6 hover:scale-105 transition-transform duration-300" />
                    <Link to='/login'><img src={assets.login_icon} alt="Login" className="cursor-pointer w-6 hover:scale-105 transition-transform duration-300" /></Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg border-t px-6 py-4">
                    <Link to="/about" className="block py-2 hover:text-blue-500">About Us</Link>

                    <div>
                        <button
                            className="flex items-center w-full hover:text-blue-500"
                            onClick={() => toggleDropdown("escrow")}
                        >
                            Escrow Use Cases
                            <img
                                src={assets.dropdown_icon}
                                alt="Dropdown"
                                className={`ml-2 w-4 transition-transform duration-300 ${openDropdown === "escrow" ? "rotate-180" : ""}`}
                            />
                        </button>
                        {openDropdown === "escrow" && (
                            <ul className="mt-2 bg-white shadow-lg border rounded-lg">
                                {[
                                    { name: "Diaspora Protection", link: "/escrow/diaspora-protection" },
                                    { name: "B2B, B2C, C2C Use Cases", link: "/escrow/b2b-b2c-c2c" },
                                    { name: "Enterprise B2C", link: "/escrow/enterprise-b2c" },
                                    { name: "B2G Use Cases", link: "/escrow/b2g" },
                                    { name: "Agency Escrow", link: "/escrow/agency" },
                                    { name: "Import/Export Use Cases", link: "/escrow/import-export" },
                                ].map((item, index) => (
                                    <li key={index} className="px-4 py-2 hover:bg-blue-100 hover:text-blue-600 cursor-pointer">
                                        <Link to={item.link}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            )}

            {/* Divider */}
            <div className="h-[1px] bg-gray-200" />
        </div>
    );
};

export default Navbar;