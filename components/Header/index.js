import styled from "@emotion/styled";
import Link from "next/link";
import PropTypes from "prop-types";

const Heading = styled.h1`
  color: rgb(220, 220, 220);
  font-family: Montserrat, sans-serif;
  font-size: 4rem;
  font-weight: 900;
  line-height: 4.375rem;
  text-rendering: optimizeLegibility;
  margin-bottom: 2.75rem;
`;

const Header = ({ pageTitle }) => {
  return (
    <>
      <header className="header">
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
