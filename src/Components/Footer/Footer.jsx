import "./Footer.scss";
import facebook from './Facebook.png'
import instagram from './Instagram.png'
import github from './Github.png'
import youtube from './Youtube.png'
import linkedin from './Linkedin.png'
import email from './Email.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-links">
        <a href="https://www.instagram.com/wwcodecolorado/">
          <img className="social" alt="facebook" src={instagram}/>
        </a>
        <a href="https://github.com/wwcodecolorado">
          <img className="social" alt="github" src={github}/>
        </a>
        <a href="https://www.instagram.com/https://twitter.com/wwcodecolorado/">
          <img className="social" alt="instagram" src={instagram}/>
        </a>
        <a href="https://www.youtube.com/c/WomenWhoCodeGlobal/videos">
          <img className="social" alt="facebook" src={youtube}/>
        </a>
        <a href="https://www.linkedin.com/showcase/wwcodecolorado/">
          <img className="social" alt="linkedin" src={linkedin}/>
        </a>
        <a href="https://www.facebook.com/wwcodecolorado/">
          <img className="social" alt="facebook" src={facebook}/>
        </a>
        <a href="https://www.linkedin.com/showcase/wwcodecolorado/">
          <img className="social" alt="email" src={email}/>
        </a>
      </div>
      <div>
        <a href="https://www.womenwhocode.com/boulder-denver">
          <img
            className="wwcbd-logo-footer"
            alt="WWC Boulder/Denver"
            src={process.env.PUBLIC_URL + "/WWCBD.png"}>
          </img>
        </a>
      </div>
      <div className="footer-linktree">
        <p className="mb-0">See Upcoming Events, Join our Slack Community, and more!</p>
        <a className="btn btn-main" href="https://linktr.ee/wwcodecolorado">Linktree</a>
      </div>
    </footer>
  );
};

export default Footer;
