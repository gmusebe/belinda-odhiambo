"use client";
import React, { useContext, useState } from 'react';
import { cursorContext } from './cursorContext';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import { AiOutlineMenu } from 'react-icons/ai';

// components
import MobileNav from './MobileNav';
import Nav from './Nav';
import Socials from './Socials';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(cursorContext);
  const [ mobileNav, setMobileNav ] = useState(false);
  return (
    <header className="pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent">
      {/* topbar */}
      <div className="bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            {/* phone & email */}
            <div className="flex flex-col lg:flex-row items-center h-full gap-2 xl:gap-6 w-full justify-between xl:w-auto xl:justify-normal">
              {/* phone */}
              <div className="flex items-center gap-2 text-white">
                <FaPhoneAlt />
                <span>+254(0)727 661 138</span>
              </div>
              {/* email */}
              <div className="flex items-center gap-2 text-white">
                <IoMdMail />
                <span>solutions@belshyglobal.com</span>
              </div>
            </div>
            {/* socials */}
            <div className="hidden xl:block">
              <Socials ContainerStyles="flex gap-6 text-white"/>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* logo */}
        <div>
          <Link href="/">
            <Image
              src="/assets/belindaLogo1.png"
              width={120}
              height={44}
              priority
              alt=""
            />
          </Link>
        </div>
        {/* mobile nav trigger */}
        <div
          className="xl:hidden cursor-pointer"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <AiOutlineMenu className="text-3xl text-primary"/>
        </div>
        {/* mobile nav */}
        <motion.div
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className="fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50"
        >
          <MobileNav setMobileNav={setMobileNav}/>
        </motion.div>
        {/* desktop nav */}
        <div className="hidden xl:block">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header