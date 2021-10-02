import React from "react";
import useSound from "use-sound";
import styled from "styled-components";

export const Lamp = ({ click }) => {
  const [showText, setShowText] = React.useState(false);
  const [play] = useSound("sounds/light-switch.mp3");

  return (
    <LampWrapper>
      <Tube />
      <Holder />
      <Circle
        onClick={() => {
          play();
          click();
        }}
        onMouseOver={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
      />
      {showText && <Text>Sí, prendé la luz, por favor.</Text>}
      <Darkness />
    </LampWrapper>
  );
};

const LampWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Tube = styled.div`
  position: absolute;
  top: 0;
  width: 2px;
  height: 40vh;
  background-color: yellow;
`;

const Holder = styled.div`
  position: absolute;
  top: 40vh;
  width: 20px;
  height: 20px;
  background-color: yellow;
`;

const Circle = styled.div`
  cursor: pointer;
  position: absolute;
  top: 41vh;
  width: 100px;
  height: 100px;
  border-radius: 60px;
  background-color: white;
`;

const Text = styled.p`
  position: absolute;
  top: 65vh;
  color: white;
  z-index: 1;
`;

const Darkness = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;
