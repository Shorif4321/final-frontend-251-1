import React from "react";
import logo from "../../../assets/images/logo.png";
import facebook from "../../../assets/icons/facebook.png";
import linkedin from "../../../assets/icons/in.png";
import twitter from "../../../assets/icons/twitter.png";
import ins from "../../../assets/icons/ins.png";
const Footer = () => {
  return (
    <div className="rounded-t-[50px] pt-10 md:pt-26 bg-secondary">
      <footer className=" footer sm:footer-horizontal  text-neutral-content px-5 md:px-20">
        <nav className="space-y-5">
          <img src={logo} alt="medisite" />
          <p>
            Cutting-edge anti-aging solutions <br /> designed for a healthier,
            more <br /> vibrant you.{" "}
          </p>
          <div className="flex gap-4">
            <img src={facebook} alt="medisite" />
            <img src={linkedin} alt="medisite" />
            <img src={ins} alt="medisite" />
            <img src={twitter} alt="medisite" />
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      <div className="py-10">
      
          <div className="border-1 border-primary"></div>
          <p className="mt-5 text-white text-center">
             © 2025 Relive Anti-Aging Clinic. All rights reserved.
          </p>
         
      </div>
    </div>
  );
};

export default Footer;
