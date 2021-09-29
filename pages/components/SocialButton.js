import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

function renderIcon(social) {
  switch (social) {
    case "Twitter":
      return <FaTwitter />;
    case "GitHub":
      return <FaGithub />;
    case "LinkedIn":
      return <FaLinkedinIn />;
    default:
      throw new Error(`Unhandled Social Media: ${social}`);
  }
}

const SocialButton = ({ social, color, link, iconText }) => {
  const [showText, setShowText] = React.useState(false);

  return (
    <Wrapper>
      <a href={link} target="_blank" rel="noreferrer noopener">
        <LinkButton
          onMouseOver={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
          color={color}
        >
          {social && renderIcon(social)}
        </LinkButton>
      </a>
      <IconText show={showText}>{iconText}</IconText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinkButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;

  border: 1px solid transparent;
  border-radius: 100%;
  background-color: black;

  transition: all 0.3s;

  &:hover {
    background-color: ${({ color }) => color};
  }

  svg {
    color: white;
  }
`;

const IconText = styled.p`
  position: absolute;

  margin-top: 70px;
  font-size: 0.8rem;

  visibility: ${({ show }) => (show ? "default" : "hidden")};
`;

export default SocialButton;
