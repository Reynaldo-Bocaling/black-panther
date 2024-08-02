import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center pb-12">
      <p className="text-white font-bold title">
        {" "}
        &copy; {new Date().getFullYear()} BLACK PANTHER. All rights reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
