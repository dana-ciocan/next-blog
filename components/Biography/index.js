import styled from "@emotion/styled";
import PropTypes from "prop-types";

const BiographyContainer = styled.div`
  display: flex;
  margin-bottom: 4.375rem;
`;

const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 0.875rem;
`;

const BiographyText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 0;
  margin-bottom: 1.75rem;
  display: inline;

  a {
    border-bottom: 1px solid #00b3b3;
  }
`;

const Biography = ({ description }) => {
  return (
    <BiographyContainer>
      <ProfilePic src="/profile-pic.jpg" />
      <BiographyText dangerouslySetInnerHTML={{ __html: description }} />
    </BiographyContainer>
  );
};

Biography.propTypes = {
  description: PropTypes.string,
  twitter: PropTypes.string,
};

export default Biography;
