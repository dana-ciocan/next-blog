import styled from "@emotion/styled";
import Link from "next/link";
import PropTypes from "prop-types";

const Heading = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: 900;
  font-size: 3.95285rem;
  line-height: 4.375rem;
  margin-bottom: 2.625rem;
  margin-top: 0;
  word-wrap: break-word;
`;

const Header = ({ pageTitle }) => {
  return (
    <>
      <header>
        <Heading>
          <Link href="/">{pageTitle}</Link>
        </Heading>
      </header>
    </>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string,
};

export default Header;
