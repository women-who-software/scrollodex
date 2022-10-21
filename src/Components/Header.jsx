import "./Header.scss";
import "./Buttons.scss";
import ContactModal from "./ContactModal";
import React from "react";

export const Header = () => {
  const [showModal, setShowModal] = React.useState(false);

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
      <button className="btn btn-main" onClick={() => setShowModal(true)}>
        Contact Us
      </button>
      {showModal && <ContactModal setShowModal={setShowModal} />}

      <h1 className="page--title">Scrollodex</h1>
    </header>
  );
};

export default Header;
