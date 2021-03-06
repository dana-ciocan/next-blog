import matter from "gray-matter";
import Layout from "@components/Layout";
import Biography from "@components/Biography";
import PostList from "@components/PostList";
import PropTypes from "prop-types";
import "typeface-montserrat";
import "typeface-merriweather";

const Index = ({ title, description, posts }) => {
  return (
    <Layout pageTitle={title} frontPage={true}>
      <main>
        <Biography description={description} />
        <PostList posts={posts} />
      </main>
    </Layout>
  );
};

Index.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  posts: PropTypes.object,
};

export default Index;

export const getStaticProps = async () => {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data.reverse();
    // eslint-disable-next-line no-undef
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
};
