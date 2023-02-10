import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-5 max-w-7xl mx-auto" >
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain"
            src="https://links.papareact.com/yvf"
            alt=""
          ></img>
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>Follow</h3>
        </div>
      </div>
      <div className="flex items-centre space-x-5">
        <h3>Sign In</h3>
        <h3>Get Started</h3>
      </div>
    </div>
  );
};

export default Header;
