import Image from "next/image";
import React from 'react';
import logo from "./../../../public/logo.svg";



export default function Footer() {
    return (
        <>
        <section className="banner-style pt-6 pb-6">
            <div className="container">
                <div className="border-t border-dashed border-[#000]"></div>
                <div className="border-t border-dashed border-[#000] mt-1"></div>
                <div className="grid grid-cols-12 gap-6 pt-10">
                    <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                        <a href="#" className="max-w-[220px] block w-full sm:m-0 m-auto">
                            <Image src={logo} alt="" />
                        </a>
                    </div>
                    <div className="lg:col-span-6 col-span-12 lg:order-none sm:order-3">
                        <ul className="flex flex-wrap items-start lg:justify-center sm:justify-start justify-center lg:gap-2 gap-5 pt-sans md:text-sm text-xs">
                            <li className="lg:me-6 lg:w-auto sm:w-[45%] w-full sm:text-start text-center"><a href="#">About Us</a></li>
                            <li className="lg:me-6 lg:w-auto sm:w-[45%] w-full sm:text-start text-center"><a href="#">Our Team</a></li>
                            <li className="lg:me-6 lg:w-auto sm:w-[45%] w-full sm:text-start text-center"><a href="#">Careers</a></li>
                            <li className="lg:me-6 lg:w-auto sm:w-[45%] w-full sm:text-start text-center"><a href="#">News Partnerships</a></li>
                            <li className="lg:me-6 lg:w-auto sm:w-[45%] w-full sm:text-start text-center"><a href="#">Stacker Studio</a></li>
                            <li className="lg:me-6 lg:w-auto sm:w-[45%] w-full sm:text-start text-center"><a href="#">Editorial Standards</a></li>
                            <li className="lg:me-6 lg:w-auto sm:w-[45%] w-full sm:text-start text-center"><a href="#">Blog</a></li>
                            <li className="lg:me-6 lg:w-auto sm:w-[45%] w-full sm:text-start text-center"><a href="#">Contact Us</a></li>
                            <li className="lg:me-6 lg:w-auto sm:w-[45%] w-full sm:text-start text-center"><a href="#">Privacy Policy</a></li>
                            <li className="lg:me-6 lg:w-auto sm:w-[45%] w-full sm:text-start text-center"><a href="#">Sitemap</a></li>
                            <li className="lg:me-6 lg:w-auto sm:w-[45%] w-full sm:text-start text-center"><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-3 sm:col-span-6 col-span-12 flex sm:justify-end justify-center">
                        <ul className="header-icons list-none items-center gap-4 flex">
                            <li><a href="#"> <i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="#"> <i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"> <i className="fa-solid fa-rss"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="sm:max-w-[55%] max-w-[65%] mx-auto pt-sans border-t border-dashed bordert-[#e6e6e6] py-4 text-[#ccc] text-center mt-8 text-sm">
                    <p>© Stacker 2024. All rights reserved.</p>
                </div>
            </div>
        </section>
        </>
    );
}
