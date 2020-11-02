import Head from "next/head";
import Header from "../Header";
import PropTypes from "prop-types";

const Layout = ({ children, pageTitle }) => {
  console.log("pageTitle: ", pageTitle);
  return (
    <>
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
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  pageTitle: PropTypes.string,
};

export default Layout;
