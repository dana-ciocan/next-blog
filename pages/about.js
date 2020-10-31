import Layout from "@components/Layout";
import PropTypes from "prop-types";

const About = ({ title, description }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">Welcome to my blog!</h1>

        <p className="description">{description}</p>

        <p>
          I am a very exciting person. I know this because I&apos;m following a
          very exciting tutorial, and a not-exciting person wouldn&apos;t do
          that.
        </p>
      </Layout>
    </>
  );
};

About.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default About;

export const getStaticProps = async () => {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
};
