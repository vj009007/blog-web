import Image from "next/image";
import React from 'react';
import adImage from  "./../images/ad.jpeg";
import adImage2 from  "./../images/ad2.jpeg";
import adImage3 from  "./../images/ad3.jpeg";
import smallImage from './../images/fff.png';
import bigImage from './../images/fff 1.png';
import bannerImg from './../images/new-img.jpeg';



export default function Grid() {
    return (
        <>
        <div className="grid-wrapper">
            <section className="banner-style pt-10">
                <div className="container">
                    <div className="grid grid-cols-12 mx-auto gap-y-6 md:gap-8">
                        <div className="lg:col-span-3 col-span-12 lg:border-r border-dashed border-[#e6e6e6] md:pe-4">
                            <article className="border-b border-dashed border-[#e6e6e6] pb-5 mb-6">
                                <a href="./single-page">
                                    <Image src={smallImage} alt="images" />
                                </a>
                                <a href="#" className="tag-base">MOVIES</a>
                                <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                            </article>
                            <article className="border-b border-dashed border-[#e6e6e6] pb-5 mb-6">
                                <a href="#">
                                    <Image src={smallImage} alt="images" />
                                </a>
                                <a href="#" className="tag-base">MOVIES</a>
                                <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                            </article>
                            <article className="mt-6 border-b border-dashed border-[#e6e6e6] pb-5 mb-6">
                                <Image src={adImage2} alt="images" />
                            </article>
                            <article className="border-b border-dashed border-[#e6e6e6] pb-5 mb-6">
                                <a href="#">
                                    <Image src={smallImage} alt="images" />
                                </a>
                                <a href="#" className="tag-base">MOVIES</a>
                                <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                            </article>
                            <article className="mt-6">
                                    <Image src={adImage} alt="images" />
                            </article>
                        </div>
                        <div className="lg:col-span-6 col-span-12 order-[-1] lg:order-none lg:-mx-4">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 gallery-grid">
                                <div className="grid gap-6">
                                    <div className="relative">
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                                        <div className="overlay-content">
                                            <a href="#" className="tag-base">MOVIES</a>
                                            <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                                        <div className="overlay-content">
                                            <a href="#" className="tag-base">MOVIES</a>
                                            <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                                        <div className="overlay-content">
                                            <a href="#" className="tag-base">MOVIES</a>
                                            <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-6">
                                    <div className="relative">
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                                        <div className="overlay-content">
                                            <a href="#" className="tag-base">MOVIES</a>
                                            <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                                        <div className="overlay-content">
                                            <a href="#" className="tag-base">MOVIES</a>
                                            <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                                        <div className="overlay-content">
                                            <a href="#" className="tag-base">MOVIES</a>
                                            <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-6">
                                    <div className="relative">
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                                        <div className="overlay-content">
                                            <a href="#" className="tag-base">MOVIES</a>
                                            <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                                        <div className="overlay-content">
                                            <a href="#" className="tag-base">MOVIES</a>
                                            <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                                        <div className="overlay-content">
                                            <a href="#" className="tag-base">MOVIES</a>
                                            <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-6">
                                    <div className="relative">
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                                        <div className="overlay-content">
                                            <a href="#" className="tag-base">MOVIES</a>
                                            <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                                        <div className="overlay-content">
                                            <a href="#" className="tag-base">MOVIES</a>
                                            <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                                        <div className="overlay-content">
                                            <a href="#" className="tag-base">MOVIES</a>
                                            <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3 col-span-12 lg:border-l border-dashed border-[#e6e6e6] lg:ps-4">
                            <div className="grid gap-3 grid-cols-12 border-b border-dashed border-[#e6e6e6] pb-3 mb-4">
                                <div className="lg:col-span-5 col-span-6">
                                    <div className="relative">
                                        <a href="#">
                                            <Image src={smallImage} alt="images" />
                                        </a>
                                        <a href="##" className="badge-small absolute bottom-4 left-1/2 translate-x-[-50%]">Stacker Studio</a>
                                    </div>
                                </div>
                                <div className="lg:col-span-7 col-span-6">
                                    <a href="#" className="tag-base">MOVIES</a>
                                    <h3><a href="#">In some school districts, it's the end of the snow day</a></h3>
                                </div>
                            </div>
                            <div className="grid gap-3 grid-cols-12 border-b border-dashed border-[#e6e6e6] pb-3 mb-4">
                                <div className="lg:col-span-5 col-span-6">
                                    <div className="relative">
                                        <a href="#">
                                            <Image src={smallImage} alt="images" />
                                        </a>
                                        <a href="##" className="badge-small absolute bottom-4 left-1/2 translate-x-[-50%]">Stacker Studio</a>
                                    </div>
                                </div>
                                <div className="lg:col-span-7 col-span-6">
                                    <a href="#" className="tag-base">MOVIES</a>
                                    <h3><a href="#">In some school districts, it's the end of the snow day</a></h3>
                                </div>
                            </div>
                            <div className="grid gap-3 grid-cols-12 border-b border-dashed border-[#e6e6e6] pb-3 mb-4">
                                <div className="lg:col-span-5 col-span-6">
                                    <div className="relative">
                                        <a href="#">
                                            <Image src={smallImage} alt="images" />
                                        </a>
                                        <a href="##" className="badge-small absolute bottom-4 left-1/2 translate-x-[-50%]">Stacker Studio</a>
                                    </div>
                                </div>
                                <div className="lg:col-span-7 col-span-6">
                                    <a href="#" className="tag-base">MOVIES</a>
                                    <h3><a href="#">In some school districts, it's the end of the snow day</a></h3>
                                </div>
                            </div>
                            <article className="border-b border-dashed border-[#e6e6e6] pb-5 mb-6">
                                <a href="#">
                                    <Image src={smallImage} alt="images" /> 
                                </a>
                                <a href="#" className="tag-base">MOVIES</a>
                                <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                            </article>
                            <article className="border-b border-dashed border-[#e6e6e6] pb-5 mb-6">
                                <a href="#">
                                    <Image src={smallImage} alt="images" /> 
                                </a>
                                <a href="#" className="tag-base">MOVIES</a>
                                <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                            </article>
                            <article className="border-b border-dashed border-[#e6e6e6] pb-5 mb-6 mt-6">
                                    <Image src={adImage} alt="images" />
                            </article>
                            <article className="border-b border-dashed border-[#e6e6e6] pb-5 mb-6">
                                <a href="#">
                                    <Image src={smallImage} alt="images" /> 
                                </a>
                                <a href="#" className="tag-base">MOVIES</a>
                                <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                            </article>
                            <article className="mt-6">
                                    <Image src={adImage} alt="images" />
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            
        
            <section className="py-10">
                <div className="container">
                    <div className="grid gap-8 grid-cols-12">
                        <div className="lg:col-span-3 md:col-span-6 col-span-12 border-t border-dashed border-[#e6e6e6] pt-6">
                            <p className="text-[#3f3ba6] mb-4 text-[1.3333333334rem]">News</p>
                            <article>
                                <div className="relative">
                                    <a href="#">
                                        <Image src={smallImage} alt="images" />
                                    </a>
                                    <a href="##" className="badge-large absolute bottom-8 left-1/2 translate-x-[-50%]">Stacker Studio</a>
                                </div>
                                <div className="mt-2">
                                    <a href="#" className="tag-base">MOVIES</a>
                                    <h2><a href="#"> 1st How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                                </div>
                            </article>
                        </div>
                        <div className="lg:col-span-3 md:col-span-6 col-span-12 border-t border-dashed border-[#e6e6e6] pt-6 border-line">
                            <p className="text-[#3f3ba6] mb-4 text-[1.3333333334rem]">Sports</p>
                            <article>
                                <div className="relative">
                                    <a href="#">
                                        <Image src={smallImage} alt="images" />
                                    </a>
                                    <a href="##" className="badge-large absolute bottom-8 left-1/2 translate-x-[-50%]">Stacker Studio</a>
                                </div>
                                <div className="mt-2">
                                    <a href="#" className="tag-base">MOVIES</a>
                                    <h2><a href="#"> 1st How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                                </div>
                            </article>
                        </div>
                        <div className="lg:col-span-3 md:col-span-6 col-span-12 border-t border-dashed border-[#e6e6e6] pt-6 border-line">
                            <p className="text-[#3f3ba6] mb-4 text-[1.3333333334rem]">Movies</p>
                            <article>
                                <div className="relative">
                                    <a href="#">
                                        <Image src={smallImage} alt="images" />
                                    </a>
                                    <a href="##" className="badge-large absolute bottom-8 left-1/2 translate-x-[-50%]">Stacker Studio</a>
                                </div>
                                <div className="mt-2">
                                    <a href="#" className="tag-base">MOVIES</a>
                                    <h2><a href="#"> 1st How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                                </div>
                            </article>
                        </div>
                        <div className="lg:col-span-3 md:col-span-6 col-span-12 border-t border-dashed border-[#e6e6e6] pt-6 border-line">
                            <p className="text-[#3f3ba6] mb-4 text-[1.3333333334rem]">Politics</p>
                            <article>
                                <div className="relative">
                                    <a href="#">
                                        <Image src={smallImage} alt="images" />
                                    </a>
                                    <a href="##" className="badge-large absolute bottom-8 left-1/2 translate-x-[-50%]">Stacker Studio</a>
                                </div>
                                <div className="mt-2">
                                    <a href="#" className="tag-base">MOVIES</a>
                                    <h2><a href="#"> 1st How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        </>
    );
}
