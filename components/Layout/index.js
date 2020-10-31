import Head from "next/head";
import Header from "../Header";
import PropTypes from "prop-types";

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <section className="layout">
        <Header />
        <div className="content">{children}</div>
      </section>
      <footer>Built by me!</footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  pageTitle: PropTypes.string,
};

export default Layout;
