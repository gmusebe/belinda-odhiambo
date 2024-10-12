"use client";
import React, { useContext } from 'react';
import { cursorContext } from './cursorContext';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(cursorContext);
  return (
    <header className="pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent">
      {/* topbar */}
      <div className="bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0">
        topbar
      </div>
      <div className="container">
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
        <div className="xl:hidden cursor-pointer">
          <AiOutlineMenu className="text-3xl text-primary"/>
        </div>
      </div>
    </header>
  );
};

export default Header