import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  padding-bottom: 70px;
  flex-basis: 50%;
  margin-top: 16px;
  border: 0.5px solid #000;
  box-shadow: inset 5px 5px 4px #3e0000;
`;
const FirstSection = styled.div`
  height: 100px;
`;
const Content = styled.div`
  color: #fff;
  font-size: 14px;
  padding: 10px;
  text-align: center;
  word-break:keep-all;
  line-height: 150%;
  margin: 32px auto;
  width: 90%;
  height: 100%;
  background-color: #232323;
  border-radius: 4px;
`;

const Keybords = styled.div`
  margin: 32px auto;
  width: 90%;
  height: 100px;
  background-color: #00213e;
  padding: 0 3px 3px 0;
  border-radius: 4px;
  overflow: hidden;
`;
const Keybord = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  div {
    border: 0.5px solid #000;
    background-color: #28aafe;
    width: 100%;
  }
`;

const LongRoundSquare = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin: 0 32px 16px 16px;
  div {
    width: 20%;
    height: 12px;
    background-color: #002f2d;
    border: 0.5px solid #000;
    border-radius: 25px;
  }
`;
const WhiteRoundSquares = styled.div`
  width: 40%;
  height: 60px;
  background-color: #5e474a;
  display: flex;
  justify-content: flex-end;
  margin: 0 32px 16px 16px;
  border-radius: 4px;
  border: 0.5px solid #000;
  overflow: hidden;
  padding: 0 2px 3px 0;
  div {
    width: 50%;
    height: 100%;
    background-color: #dedede;
    border-left: 0.5px solid #000;
  }
  div:last-child {
    border-radius: 0 4px 4px 0;
  }
`;
const AssetYellowLens = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f7de1a;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    border: 0.5px solid #000;
    & > div {
      position: absolute;
      bottom: 1.5px;
      right: 1.5px;
      background-color: #000;
      opacity: 40%;
      width: 90%;
      height: 90%;
      border-radius: 50%;
      & > div {
        position: absolute;
        top: 1px;
        left: 1px;
        background-color: #f7de1a;
        width: 50%;
        height: 50%;
        border-radius: 50%;
        & > div {
          background-color: #fff;
          margin: 2px;
          width: 60%;
          height: 60%;
          border-radius: 50%;
        }
      }
    }
  }
`;
const FourthSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 32px;
`;
const FifthSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 32px;
  gap: 10%;
  height: 80px;
`;
export default function LayoutRight({ children }) {
  return (
    <Layout>
      <FirstSection>
        <Content>{children}</Content>
      </FirstSection>

      <Keybords>
        <Keybord>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Keybord>
        <Keybord>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Keybord>
      </Keybords>
      <LongRoundSquare>
        <div></div>
        <div></div>
      </LongRoundSquare>
      <FourthSection>
        <WhiteRoundSquares>
          <div></div>
          <div></div>
        </WhiteRoundSquares>
        <AssetYellowLens>
          <div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </AssetYellowLens>
      </FourthSection>
      <FifthSection>
        <Content></Content>
        <Content></Content>
      </FifthSection>
    </Layout>
  );
}
