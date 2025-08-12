import estilos from "./rodape.module.css";
import Image from "next/image";
import Link from "next/link";
import email from "./email.png";
import tele from "./tele.png";
import insta from "./insta.png";
import face from "./face.png";

export default function Rodape(){
    return(
        <div className={estilos.container_rodape}>
            <div className={estilos.card}>
                <Link href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                <Image src={email} alt="Email"/>
                <p>capitalverde@capitalverde.com.br</p>
                </Link> 
                
            </div>
            <div className={estilos.card}>
                <Link href="https://web.whatsapp.com/" target="_blank">
                <Image src={tele} alt="Telefone"/>
                <p>+55 (11)91234-5678</p>
                </Link>
            </div>
            <div className={estilos.card}>
                <Link href="https://www.instagram.com/" target="_blank">
                <Image src={insta} alt="Instagram"/>
                <p>@capitalverde</p>
                </Link>
            </div>
            <div className={estilos.card}>
                <Link href="https://www.facebook.com/?locale=pt_BR" target="_blank">
                <Image src={face} alt="Facebook"/>
                <p>/CapitalVerde</p>
                </Link>
            </div>
        </div>
    )
}