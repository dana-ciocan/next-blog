import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

import Layout from "@components/Layout";
import styled from "@emotion/styled";
import { months } from "@constants/styling";

const PostTitle = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: 900;
  margin-bottom: 0;
  margin-top: 1.75rem;
  word-wrap: break-word;
  font-size: 2.5rem;
  line-height: 2.75rem;
  text-rendering: optimizeLegibility;
`;

const PostDate = styled.p`
  font-size: 0.83325rem;
  line-height: 1.75rem;
  display: block;
  margin-bottom: 1.75rem;
  margin-top: 0;
`;

const BlogPost = ({ siteTitle, frontmatter, markdownBody }) => {
  if (!frontmatter) return <></>;
  const postDate = new Date(frontmatter.date);
  return (
    <Layout pageTitle={`${siteTitle}`}>
      <article>
        <PostTitle>{frontmatter.title}</PostTitle>

        <PostDate>{`${postDate.getDate()} ${
          months[postDate.getMonth()]
        } ${postDate.getFullYear()}`}</PostDate>
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
    date: PropTypes.string,
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
