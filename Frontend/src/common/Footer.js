import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";

import site_logo from "../assets/image/logo/logo-yellow.png";
import "./Footer.css";
import "./help-modal.css";
// import icons

import { FaRegCopyright } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import facebook from "../assets/image/social-icon/facebook.png";
import instagram from "../assets/image/social-icon/instagram.png";
import linkedin from "../assets/image/social-icon/linkedin.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
// remove icon used remove help pop up
// import { CiSquareRemove } from "react-icons/ci";
// import { FaWindowClose } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { base_url } from "../utils/constant";

function Footer() {
  const [isOpen_help, setIsOpen_help] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handelSubmit(event) {
    try {
      event.preventDefault();
      let res = await fetch(`${base_url}/user/help-support`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      let jsonRes = await res.json();
      // console.log(jsonRes);
      if (jsonRes.successful === true) {
        clearFormData();
        toast.success("Message Successfully Send.....");
        setIsOpen_help(false);
      } else {
        toast.error("Internal Error !! Please try again");
      }
    } catch (err) {
      toast.error("Internal Error !! Please try again");
      document.location.href = "/";
    }
  }

  function disableControllFun() {
    if (name === "" || email === "" || message.length < 19) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }

  function clearFormData() {
    setName("");
    setEmail("");
    setMessage("");
    setIsDisable(true);
  }

  function onchangeNameFun(e) {
    setName(e.target.value);
    // console.log(name);
    disableControllFun();
  }

  function onchangeEmailFun(e) {
    setEmail(e.target.value);
    // console.log(email);
    disableControllFun();
  }

  function onchangeMessageFun(e) {
    setMessage(e.target.value);
    // console.log(message.length);
    disableControllFun();
  }

  return (
    <>
      <footer className="flex flex-col items-center">
        <div className="footer-containt">
          <div className="footer-first-column footer-each-col">
            {/* site logo */}
            <div className="footer-first-column-logo-div">
              <img src={site_logo} alt="Logo" />
              &emsp;Dãna
            </div>
            {/* contect Us */}
            <div className="contact-us">
              {/* phone */}
              <h3>Contact Us</h3>
              <div>
                <IoMdCall className="footer-call-icon" />
                <span>&emsp;+91 8336870054</span>
              </div>
              <div>
                <IoMdCall className="footer-call-icon" />
                <span>&emsp;+91 9734259145</span>
              </div>
              {/* mail */}
              <div>
                <IoIosMail className="footer-mail-icon" />
                <span>
                  &emsp;
                  <a
                    className="footer-contact-us-email"
                    href="mailto:dana.donate2022@gmail.com"
                  >
                    dana.donate2022@gmail.com
                  </a>
                </span>
                {/* <span>&emsp;+91 8336870054</span> */}
              </div>
            </div>
          </div>
          <div className="footer-second-column footer-each-col">
            {/* <div className='footer-program-list'> */}
            <h3>Programs</h3>
            <a href="/programs">
              <div>
                Food Donation&emsp;
                <span className="hover-visible-link-icon">
                  <FaExternalLinkAlt className="link-page" />
                </span>
              </div>
            </a>
            <a href="/programs">
              <div>
                Blanket Donation&emsp;
                <span className="hover-visible-link-icon">
                  <FaExternalLinkAlt className="link-page" />
                </span>
              </div>
            </a>
            {/* </div> */}
          </div>
          <div className="footer-third-column footer-each-col">
            <a href="#">
              <div>
                About Us&emsp;
                <span className="hover-visible-link-icon">
                  <FaExternalLinkAlt className="link-page" />
                </span>
              </div>
            </a>
            <a href="/members">
              <div>
                Members&emsp;
                <span className="hover-visible-link-icon">
                  <FaExternalLinkAlt className="link-page" />
                </span>
              </div>
            </a>
            {/* <a href='#'>
                            <div>
                                Recommended Us&emsp;
                                <span className='hover-visible-link-icon'>
                                    <FaExternalLinkAlt className='link-page'/>
                                </span>
                            </div>
                        </a> */}
            <a href="#">
              <div onClick={() => setIsOpen_help(true)}>
                Help & Support&emsp;
                <span className="hover-visible-link-icon">
                  <FaExternalLinkAlt className="link-page" />
                </span>
              </div>
            </a>
          </div>
          <div className="footer-fourth-column footer-each-col">
            <a href="#">
              <div>
                Join Us&emsp;
                <span className="hover-visible-link-icon">
                  <FaExternalLinkAlt className="link-page" />
                </span>
              </div>
            </a>
            <a href="/donate">
              <div>
                Donate Now&emsp;
                <span className="hover-visible-link-icon">
                  <FaExternalLinkAlt className="link-page" />
                </span>
              </div>
            </a>
            <a href="#">
              <div>
                Privacy policy&emsp;
                <span className="hover-visible-link-icon">
                  <FaExternalLinkAlt className="link-page" />
                </span>
              </div>
            </a>
            <a href="#">
              <div>
                Terms & conditions&emsp;
                <span className="hover-visible-link-icon">
                  <FaExternalLinkAlt className="link-page" />
                </span>
              </div>
            </a>
          </div>
        </div>
        {/* Horaizontal rule */}
        {/* <hr className="horaizontal-rule" /> */}
        <div className="w-[90%] border-b-[1px]"></div>
        {/* Social icons and copyright */}
        <div className="copyrite-and-social-icons">
          <div className="copyright-div">
            <span>Copyright &nbsp;</span>
            <FaRegCopyright className="copyright-icons" />
            <span>&nbsp; 2023 Dãna</span>
          </div>
          <div className="all-social-icons ">
            <div>
              <a href="#">
                <img src={linkedin} alt="Linkedin" className="social-icons" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={instagram} alt="Instagram" className="social-icons" />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/groups/1051112419533806">
                <img src={facebook} alt="Facebook" className="social-icons" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Help podel pop up */}
      <Modal
        isOpen={isOpen_help}
        ariaHideApp={false}
        className="help-popup-outer"
      >
        <div className="help-pop-up-inner">
          <div className="cross-help-div">
            <div>
              <IoClose
                className="help-cross-icon"
                onClick={() => setIsOpen_help(false)}
              />
            </div>
          </div>
          <h2>Help & Support</h2>
          <p>
            Feel free to contact us for donations, volunteers, or suggestion
          </p>
          <form onSubmit={handelSubmit} className="help-and-support-form">
            <div className="help-name-div">
              <input
                type="text"
                value={name}
                onChange={(e) => onchangeNameFun(e)}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="help-email-div">
              <input
                type="email"
                value={email}
                onChange={(e) => onchangeEmailFun(e)}
                placeholder="Enter Your Email"
              />
            </div>
            <div className="help-textarea-div">
              <textarea
                type="text"
                value={message}
                onChange={(e) => onchangeMessageFun(e)}
                rows="8"
                placeholder="Text Here! minimum 20 character."
              />
            </div>
            {isDisable ? (
              <button type="submit" className="send-disabled-btn-true" disabled>
                Send
              </button>
            ) : (
              <button type="submit" className="send-disabled-btn-false">
                Send
              </button>
            )}
          </form>
        </div>
      </Modal>
      {/* <ToastContainer /> */}
      <ToastContainer
        position="top-center"
        autoClose={4000}
        // hideProgressBar={false}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default Footer;
