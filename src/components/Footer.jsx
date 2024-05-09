import React from "react";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div className="flex justify-between border rounded-lg p-6 mx-24 px-18 bg-base-200 ">
      <div className="justify-start ">
        <h2 className="text-2xl text-secondary">Join Our Community For More Updates</h2>
    <p className="flex">
      For more Updates! Connect with us here in subscription form
    </p>
      </div>
      <div className="justify-end border rounded-md bg-cyan-300 self-center p-2">
        <Link to={"/"}> 
          Subscribe News letter
        </Link>

      </div>
    </div>
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
       <img className="w-52 h-24" src="./Logo.png" alt="logo" />
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
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
    </footer>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="text-center text-grey-200 text-lg ">
          Developed and Design For FYP
        <div>
          

        </div>

        </div>
        </div>
        </>
  );
};

export default Footer;
