import React from "react";

function Products() {
  return (
    <section className=" bg-[#06157c] border-[#ab3435] border-t-4 border-b-4 py-4 px-6">
      <div className=" container-wrapper">
        <div className=" flex justify-between items-center flex-col sm:flex-row">
       

          <div className=" flex justify-center  flex-col w-full sm:w-1/2">
            <p className="text-[#ab3435] text-base font-bold py-4 ">We do things differently.</p>
            <h2 className=" text-6xl asul-bold  pb-3">Think big, win big, join the movement.</h2>

           <div className=" ">
           <button className=" border-[#ab3435] border-4 bg-[#344cab] rounded-sm text-2xl py-2 px-6  ">Buy Now</button>
           </div>
          </div>

          <div className=" w-full sm:w-1/2">
            <img src="images/img2.png" alt="" className=" h-[450px] w-auto mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
