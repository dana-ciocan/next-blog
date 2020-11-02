import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

import Layout from "@components/Layout";

const BlogPost = ({ siteTitle, frontmatter, markdownBody }) => {
  if (!frontmatter) return <></>;

  return (
    <Layout pageTitle={`${siteTitle}`}>
      <Link href="/">
        <a>Back to post list</a>
      </Link>
      <article>
        <h1>{frontmatter.title}</h1>
        <p>By {frontmatter.author}</p>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </Layout>
  );
};

BlogPost.propTypes = {
  siteTitle: PropTypes.string,
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
  }),
  markdownBody: PropTypes.string,
};

export default BlogPost;

export const getStaticProps = async ({ ...ctx }) => {
  const { postname } = ctx.params;

  const content = await import(`../../posts/${postname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
};

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key) => {
      let slug = key.replace(/^.*[\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
    // eslint-disable-next-line no-undef
  })(require.context("../../posts", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
