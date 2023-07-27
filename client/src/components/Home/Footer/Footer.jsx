import React from "react";
import "./Footer.scss";
import { Box, Divider } from "@chakra-ui/react";
import {
  AiOutlineStar,
  AiOutlineShoppingCart,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="container-fluid footer-container mt-5">
      <Box className="footer-container-postion">
        <Box className="position-text">
          {/* <GiAmpleDress className="me-2" /> */}
          Fashion Store
        </Box>
      </Box>
      <Box className="footer-content-box">
        <Box className="d-flex justify-content-evenly flex-column flex-md-row flex-md-wrap g-2 mx-auto">
          <div className="d-flex footer-flex-container">
            <>
              <AiOutlineStar className="footer-text-1" />
            </>
            <div className="footer-text-1">Unique Design</div>
          </div>
          <div className="d-flex footer-flex-container">
            <>
              <MdOutlineLocalOffer className="footer-text-1" />
            </>
            <div className="footer-text-1">Best Offers</div>
          </div>
          <div className="d-flex footer-flex-container ">
            <>
              <AiOutlineShoppingCart className="footer-text-1" />
            </>

            <div className="text-center footer-text-1">
              shopping
              <br /> hauls on a budget
            </div>
          </div>
          <div className="d-flex footer-flex-container">
            <>
              <FiTruck className="footer-text-1" />
            </>
            <div className="text-center footer-text-1">
              Free Shipping <br />
              available above &#x20B9;699
            </div>
          </div>
        </Box>
      </Box>
      <Box>
        <Box className="footer-content-box2 d-flex flex-md-row justify-content-md-around mx-auto">
          <Box className="pb-3">
            <p className="text-uppercase foooter-heading-2">Categories</p>
            <Divider borderColor={"#05475e"} borderWidth={"1.5px"} />
            <div className="footer-link-box d-flex flex-column">
              <Link to={"/"}>Kids</Link>
              <Link to={"/"}>Men's fashion</Link>
              <Link to={"/"}>Women's fashion</Link>
              <Link to={"/"}>Beauty</Link>
              <Link to={"/"}>Fragrance</Link>
            </div>
          </Box>
          <Box>
            <p className="text-uppercase foooter-heading-2">
              Shipping and privacy policy
            </p>
            <Divider borderColor={"#05475e"} borderWidth={"1.5px"} />
            <div className=" footer-link-box  d-flex flex-column">
              <Link to={"/"}>Shipping Policy</Link>
              <Link to={"/"}>Privacy Policy</Link>
              <Link to={"/"}>Cancellation Policy</Link>
            </div>
          </Box>
          <Box>
            <p className="text-uppercase foooter-heading-2">Contact Us</p>
            <Divider borderColor={"#05475e"} borderWidth={"1.5px"} />
            <div className="d-flex flex-column footer-link-box align-items-start">
              <Link to={"/"}>
                <AiOutlineFacebook className="social-icon" />
                Facebook
              </Link>
              <Link to={"/"}>
                <AiOutlineInstagram className="social-icon" />
                Instagram
              </Link>
              <Link to={"/"}>
                <AiFillTwitterCircle className="social-icon" />
                Twitter
              </Link>
              <Link to={"/"}>
                <AiOutlineYoutube className="social-icon" />
                Youtube
              </Link>
              <Link to={"/"}>
                <AiOutlineLinkedin className="social-icon" />
                Linkedin
              </Link>
            </div>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
