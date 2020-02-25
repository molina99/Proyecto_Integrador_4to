import React from "react";
const logo = require("../assets/gyba.png");

const Header = () => (
  <div className="flex bg-teal-500 p-6 justify-between">
    <div className="flex items-center flex-no-shrink text-white mr-6">
      <img src={logo} className="h-16 w-32 mr-2 absolute" alt="a" />
      <span className="font-semibold text-xl tracking-tight ml-32">
        <a href="http://localhost:3000/home">Ambiente GYBA</a>
      </span>
    </div>
    <div className="mr-10 mt-1">
      <div>
        <a
          className="items-center text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          href="http://localhost:3000/"
        >
          Salir
        </a>
      </div>
    </div>
  </div>
);

export default Header;
