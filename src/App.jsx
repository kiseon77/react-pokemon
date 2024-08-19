import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";

function App() {
  const [pokemonNumber, setpokemonNumber] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Detail pokemonNumber={pokemonNumber} />} />
        </Routes>
      </BrowserRouter>
      <Main setpokemonNumber={setpokemonNumber} />
    </>
  );
}

export default App;
