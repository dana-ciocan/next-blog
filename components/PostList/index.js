import styled from "@emotion/styled";
import Link from "next/link";
import PropTypes from "prop-types";

const PostDate = styled.small`
  color: #f39;
  font-size: 80%;
  margin: 0.75rem 0 0.5rem 0;
`;

const Posts = styled.ul`
  list-style-type: none;
  margin-left: -2.5rem;
  margin-top: 0;
  margin-bottom: 1.75rem;
`;

const Post = styled.li``;

const PostTitle = styled.h3`
  margin-bottom: 0.4375rem;
  margin-top: 3.5rem;
  font-family: "Merriweather", "Georgia", serif;
  font-size: 1.4427rem;
  line-height: 1.1;
  font-weight: 900;
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
                <PostTitle>
                  <Link href={{ pathname: `/post/${post.slug}` }}>
                    {post.frontmatter.title}
                  </Link>
                </PostTitle>
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
