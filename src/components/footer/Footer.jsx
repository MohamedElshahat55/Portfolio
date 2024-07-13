import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import LOGO from "../../assets/blacklogo.png";

const Footer = ({ switchTheme }) => {
  return (
    <footer>
      <div>
        <a href="#" className="footer__logo" onClick={switchTheme}>
          Mohamed El-shahat
        </a>
      </div>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mohamed-elshahat-4017a1303"
        >
          <GrLinkedinOption />
        </a>
        <a target="_blank" href="https://github.com/MohamedElshahat55">
          <AiFillGithub />
        </a>

        <a target="_blank" href="https://www.instagram.com/muhamedelshahat_55/">
          <BsInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2023 - Mohamed El-shahat</small>
      </div>
    </footer>
  );
};

export default Footer;
