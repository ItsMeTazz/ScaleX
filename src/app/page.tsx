"use client";
import { motion } from "framer-motion";
// import Swap from "../components/Swap";
// import Chart from "../components/Chart";
import {
  GiBookAura,
  // GiBuyCard,
  GiFizzingFlask,
  GiRoad,
  GiRocket,
  // GiSpellBook,
  // GiCheckMark,
  // GiTireIronCross,
} from "react-icons/gi";

import { MdBalance } from "react-icons/md";

export default function Home() {
  return (
    <>
      <section className="relative z-10 w-full px-4 md:px-7 flex justify-center items-center pb-16">
        <motion.div
          initial={{ translateX: "-1000px" }}
          animate={{ translateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center max-w-7xl h-full mt-0 md:mt-16 w-full"
        >
          <h1 className="text-[7vw] md:text-[4vw] whitespace-nowrap font-bold flex items-center gap-2 md:gap-4">
            <span className="text-white">COMING</span> SOON{" "}
          
          </h1>

          <div className="flex justify-center text-center mt-24 md:mt-10 text-neutral-800 w-full">
            ScaleX brings harmony to the blockchain, and is the first ever
            omnichain reflection token - with inbuilt sustainable mechanics. The
            scale is representative of price &apos;balancing&apos; across the different
            chains. We will be launching on ETH initially (with our presale held
            on ETH), adding to that Base and BSC. Pretty cool!
          </div>
          <a
            target="_blank"
            href="https://scalex-2.gitbook.io/scalex/"
            className="flex justify-center w-full md:w-1/2 h-16 mt-5"
          >
            <div className="rounded-md shadow-lg backdrop-blur-md group cursor-pointer relative w-full flex justify-center items-center outline outline-1 outline-slate-100/20 h-full hover:text-black bg-slate-100/20 transition-colors duration-500">
              <div className="z-10 font-bold flex items-center gap-4">
                WHITEPAPER
                <MdBalance
                  size={25}
                  className="text-neutral-800 group-hover:text-black transition-colors group-hover:animate-wiggle"
                />
              </div>
              <div className="rounded-md z-0 group-hover:w-full bg-white absolute bottom-0 h-full w-0 left-0 transition-all ease-in-out duration-500" />
            </div>
          </a>
        </motion.div>
      </section>
    </>
  );

  {
    /* <section
        id="presale"
        className="relative w-full px-4 md:px-7 flex items-stretch z-10 overflow-hidden pb-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="w-full flex flex-col md:flex-row items-center gap-5"
        >
          <Swap
            rmdPrice={rmdData?.pairs[0].priceUsd}
            bnbPrice={bnbData?.pairs[0].priceUsd}
          /> 
          <Chart />
          <ReferralProgram />
        </motion.div>
      </section> */
  }
}
