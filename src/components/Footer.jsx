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
      {/* Subscription Container */}
      <div className="px-18 mx-24 flex justify-between rounded-lg border bg-base-200 p-6 ">
        <div className="justify-start ">
          <h2 className="text-2xl text-secondary">
            Join Our Community For More Updates
          </h2>
          <p className="flex">
            For more Updates! Connect with us here in subscription form
          </p>
        </div>

        <div className="justify-end self-center p-2">
          <button
            className="btn rounded-md border bg-cyan-400 hover:bg-cyan-900 hover:text-white"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            {" "}
            Subscribe News letter
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
                  ✕
                </button>
                <h3 className="text-lg font-bold">Join Our Community</h3>
                <p className="py-4">Get Update with Our Latest Posts</p>
                <div className="join flex justify-between">
                  <input
                    className="input join-item input-bordered w-screen "
                    placeholder="Your Email ..."
                  />
                  <button className="btn join-item rounded-r-full bg-cyan-500 hover:bg-cyan-800">
                    Subscribe
                  </button>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer justify-start">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox-accent checkbox"
                    />
                    <span className="label-text">Remember me</span>
                  </label>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>

      {/* Main Footer Section */}
      <footer className="footer bg-base-200 p-10 text-base-content">
        <aside>
          <img className="h-24 w-52" src="./Logo.png" alt="logo" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link-hover link">Branding</a>
          <a className="link-hover link">Design</a>
          <a className="link-hover link">Marketing</a>
          <a className="link-hover link">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link-hover link">About us</a>
          <a className="link-hover link">Contact</a>
          <a className="link-hover link">Jobs</a>
          <a className="link-hover link">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link-hover link">Terms of use</a>
          <a className="link-hover link">Privacy policy</a>
          <a className="link-hover link">Cookie policy</a>
        </nav>
      </footer>
      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="text-grey-200 text-center text-lg ">
          Developed and Design For FYP
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
