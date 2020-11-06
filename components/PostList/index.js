import styled from "@emotion/styled";
import Link from "next/link";
import PropTypes from "prop-types";

const PostDate = styled.div`
  color: #f39;
  font-size: 80%;
  margin: 0.75rem 0 0.5rem 0;
`;

const Posts = styled.ul`
  list-style-type: none;
  margin: 6rem 0 2.5rem -2.5rem;
`;

const Post = styled.li`
  margin-top: 3.5rem;
`;

const PostTitle = styled.a`
  font-size: 145%;
  font-weight: 700;
`;

const PostList = ({ posts }) => {
  if (posts === "undefined") return null;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <Posts>
        {posts &&
          posts.map((post) => {
            const postDate = new Date(post.frontmatter.date);
            return (
              <Post key={post.slug}>
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <PostTitle>{post.frontmatter.title}</PostTitle>
                </Link>
                <PostDate>{`${postDate.getDate()} ${
                  months[postDate.getMonth()]
                } ${postDate.getFullYear()}`}</PostDate>
                <div>{post.frontmatter.description}</div>
              </Post>
            );
          })}
      </Posts>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }),
    })
  ),
};

export default PostList;
