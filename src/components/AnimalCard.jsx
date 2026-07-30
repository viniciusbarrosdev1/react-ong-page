function AnimalCard( { animal }) {
    return (
        <div>
          <img src={animal.fotos[0]} alt={animal.nome} />
            <h1>{animal.nome}</h1>
        </div>
    )
}

export default AnimalCard