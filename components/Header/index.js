import styled from "@emotion/styled";
import Link from "next/link";
import PropTypes from "prop-types";

const Heading = styled.h1`
   {
    font-family: Montserrat, sans-serif;
    font-weight: 900;
    margin-bottom: ${(props) => (props.frontPage ? "2.625rem" : "0")};
    margin-top: 0;
    word-wrap: break-word;
    font-size: ${(props) => (props.frontPage ? "3.95285rem" : "1.4425rem")};
    line-height: ${(props) => (props.frontPage ? "4.375rem" : "1.1")};
  }
  a {
    color: gainsboro;
  }
`;

const Header = ({ pageTitle, frontPage }) => {
  return (
    <>
      <header>
        <Heading as={frontPage ? "h1" : "h3"} frontPage={frontPage}>
          <Link href="/">{pageTitle}</Link>
        </Heading>
      </header>
    </>
  );
};

Header.defaultProps = {
  frontPage: false,
};

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  frontPage: PropTypes.bool,
};

export default Header;
