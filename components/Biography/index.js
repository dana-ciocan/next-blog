import styled from "@emotion/styled";
import PropTypes from "prop-types";

const BiographyContainer = styled.div`
  display: flex;
`;

const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 0.875rem;
`;

const BiographyText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TwitterLink = styled.a`
  margin-top: 0.5rem;
  box-shadow: 0 1px 0 0 currentColor;
`;

const Biography = ({ description, twitter }) => {
  return (
    <BiographyContainer>
      <ProfilePic src="/profile-pic.jpg" />
      <BiographyText>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <TwitterLink
          href={`https://www.twitter.com/${twitter}`}
          target="_blank"
        >
          Follow her on Twitter
        </TwitterLink>
      </BiographyText>
    </BiographyContainer>
  );
};

Biography.propTypes = {
  description: PropTypes.string,
  twitter: PropTypes.string,
};

export default Biography;
