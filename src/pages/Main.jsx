import React from "react";
import styled from "styled-components";
import LayoutLeft from "../Layout/LayoutLeft";
import LayoutRight from "../Layout/LayoutRight";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function Main() {
  return (
    <Container>
      <LayoutLeft>
        asfsdf
      </LayoutLeft>
      <LayoutRight>dfgfd</LayoutRight>
    </Container>
  );
}
