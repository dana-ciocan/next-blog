import Head from "next/head";
import Header from "../Header";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const PageContainer = styled.div`
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`;

const Layout = ({ children, pageTitle }) => {
  return (
    <PageContainer>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <section className="layout">
        <Header pageTitle={pageTitle} />
        <div className="content">{children}</div>
      </section>
      <footer>
        &copy; {new Date().getFullYear()} &middot; Built with{" "}
        <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
          Next.js
        </a>
      </footer>
    </PageContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  pageTitle: PropTypes.string,
};

export default Layout;
