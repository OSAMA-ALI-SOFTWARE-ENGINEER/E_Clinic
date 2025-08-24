import React, { useState } from "react";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAddSubscriber } from "./subscribers/useAddSubsriber";
import About from "../pages/About";
const Footer = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const { addSubscriber, isAdding } = useAddSubscriber();

  function handleClick(e) {
    e.preventDefault();
    if (!username || !email) return;
    addSubscriber(
      { username, email },
      {
        onSuccess: () => {
          document.getElementById("my_modal_3").close();
          setEmail("");
          setUsername("");
        },
      },
    );
  }
  return (
    <>
      {/* Subscription Container */}
      <div className="px-18 mx-24 mt-8 flex justify-between rounded-lg border bg-base-200 p-6 ">
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
            <div className="modal-box max-w-2xl">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button
                  type="reset"
                  onClick={() => document.getElementById("my_modal_3").close()}
                  className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
                >
                  ✕
                </button>
                <h3 className="text-lg font-bold">Join Our Community</h3>
                <p className="py-4">Get Update with Our Latest Posts</p>
                <div className="join flex flex-col gap-2">
                  <input
                    type="text"
                    className="input join-item input-bordered "
                    placeholder="Your Name ..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="email"
                    className="input join-item input-bordered "
                    placeholder="Your Email ..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    disabled={isAdding}
                    onClick={handleClick}
                    className="btn bg-cyan-500 hover:bg-cyan-800"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>

      {/* Main Footer Section */}
      <footer className="footer bg-base-200 p-10 text-base-content">
        <aside>
          <img className="h-24 w-52" src="/Logo.png" alt="logo" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Disease Types</h6>
          <Link className="link-hover link" to={'/DiseaseSearch'} >
            Heart Disease
          </Link>
          <Link className="link-hover link"  to={'/DiseaseSearch'}>Kedney Disease</Link>
          <Link className="link-hover link" to={'/DiseaseSearch'}>ENT Disease</Link>
          <Link className="link-hover link" to={'/DiseaseSearch'}>Cancer Disease</Link>
          <Link className="link-hover link" to={'/DiseaseSearch'}>Skin Disease</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Treatment Types</h6>
          <Link className="link-hover link" to={'/About'}>Herbal Treatment</Link>
          <Link className="link-hover link" to={'/About'}>Doctor Treatment</Link>
          <Link className="link-hover link" to={'/About'}>Chinese Treatement</Link>
          <Link className="link-hover link" to={'/About'}>Homopathic Treatment</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link-hover link">Terms of use</a>
          <a className="link-hover link">Privacy policy</a>
          <a className="link-hover link">Cookie policy</a>
        </nav>
      </footer>
      <div className="flex flex-col items-center justify-center border-t-[1px] bg-base-200">
        <div className="text-grey-200 text-center text-lg ">
          Non-Copy Right &copy; 2024. All Rights Reserved.
          <div className="flex items-center justify-center gap-2">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="rounded-xl border bg-sky-500 p-2 hover:bg-sky-700 hover:text-white"
            />
            <FontAwesomeIcon
              icon={faTiktok}
              className="rounded-xl border bg-gradient-to-r from-sky-400 to-cyan-500 p-2 hover:from-sky-700 hover:to-sky-700 hover:text-white"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="rounded-xl border bg-sky-500 p-2 hover:bg-sky-800 hover:text-white"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="rounded-xl border bg-gradient-to-r from-sky-400 to-cyan-500 p-2 hover:from-red-500 hover:to-red-500 hover:text-white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
