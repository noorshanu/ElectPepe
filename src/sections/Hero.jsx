import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
function Hero() {
  return (
    <section className=" bg-main py-[2rem] sm:py-[8rem]">
      <div className=" container-wrapper">
        <div className=" flex flex-col sm:flex-row  justify-between items-center gap-6 pt-0 sm:pt-[1rem]">
          <div className=" w-full sm:w-1/2 bg-[#06167ca4] border-[#ab3435] border-2 px-3 py-4 rounded-md">
          <p className="bold text-[#ffffff] asul-bold ">Vote For Future</p>

          <img src="images/text.png" alt="" className=" py-3" />
            <h1 className=" asul-bold text-xl sm:text-5xl font-semibold py-4">
              Laugh, stake, and collect rewards with TrumpWif on Solana!
            </h1>
            <div className="border-[#ab3435] border-2  bg-[#06157c] rounded-sm py-2 px-4 my-3">
              <a
                href="https://solscan.io/token/8n7ied5xpzGbLiL7nGL5dwoTfFYudfxbqHa3pQaG5ihy"
                target="_blank"
                className="font-bold text-xs sm:text-xl text-center"
              >
                8n7ied5xpzGbLiL7nGL5dwoTfFYudfxbqHa3pQaG5ihy
              </a>
            </div>

            <div className="flex justify-center gap-4 items-center">
              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/BdXhxzBizWqK88A8YZfWxuSoEgodpQmKgS6LSzWrpRWv?t=1715246688168"
                target="_blank"
                className="border-[#ab3435] border-2  bg-[#06157c] rounded-sm text-lg sm:text-2xl py-2 px-6 font-bold asul-bold  "
              >
                DEXTOOLS
              </a>

              <div className=" flex justify-center gap-4 items-center">
                <a
                  href="https://t.me/trumpwifs"
                  target="_blank"
                  className=" text-5xl "
                >
                  <FaTelegram />
                </a>

                <a
                  href="https://twitter.com/trump_wif1"
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
