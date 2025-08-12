import Topo from "../Componentes/Topo/topo";
import Banner from "../Componentes/Banner/banner";
import Beneficios from "../Componentes/Beneficios/index";
import Infos from "../Componentes/Infos/index";
import Clientes from "../Componentes/Clientes/index";
import Rodape from "../Componentes/Rodape/index";

export default function Home() {
  return (
    <div>
      <header>
          <Topo/>
      </header>
      <main>
          <Banner/>
          <Beneficios/>
          <Infos/>
          <Clientes/>
      </main>
      <footer>
        <Rodape/>
      </footer>
    </div>
  );
}
