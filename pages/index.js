import React from "react";
import Head from "next/head";
import styled from "styled-components";
import SocialButton from "./components/SocialButton";
import Lamp from "./components/Lamp";

export default function Home() {
  const [lightsOn, setLightsOn] = React.useState(false);

  function turnLightOn() {
    setLightsOn(true);
  }

  return (
    <div>
      <Head>
        <title>:)</title>
        <meta name="description" content="Sitio personal de Giancarlo Brusca" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!lightsOn && <Lamp click={turnLightOn} />}

      <Main>
        <Hi>Hola.</Hi>
        <Subtitle>
          No sé qué voy a hacer con esto, pero algo voy a hacer.
        </Subtitle>
        <SocialIcons>
          <SocialButton
            social="Twitter"
            color="#2196f3"
            link="https://twitter.com/giancarlol__"
            iconText="Escribo muchas boludeces sobre cualquier tema"
          />
          <SocialButton
            social="GitHub"
            color="#607d8b"
            link="https://github.com/giancarlol"
            iconText="Podría tener más proyectos"
          />
          <SocialButton
            social="LinkedIn"
            color="#3f51b5"
            link="https://www.linkedin.com/in/giancarlo-brusca/"
            iconText="Vendo un poco de humo"
          />
        </SocialIcons>
      </Main>

      <footer></footer>
    </div>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  padding: 0 20px;

  text-align: center;
  background-color: white;
`;

const Hi = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 100px;
`;

const SocialIcons = styled.section`
  display: flex;
  gap: 10px;
`;
