import Image from "next/image";
import React from 'react';
import adImage from  "./../images/ad.jpeg";
import adImage2 from  "./../images/ad2.jpeg";
import adImage3 from  "./../images/ad3.jpeg";
import smallImage from './../images/fff.png';
import bigImage from './../images/fff 1.png';



export default function ContentPage() {
    return (
        <>
        <section className="content-style pt-10">
            <div className="container">
                <div className="md:flex items-center hidden gap-2 text-sm">
                    <a href="#" className="font-light pt-sans">News</a> <i className="fa-solid fa-chevron-right"></i> <p>5 of the biggest perceived problems that small-business owners face</p>
                </div>
                <div className="grid grid-cols-12 mx-auto gap-y-6 md:gap-8 mt-3">
                    <div className="lg:col-span-8 col-span-12 order-[-1] md:order-none">
                        <article>
                            <div className="relative">
                                <Image src={bigImage} alt="images" />
                                <div className="absolute bottom-8 left-1/2 translate-x-[-50%] text-center w-[70%]">
                                    <a href="#" className="tag-base text-white block max-w-[max-content] mx-auto mb-3">MOVIES</a>
                                    <a href="##" className="badge">Stacker Studio</a>
                                    <h1 className="text-white">Where graduation rates for students with disabilities are improving</h1>
                                    <div className="writter-details flex flex-wrap gap-4 text-start mt-8">
                                        <div className="w-[45%]">
                                            <span className="text-[.6666666667rem] text-[#e6e6e6] uppercase pt-sans">Written by:</span>
                                            <div className="text-base text-white pt-sans"><a href="#">Dom DiFurio</a></div>
                                        </div>
                                        <div className="w-[45%]">
                                            <span className="text-[.6666666667rem] text-[#e6e6e6] uppercase pt-sans">Data work by:</span>
                                            <div className="text-base text-white pt-sans"><a href="#">Emma Rubin</a></div>
                                        </div>
                                        <div className="date w-full text-[.6666666667rem] text-[#e6e6e6] pt-sans">March 14, 2024</div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 text-center mt-2">
                               <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
                                    <p className="text-left italic pt-sans font-light">This story originally appeared on Marker Learning and was produced and distributed in partnership with Stacker Studio.</p>
                                    <button>Publish this story</button>
                               </div>
                            </div>
                            <div className="lg:w-[70%] mx-auto mt-20 content-text">
                                <h2>Where graduation rates for students with disabilities are improving</h2>
                                <p>
                                    The high school diploma is a rite of passage for many Americans. It comes with greater earning potential, improved employability, and creates a path to higher education. Still, not all children face the same barriers to graduating.
                                </p>
                                <p>
                                Students with disabilities represent 15% of public school students who, despite education reforms, are less likely to graduate on time or at all.
                                <br /> <br /> 
                                Marker Learning used data from the National Center for Education Statistics to explore how graduation rates for students with disabilities compare to overall rates from the 2014-2015 school year to the 2019-2020 school year.
                                <br /> <br /> 
                                Data from NCES reveals significant improvements in graduation rates for these students in the years leading up to the COVID-19 pandemic.
                                <br /> <br /> 
                                Nationwide, the graduation rate for students with disabilities was 71% for the 2019-2020 school year, up from 65% five years prior. Nonetheless, this was roughly 16 percentage points lower than that of the overall student population, an issue likely exacerbated by the pandemic.
                                <br /> <br /> 
                                Under the Individuals with Disabilities Education Act, an inclusive education law in the United States, public schools are required to provide support to students with disabilities from birth through high school. More than 8 million children with disabilities have benefited from IDEA, which Congress passed in 1975 with the understanding that disabilities are a "natural part of the human experience and in no way diminishes the right of individuals to participate in or contribute to society."
                                <br /> <br /> 
                                Disabilities covered by IDEA can present in many ways, including specific learning disabilities like dyslexia, developmental disorders like ADHD, or other impairments that affect energy levels and alertness; autism spectrum disorder; depression and emotional disturbance; speech, hearing, and visual impairments; traumatic brain injuries; impairments to movement like cerebral palsy; and intellectual disabilities.
                                <br /> <br /> 
                                To qualify for inclusive education, it must be proven that any one or a combination of these disabilities makes learning difficult for the child, according to Understood, a nonprofit advocating for those with conditions that impact learning and thinking. However, 3 in 5 students in inclusive education spend 80% or more of their school days in classes with the wider student body, according to the NCES.
                                <br /> <br /> 
                                The No Child Left Behind Act, signed in 2002 by former president George W. Bush, is a more recent piece of legislation aimed at improving outcomes for students receiving inclusive education and children from low-income and racially underrepresented families. Though it is generally controversial and has mixed outcomes, it requires more accountability and transparency with achievement and graduation standards.
                                </p>
                            </div>
                        </article>
                    </div>

                    <div className="lg:col-span-4 col-span-12 lg:border-l border-dashed border-[#e6e6e6] lg:ps-4">
                        <article className="border-b border-dashed border-[#e6e6e6] pb-5 mb-6">
                            <a href="./single-page">
                                <Image src={adImage2} alt="images" />
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
        </>
    );
}
