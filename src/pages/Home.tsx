import Header from "../components/Header";
import HeroDog from "../assets/hero/hero-dog.png";

function Home() {
  return (
    <div className="bg-[var(--cor-primaria)] flex items-center min-h-screen">
      <div className="flex-1">
        <h1 className="text-5xl font-bold">TEXTO HERO DE TESTE</h1>
        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia consequuntur quasi sapiente culpa vel dicta officia incidunt dolor voluptas. Minus illo distinctio nostrum nam minima debitis sit deleniti sapiente.</p>
      </div>

      <div className="flex-1 flex justify-end items-end">
        <img src={HeroDog} alt="Cachorro" />
      </div>
    </div>
  );
}

export default Home;
