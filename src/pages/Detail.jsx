import React from "react";
import styled from "styled-components";
import LayoutLeft from "../Layout/LayoutLeft";
import LayoutRight from "../Layout/LayoutRight";
import { useSelector } from "react-redux";
import DetailContent from "./DetailContent";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function Detail({ pokemonNumber }) {
  const pokemonData = useSelector((state) => state.pokemon.data[pokemonNumber-1]);
  console.log(pokemonData);
  return (
    <>
      <Container>
        <LayoutLeft>
          {pokemonData ? (
            <DetailContent name={pokemonData.name} img={pokemonData.img} />
          ) : (
            pokemonData
          )}
        </LayoutLeft>
        <LayoutRight>
          {pokemonData ? pokemonData.description : pokemonData}
        </LayoutRight>
      </Container>
    </>
  );
}
