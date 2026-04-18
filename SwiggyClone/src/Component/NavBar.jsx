// import React from 'react'

function NavBar() {
  return (
    <> 
      <div className="w-full flex items-center justify-center shadow-md sticky top-0 z-50 bg-white">
        <div className="w-full h-20 flex justify-center md:w-11/12 md:justify-between">
          <div className="flex">
            <img
              className="w-16 rounded-2xl m-2 "
              src="https://play-lh.googleusercontent.com/ymXDmYihTOzgPDddKSvZRKzXkboAapBF2yoFIeQBaWSAJmC9IUpSPKgvfaAgS5yFxQ"
              alt="Logo"
            />
            <h2 className="hidden  md:block  self-center m-8 underline  font-bold cursor-pointer hover:text-orange-500">
              Other
            </h2>
            <div className="hidden  md:flex items-center ">
              <img
              className="w-3" src="down-arrow.png" alt="" />
            </div>
          </div>
          <div className="hidden  md:flex items-center justify-center">
            <div className="flex hover:text-orange-500 hover:cursor-pointer p-2">
              <img className="w-6 m-2" src="briefcase.webp" alt="" />
              <p className="m-2 font-semibold">Swiggy Corporate</p>
            </div>
            <div className="flex hover:text-orange-500 hover:cursor-pointer p-2">
              <img
                className="w-6 m-2"
                src="search-interface-symbol.png"
                alt=""
              />
              <p className="m-2 font-semibold">Search</p>
            </div>
            <div className="flex hover:text-orange-500 hover:cursor-pointer p-2">
              <img className="w-6 m-2" src="offer.png" alt="" />
              <p className="m-2 font-semibold">
                Offers
                <sup className="text-orange-500 ">NEW</sup>
              </p>
            </div>
            <div className="flex hover:text-orange-500 hover:cursor-pointer p-2">
              <img className="w-6 m-2" src="question.png" alt="" />
              <p className="m-2 font-semibold">help</p>
            </div>
            <div className="flex hover:text-orange-500 hover:cursor-pointer p-2">
              <img className="w-6 m-2" src="log-out.png" alt="" />
              <p className="m-2 font-semibold">Sign In</p>
            </div>
            <div className="flex hover:text-orange-500 hover:cursor-pointer p-2 ">
              <img className="w-6 m-2" src="cart.png" alt="" />
              <p className="m-2 font-semibold">Cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
