import matter from "gray-matter";
import Layout from "@components/Layout";
import PostList from "@components/PostList";
import PropTypes from "prop-types";

const Index = ({ title, description, posts }) => {
  return (
    <Layout pageTitle={title}>
      <h1 className="title">Welcome to my blog!</h1>
      <p className="description">{description}</p>
      <main>
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
    return data;
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
