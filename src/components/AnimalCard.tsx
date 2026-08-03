type Animal = {
  id: number;
  nome: string;
  fotos: string[];
};

interface AnimalCardProps {
  animal: Animal;
}

function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <div>
      <img src={animal.fotos[0]} alt={animal.nome} />
      <h1>{animal.nome}</h1>
    </div>
  );
}

export default AnimalCard;