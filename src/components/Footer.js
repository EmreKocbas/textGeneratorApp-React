import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Define the Footer functional component
function Footer() {
  return (
    <div className="footer">
      <div>
        <div>
          {/* Link to GitHub profile with GitHub icon */}
          <a href="https://github.com/EmreKocbas" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      <div>
        {/* Link to LinkedIn profile with LinkedIn icon */}
        <a
          href="https://www.linkedin.com/in/emre-ko%C3%A7ba%C5%9F-764269259/"
          target="_blank" rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
