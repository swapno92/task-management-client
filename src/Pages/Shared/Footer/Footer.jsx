// import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import footerLogo from '../../../assets/footerLogo.png'
const Footer = () => {
    return (
        <>
            <footer className='bg-emerald-100'
            >
                <div className=" md:flex text-xl  mx-auto">
                    <div className=' md:w-[30%] mt-8 flex justify-end'>
                        <img className='w-80 ' src={footerLogo} alt="" />
                    </div>
                    <div className='md:w-[60%]  mx-auto mt-6'>
                        <div className=' flex md:justify-around md:px-0 px-4  md:gap-x-0 gap-x-3'>
                            <div>
                                <header className=" font-serif text-gray-800 font-bold">Categories</header>
                                <h1 className="link link-hover font-semibold text-gray-500 texl-md ">study</h1>
                                <h1 className="link link-hover font-semibold text-gray-500 texl-md">business</h1>
                                <h1 className="link link-hover font-semibold text-gray-500 texl-md">presentation</h1>
                                <h1 className="link link-hover font-semibold text-gray-500 texl-md">daily routine</h1>
                            </div>
                            <div>
                                <header className="font-serif text-gray-800 font-bold">Company</header>
                                <h1 className="link link-hover font-semibold text-gray-500 texl-md">About us</h1>
                                <h1 className="link link-hover font-semibold text-gray-500 texl-md">Contact</h1>
                                <h1 className="link link-hover font-semibold text-gray-500 texl-md">Jobs</h1>
                                <h1 className="link link-hover font-semibold text-gray-500 texl-md">Press kit</h1>
                            </div>
                            <div>
                                <header className="font-serif text-gray-800 font-bold">Legal</header>
                                <h1 className="link link-hover font-semibold text-gray-500 texl-md">Terms of use</h1>
                                <h1 className="link link-hover font-semibold text-gray-500 texl-md">Privacy policy</h1>
                                <h1 className="link link-hover font-semibold text-gray-500 texl-md">Cookie policy</h1>
                            </div>
                        </div>
                        <div className=" pt-5  text-center ">
                            <div className=' flex flex-wrap w-full   mx-auto lg:gap-14 md:gap-12 gap-6 justify-center text-center '>
                                <a href="https://www.facebook.com/swapno923"><FaFacebook className='text-3xl  '></FaFacebook></a>
                                <a href="https://twitter.com/Swapno23"><FaTwitter className='text-3xl'></FaTwitter></a>
                                <a href="https://www.youtube.com/"> <FaYoutube className='text-3xl'></FaYoutube></a>
                                <a href="https://www.instagram.com/"><FaInstagram className='text-3xl'></FaInstagram></a>
                                <a href="https://www.linkedin.com/in/swapno-dey-7135572a5/"><FaLinkedin className='text-3xl'></FaLinkedin></a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='divider'></div>
                <h1 className='text-center pb-2'>Copyright © 2023. Swapno Dey All Rights Reserved.</h1>
            </footer >
        </>
    );
};

export default Footer;