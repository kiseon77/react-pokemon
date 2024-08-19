
import ListCard from "../assets/ListCard";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 32px;
`;

export default function Main({ setpokemonNumber }) {
  const pokemonData = useSelector((state) => state.pokemon);
  return (
    <Container>
      {pokemonData.data.map((el) => {
        return (
          <div onClick={()=>{setpokemonNumber(el.id)}}>
            <ListCard key={el.id} id={el.id} name={el.name} img={el.img} />;
          </div>
        );
      })}
    </Container>
  );
}
