import estilos from "./clientes.module.css";
import Image from "next/image";
import robert from "./robert.jpg";
import joao from "./joao.webp";

export default function Clientes(){
    return(
        <div className={estilos.container_clientes}>
            <h1>Feedback dos clientes</h1>
        <div className={estilos.cards}>
                <div className={estilos.card}>
                <Image src={robert} alt="Robert Downey Jr."/>
                <p>Robert Downey Jr.</p>
                <p>Eu sempre tive medo de investir, mas a equipe da Capital Verde me orientou em cada passo. Hoje consigo fazer meu dinheiro render com segurança. Atendimento incrível!</p>
            </div>
            <div className={estilos.card}>
                <Image src={joao} alt="João Adibe"/>
                <p>João Adibe</p>
                <p>Em menos de 6 meses já vi meus primeiros retornos. O planejamento foi todo feito com base no meu perfil. É nítido que a corretora realmente se preocupa com os clientes.</p>
            </div>
        </div>
        </div>
    )
}