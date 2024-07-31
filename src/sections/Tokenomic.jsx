import React from "react";

function Tokenomic() {
  return (
    <section className=" relative">
        <img src="images/toko.png" alt="" className=" absolute bottom-0" />
      <div className=" container-wrapper">
            <p className=" text-[#ab3535] font-bold text-sm text-center">
            Make Crypto Great Again  
            </p>
        <h1 className=" text-2xl sm:text-8xl asul-bold text-[#07147c] text-center font-bold pb-8">
            Tokenomics
        </h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 justify-center gap-6 items-center">
          <div className="  border-4 rounded-sm  px-4 py-8  border-[#ab3535] bg-[#06157c]">
            <h1 className=" text-center font-bold asul-bold text-lg sm:text-4xl py-2 text-white ">
              420,690,000,000
            </h1>

            <h3 className=" text-center font-bold asul-bold text-lg sm:text-xl text-white ">
              Total Supply
            </h3>
          </div>

          <div className="  border-4 rounded-sm  px-4 py-8  border-[#ab3535] bg-[#06157c]">
            <h1 className=" text-center font-bold asul-bold text-lg sm:text-4xl py-2 text-white ">
              No taxes
            </h1>

            <h3 className=" text-center font-bold asul-bold text-lg sm:text-xl text-white ">
           0% Buy / 0% Sell
            </h3>
          </div>


          <div className="  border-4 rounded-sm  px-4 py-8  border-[#ab3535] bg-[#06157c]">
            <h1 className=" text-center font-bold asul-bold text-lg sm:text-4xl py-2 text-white ">
          100% Burnt
            </h1>

            <h3 className=" text-center font-bold asul-bold text-lg sm:text-xl text-white ">
             Liquidity Pool
            </h3>
          </div>

          <div className="  border-4 rounded-sm  px-4 py-8  border-[#ab3535] bg-[#06157c]">
            <h1 className=" text-center font-bold asul-bold text-lg sm:text-4xl py-2 text-white ">
            Fair Launch
            </h1>

            <h3 className=" text-center font-bold asul-bold text-lg sm:text-xl text-white ">
         No Presale
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomic;
