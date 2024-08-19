import React from "react";
import styled from "styled-components";

const Box = styled.div`
  text-align: center;
  padding: 30px;
  img {
    width: 50%;
  }
  div {
    color: #fff;
    margin-bottom: 20px;
  }
`;
export default function DetailContent({ img, name }) {
  return (
    <Box>
      <img src={img[0]} alt="" />
      <img src={img[1]} alt="" />
      <div>{name}</div>
    </Box>
  );
}
