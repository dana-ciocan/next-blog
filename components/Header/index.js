import Link from "next/link";
import PropTypes from "prop-types";

const Header = ({ pageTitle }) => {
  return (
    <>
      <header className="header">
        <h1>{pageTitle}</h1>
        <nav className="nav">
          <Link href="/">
            <a>My Blog</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </header>
    </>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string,
};

export default Header;
