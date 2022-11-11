import "./Footer.scss";
import facebook from "./Facebook.png";
import instagram from "./Instagram.png";
import github from "./Github.png";
import twitter from "./Twitter.png";
import youtube from "./Youtube.png";
import linkedin from "./Linkedin.png";
import email from "./Email.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <hr className="line" />
      <div className="socials">
        <a href="https://www.instagram.com/wwcodecolorado/">
          <img className="social" alt="facebook" src={instagram} />
        </a>
        <a href="https://github.com/wwcodecolorado">
          <img className="social" alt="github" src={github} />
        </a>
        <a href="https://twitter.com/wwcodecolorado/">
          <img className="social" alt="twitter" src={twitter} />
        </a>
        <a href="https://www.youtube.com/c/WomenWhoCodeGlobal/videos">
          <img className="social" alt="youtube" src={youtube} />
        </a>
        <a href="https://www.linkedin.com/showcase/wwcodecolorado/">
          <img className="social" alt="linkedin" src={linkedin} />
        </a>
        <a href="https://www.facebook.com/wwcodecolorado/">
          <img className="social" alt="facebook" src={facebook} />
        </a>
        <a href="mailto: denver@womenwhocode.com">
          <img className="social" alt="email" src={email} />
        </a>
      </div>
      <div className="logo">
        <a href="https://www.womenwhocode.com/boulder-denver">
          <img
            className="wwcbd-logo-footer"
            alt="WWC Boulder/Denver"
            src={process.env.PUBLIC_URL + "/WWCBD.png"}
          ></img>
        </a>
      </div>
      <div className="linktree">
        <p className="mb-0">Join our Slack Community,</p>
        <p className="mb-0">view our job board, and more!</p>
        <a className="btn btn-main" href="https://linktr.ee/wwcodecolorado">
          Linktree
        </a>
      </div>
    </footer>
  );
};

export default Footer;
