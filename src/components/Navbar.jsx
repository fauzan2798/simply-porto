// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/mfauzan-azhar-24606a1a8/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/fauzan2798" target="_blank">
          <FaGithub />
        </a>
        <a href="https://facebook.com/ppr201" target="_blank">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/fauzanazhar127" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
