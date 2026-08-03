import animais from "../data/animais.json";
import AnimalCard from "../components/AnimalCard";

function Animais() {
  return (
    <div>
      {animais.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
}

export default Animais;

