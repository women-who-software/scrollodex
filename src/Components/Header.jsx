import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <a
        className="home"
        data-event-category="header-link"
        href="https://www.womenwhocode.com/boulder-denver"
      >
        <img
          className="wwcbd-logo"
          alt="WWC Boulder/Denver-logo"
          src={process.env.PUBLIC_URL + "/WWCBD.png"}
        ></img>
      </a>

      <h1 className="page--title">Scrollodex</h1>
    </header>
  );
};

export default Header;
