import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
function Hero() {
  return (
    <section className=" bg-main py-[2rem] sm:py-[1rem]">
      <div className=" container-wrapper">
        <div className=" flex flex-col sm:flex-row  justify-between items-center gap-6 pt-0 sm:pt-[1rem]">
          <div className=" w-full sm:w-1/2 bg-[#06167ca4] border-[#ab3435] border-2 px-3 py-4 rounded-md">
          <p className="bold text-[#ffffff] asul-bold ">Vote For Future</p>

          <img src="images/text.png" alt="" className=" py-3" />
            <h1 className=" asul-bold text-xl sm:text-5xl font-semibold py-4">
            Elect Pepe is Leading the Solana Meme World with Presidential Charm!
            </h1>
            <div className="border-[#ab3435] border-2  bg-[#06157c] rounded-sm py-2 px-4 my-3">
              <a
                href="https://solscan.io/token/"
                target="_blank"
                className="font-bold text-xs sm:text-xl text-center"
              >
               56H1uG2xk2TN4Nf2LyYVtxRuo5ANPVbu3PHjch4Gbv9U
              </a>
            </div>

            <div className="flex justify-center gap-4 items-center">
              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/BGRHddtmCsittQg7MdixuxixcbEP4XLChaJpn4sTLj4d?t=1722443472874"
                target="_blank"
                className="border-[#ab3435] border-2  bg-[#344cab] hover:bg-transparent rounded-sm text-lg sm:text-2xl py-2 px-6 font-bold asul-bold  "
              >
                DEXTOOLS
              </a>

              <div className=" flex justify-center gap-4 items-center">
                <a
                  href="https://t.me/ElectPepe"
                  target="_blank"
                  className=" text-5xl "
                >
                  <FaTelegram />
                </a>

                <a
                  href="https://x.com/ElectPepe_Sol"
                  target="_blank"
                  className=" text-5xl"
                >
                  <FaSquareXTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className=" w-full sm:w-1/2">
            <img
              src="images/hero.png"
              alt=""
              className=" rounded-full  mb-4 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
