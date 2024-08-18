import React from "react";
import styled from "styled-components";

const HeaderBg = styled.div`
  width: 100%;
  height: 120px;
  border-bottom: 0.5px solid #000;
  box-shadow: 0px 16px #7f0e22;
`

const HeaderLens = styled.div`
  position: relative;
  background-color: #e4e3e8;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 0.5px solid #000;
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #2aa8f9;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    border: 0.5px solid #000;
    & > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #000;
      opacity: 40%;
      width: 80%;
      height: 80%;
      border-radius: 50%;
      & > div {
        position: absolute;
        top: 3px;
        left: 3px;
        background-color: #2aa8f9;
        width: 50%;
        height: 50%;
        border-radius: 50%;
        & > div {
          background-color: #fff;
          margin: 5px;
          width: 50%;
          height: 50%;
          border-radius: 50%;
        }
      }
    }
  }
`;

export default function Header() {
  return (
    <HeaderBg>
      <HeaderLens>
        <div>
          <div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </HeaderLens>
      <div></div>
    </HeaderBg>
  );
}
