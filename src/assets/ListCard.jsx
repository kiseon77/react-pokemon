import React, { useState } from "react";
import styled from "styled-components";

const CardBox = styled.div`
  background-color: #e5e5f7;
  width: 120px;
  text-align: center;
  border-radius: 8px;
  border: 0.5px solid #000;
`;
const CardImg = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  img {
    width: 120px;
  }
`;
const PokemonName = styled.h3`
  border-top: 0.5px solid #000;
  margin: 0;
  padding: 28px 24px 18px 24px;
  font-size: 18px;
  text-align: center;
  position: relative;
  p {
    position: absolute;
    top: -2px;
    left: 8px;
    font-size: 12px;
    font-weight: 400;
  }
`;
const ImgBtn = styled.button`
  font-size: 16px;
  padding: 4px 8px;
  margin: 4px;
`;
export default function ListCard({ id, img, name }) {
  const [imgPostion, setImgPostion] = useState(0);
  return (
    <CardBox>
      <CardImg>
        <img src={img[imgPostion]} alt="" />
      </CardImg>
      <ImgBtn
        onClick={() => {
          setImgPostion(0);
        }}
      >
        정면
      </ImgBtn>
      <ImgBtn
        onClick={() => {
          setImgPostion(1);
        }}
      >
        뒷면
      </ImgBtn>
      <PokemonName>
        <p>NO.{id}</p>
        {name}
      </PokemonName>
    </CardBox>
  );
}
