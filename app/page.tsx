// Utilizando icons - npm install @tabler/icons-react 
// npm install swiper, no site da Swiper - biblioteca para o carrossel de imagens 

import { fetchData } from "@/api/api";
import Acomodacoes from "@/widgets/Acomodacoes";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import NavegacaoAbasHorizontal from "@/widgets/NavegacaoAbasHorizontal";
import Rodape from "@/widgets/Rodape";

export default async function Home() {

  const dados = await fetchData()

  return (
    <>
      <header className="container mx-auto">
        <BarraSuperior />
        <BarraPesquisa />
      </header>

      <hr className="border-gray-200 my-6 "/>

      <main className="container mx-auto">
        <NavegacaoAbasHorizontal icons={dados.icons} /> 
        <Acomodacoes accommodation={dados.accommodation}/>
      </main>
    
      <footer className="bg-gray-200">
        <Rodape />  
      </footer>
    </>
  );
}
