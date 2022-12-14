import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";

const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 30px;
  font-weight: 600;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>HI yeowooyaro</Title>
    </div>
  );
};

export default Home;
