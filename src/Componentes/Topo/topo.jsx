import estilos from "./topo.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo-vertical.png";

export default function Topo(){
    return(
        <section className={estilos.container_topo}>
            <div className={estilos.topo}>
                <Image className={estilos.logo} src={logo} alt="Logo"/>
                <Link className={estilos.link} href="#banner">INVISTA AGORA</Link>
            </div>
        </section>
    )
}