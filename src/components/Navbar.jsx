import React from "react";

function Navbar() {
  return (
    <section className=" pt-1 bg-[#06157c]">
      <nav className=" flex justify-between container-wrapper items-center">
        <div className=" flex items-center gap-1">
          <img src="images/logo.png" alt="" className=" h-[80px]" />
          <h2 className="asul-bold text-xl sm:text-3xl"> ElectPepe</h2>
        </div>

        <div>
          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/BGRHddtmCsittQg7MdixuxixcbEP4XLChaJpn4sTLj4d?t=1722443472874"
            target="_blank"
            className="bg-[#344cab] hover:bg-transparent border-[#ab3435] rounded-sm text-base sm:text-2xl py-2 px-6 font-bold asul-bold  border-2 "
          >
            Buy Now
          </a>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
