import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  flex-basis: 50%;
  margin-top: 16px;
  border: 0.5px solid #000;
  padding-bottom: 70px;
`;

const FirstSection = styled.div`
  background-color: #9a9393;
  width: 90%;
  height: 60%;
  margin: 32px auto;
  margin-bottom: 60px;
  border-radius: 4px;
  border: 0.5px solid #000;
`;
const FirstSectionBox = styled.div`
  height: 100%;
  margin-right: 2px;
  margin-bottom: 2px;
  padding: 20px;
  background-color: #dedede;
  border: 0.5px solid #000;
  border-radius: 4px;
`;
const DisplayTOP = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;
const AssetRedDot = styled.div`
  margin-bottom: 8px;
  width: 10px;
  height: 10px;
  background-color: #d61039;
  border: 0.5px solid #000;
  border-radius: 50%;
`;
const Content = styled.div`
  margin: 8px auto;
  margin-bottom: 16px;
  width: 100%;
  height: 80%;
  background-color: #232323;
  border: 0.5px solid #000;
  border-radius: 4px;
`;
const DisplayUnder = styled.div`
  margin: 0 auto;
  width: 95%;
  display: flex;
  justify-content: space-between;
  div:first-child {
    width: 20px;
    height: 20px;
    background-color: #d61039;
    border: 0.5px solid #000;
    border-radius: 50%;
  }
  div:last-child {
    width: 30px;
    height: 20px;
    background-color: #e5e5f7;
    opacity: 0.8;
    background-size: 20px 20px;
    background-color: #e5e5f7;
    opacity: 0.8;
    background: repeating-linear-gradient(
      #000000,
      #000000 4px,
      #dedede 4px,
      #dedede 8px,
      #000000 8px,
      #000000 12px,
      #dedede 12px,
      #dedede 16px,
      #000000 16px,
      #000000 20px
    );
  }
`;

const AssetBlackDot = styled.div`
  width: 80px;
  height: 80px;
  background-color: #00312c;
  border: 0.5px solid #000;
  border-radius: 50%;
  box-shadow: 2px 2px #120000;
`;

const LongRoundSquare = styled.div`
  display: flex;
  gap: 30px;
  margin: 0 16px 16px 16px;
`;

const AssetRedLongRoundSquare = styled.div`
  width: 100%;
  height: 6px;
  background-color: #db0d31;
  border: 0.5px solid #000;
  border-radius: 25px;
`;
const AssetBlueLongRoundSquare = styled.div`
  width: 100%;
  height: 6px;
  background-color: #18648d;
  border: 0.5px solid #000;
  border-radius: 25px;
`;
const AssetGreenLongRoundSquare = styled.div`
  width: 100%;
  height: 70%;
  background-color: #52ae5f;
  border: 0.5px solid #000;
  border-radius: 3px;
`;
const Cross = styled.div`
  width: 80px;
`;

const AssetCross = styled.div`
  margin-right: 7%;
  position: relative;
  left: 25px;
  background: #01322d;
  width: 30px;
  height: 80px;
  border-radius: 4px;
  filter: drop-shadow(2px 2px #120000);
  &:after {
    content: "";
    background: #01322d;
    position: absolute;
    width: 80px;
    height: 30px;
    left: -25px;
    top: 26px;
    border-radius: 4px;
  }
  & > div {
    z-index: 1;
    width: 16px;
    height: 16px;
    height: 16px;
    border: 3px solid #000;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
const SecondSection = styled.div`
  margin: 0 5%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const Square = styled.div`
  width: 60%;
`;
export default function LayoutLeft({ children }) {
  return (
    <Layout>
      <FirstSection>
        <FirstSectionBox>
          <DisplayTOP>
            <AssetRedDot />
            <AssetRedDot />
          </DisplayTOP>
          <Content>{children}</Content>
          <DisplayUnder>
            <div></div>
            <div></div>
          </DisplayUnder>
        </FirstSectionBox>
      </FirstSection>

      <SecondSection>
        <AssetBlackDot />
        <Square>
          <LongRoundSquare>
            <AssetRedLongRoundSquare />
            <AssetBlueLongRoundSquare />
          </LongRoundSquare>
          <AssetGreenLongRoundSquare />
        </Square>
        <Cross>
          <AssetCross>
            <div></div>
          </AssetCross>
        </Cross>
      </SecondSection>
    </Layout>
  );
}
