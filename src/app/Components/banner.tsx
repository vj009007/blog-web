import Image from "next/image";
import React from 'react';
import adImage from  "./../images/ad.jpeg";
import adImage2 from  "./../images/ad2.jpeg";
import adImage3 from  "./../images/ad3.jpeg";
import smallImage from './../images/fff.png';
import bigImage from './../images/fff 1.png';



export default function Banner() {
    return (
        <>
        <section className="banner-style pt-10">
            <div className="container">
                <div className="grid grid-cols-12 mx-auto gap-y-6 md:gap-8">
                    <div className="lg:col-span-3 md:col-span-5 col-span-12 md:border-r border-dashed border-[#e6e6e6] md:pe-4">
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
                        <article className="border-b border-dashed border-[#e6e6e6] pb-5 mb-6">
                            <a href="./single-page">
                                <Image src={smallImage} alt="images" />
                            </a>
                            <a href="#" className="tag-base">MOVIES</a>
                            <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                        </article>
                        <article className="mt-6">
                                <Image src={adImage} alt="images" />
                        </article>
                    </div>
                    <div className="lg:col-span-6 md:col-span-7 col-span-12 order-[-1] md:order-none lg:-mx-4">
                        <article>
                            <div className="relative">
                                <a href="#">
                                    <Image src={bigImage} alt="images" />
                                </a>
                                <a href="##" className="badge-large absolute bottom-8 left-1/2 translate-x-[-50%]">Stacker Studio</a>
                            </div>
                            <div className="lg:px-[5%] md:px-6 text-center mt-2">
                                <a href="#" className="tag-base">MOVIES</a>
                                <h1><a href="#"> 1st How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h1>
                                
                                <p>Sweeping films, epic stories, stacked casts, and ostentatious budgets—these are some of the things that may come to mind when moviegoers imagine Best Picture-winning films. But is that perception always reflected by reality? Not necessarily. <br />
                                <br />
                                    Many factors go into making an Oscar-winning film. In order to win over members of the Academy of Motion Picture Arts and Sciences, the quality of a film certainly goes a long way, popularity with audiences can help, and a prestigious director or cast certainly doesn't hurt.
                                </p>

                                <p>Sweeping films, epic stories, stacked casts, and ostentatious budgets—these are some of the things that may come to mind when moviegoers imagine Best Picture-winning films. But is that perception always reflected by reality? Not necessarily.
                                    Many factors go into making an Oscar-winning film. In order to win over members of the Academy of Motion Picture Arts and Sciences, the quality of a film certainly goes a long way, popularity with audiences can help, and a prestigious director or cast certainly doesn't hurt.
                                    weeping films, epic stories, stacked casts, and ostentatious budgets—these are some of the things that may come to mind when moviegoers imagine Best Picture-winning films. But is that perception always reflected by reality? Not necessarily.
                                    Many factors go into making an Oscar-winning film. In order to win over members of the Academy of Motion Picture Arts and Sciences, the quality of a film certainly goes a long way, popularity with audiences can help, and a prestigious director or cast certainly doesn't hurt.
                                </p>
                                <article className="mt-6">
                                    <Image src={adImage3} alt="images" />
                                </article>
                                <p>Sweeping films, epic stories, stacked casts, and ostentatious budgets—these are some of the things that may come to mind when moviegoers imagine Best Picture-winning films. But is that perception always reflected by reality? Not necessarily.
                                    Many factors go into making an Oscar-winning film. In order to win over members of the Academy of Motion Picture Arts and Sciences, the quality of a film certainly goes a long way, popularity with audiences can help, and a prestigious director or cast certainly doesn't hurt.
                                    weeping films, epic stories, stacked casts, and ostentatious budgets—these are some of the things that may come to mind when moviegoers imagine Best Picture-winning films. But is that perception always reflected by reality? Not necessarily.
                                    Many factors go into making an Oscar-winning film. In order to win over members of the Academy of Motion Picture Arts and Sciences, the quality of a film certainly goes a long way, popularity with audiences can help, and a prestigious director or cast certainly doesn't hurt.
                                </p>
 
                                <p>Sweeping films, epic stories, stacked casts, and ostentatious budgets—these are some of the things that may come to mind when moviegoers imagine Best Picture-winning films. But is that perception always reflected by reality? Not necessarily.
                                    Many factors go into making an Oscar-winning film. In order to win over members of the Academy of Motion Picture Arts and Sciences, the quality of a film certainly goes a long way, popularity with audiences can help, and a prestigious director or cast certainly doesn't hurt.
                                    weeping films, epic stories, stacked casts, and ostentatious budgets—these are some of the things that may come to mind when moviegoers imagine Best Picture-winning films. But is that perception always reflected by reality? Not necessarily.
                                    Many factors go into making an Oscar-winning film. In order to win over members of the Academy of Motion Picture Arts and Sciences, the quality of a film certainly goes a long way, popularity with audiences can help, and a prestigious director or cast certainly doesn't hurt.
                                </p>
                                <article className="mt-6">
                                    <Image src={adImage3} alt="images" />
                                </article>
                            </div>
                        </article>
                    </div>
                    <div className="lg:col-span-3 col-span-12 lg:border-l border-dashed border-[#e6e6e6] lg:ps-4">
                        <div className="grid gap-3 grid-cols-12 border-b border-dashed border-[#e6e6e6] pb-3 mb-4">
                            <div className="xl:col-span-5 lg:col-span-12 col-span-6">
                                <div className="relative">
                                    <a href="#">
                                        <Image src={smallImage} alt="images" />
                                    </a>
                                    <a href="##" className="badge-small absolute bottom-4 left-1/2 translate-x-[-50%]">Stacker Studio</a>
                                </div>
                            </div>
                            <div className="xl:col-span-7 lg:col-span-12 col-span-6">
                                <a href="#" className="tag-base">MOVIES</a>
                                <h3><a href="#">In some school districts, it's the end of the snow day</a></h3>
                            </div>
                            </div>
                            <div className="grid gap-3 grid-cols-12 border-b border-dashed border-[#e6e6e6] pb-3 mb-4">
                                <div className="xl:col-span-5 lg:col-span-12 col-span-6">
                                    <div className="relative">
                                        <a href="#">
                                            <Image src={smallImage} alt="images" />
                                        </a>
                                        <a href="##" className="badge-small absolute bottom-4 left-1/2 translate-x-[-50%]">Stacker Studio</a>
                                    </div>
                                </div>
                                <div className="xl:col-span-7 lg:col-span-12 col-span-6">
                                    <a href="#" className="tag-base">MOVIES</a>
                                    <h3><a href="#">In some school districts, it's the end of the snow day</a></h3>
                                </div>
                            </div>
                            <div className="grid gap-3 grid-cols-12 border-b border-dashed border-[#e6e6e6] pb-3 mb-4">
                                <div className="xl:col-span-5 lg:col-span-12 col-span-6">
                                    <div className="relative">
                                        <a href="#">
                                            <Image src={smallImage} alt="images" />
                                        </a>
                                        <a href="##" className="badge-small absolute bottom-4 left-1/2 translate-x-[-50%]">Stacker Studio</a>
                                    </div>
                                </div>
                                <div className="xl:col-span-7 lg:col-span-12 col-span-6">
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
        {/* <section className="banner-style pt-10">
            <div className="container">
                <div className="grid grid-cols-12 mx-auto gap-y-6 md:gap-8">
                    <div className="lg:col-span-3 md:col-span-5 col-span-12 md:border-r border-dashed border-[#e6e6e6] md:pe-4">
                        <article className="border-b border-dashed border-[#e6e6e6] pb-5 mb-6 border-t pt-6">
                            <a href="./single-page">
                                <Image src={smallImage} alt="images" />
                            </a>
                            <a href="#" className="tag-base">MOVIES</a>
                            <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                        </article>
                        <article className="mt-6">
                                <Image src={adImage2} alt="images" />
                        </article>
                    </div>
                    <div className="lg:col-span-6 md:col-span-7 col-span-12 order-[-1] md:order-none  border-t pt-6">
                        <article>
                            <div className="relative">
                                <a href="#">
                                    <Image src={bigImage} alt="images" />
                                </a>                            
                            </div>
                            <div className="lg:px-[15%] px-6 text-center mt-2">
                                <p>Sweeping films, epic stories, stacked casts, and ostentatious budgets—these are some of the things that may come to mind when moviegoers imagine Best Picture-winning films. But is that perception always reflected by reality? Not necessarily. <br />
                                <br />
                                Many factors go into making an Oscar-winning film. In order to win over members of the Academy of Motion Picture Arts and Sciences, the quality of a film certainly goes a long way, popularity with audiences can help, and a prestigious director or cast certainly doesn't hurt.</p>
                            </div>
                        </article>
                        <article className="mt-6">
                                <Image src={adImage3} alt="images" />
                        </article>
                    </div>
                    <div className="lg:col-span-3 md:col-span-12 col-span-12 border-dashed border-[#e6e6e6] md:ps-4 lg:border-l">
                        <article className="border-b border-dashed border-[#e6e6e6] pb-5 mb-6 border-t pt-6">
                            <a href="./single-page">
                                <Image src={smallImage} alt="images" />
                            </a>
                            <a href="#" className="tag-base">MOVIES</a>
                            <h2><a href="#">  How much does it cost to win Best Picture? Breaking down the biggest and smallest budgets.</a></h2>
                        </article>
                        <article className="border-b border-dashed border-[#e6e6e6] pb-5 mb-6">
                            <a href="./single-page">
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
        </section> */}
    
        <section className="py-10">
            <div className="container">
                <div className="grid mx-auto grid-cols-12 gap-8">
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
        </>
    );
}
