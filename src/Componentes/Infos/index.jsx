import estilos from "./infos.module.css";
import Link from "next/link";

export default function Infos(){
    return(
        <div className={estilos.container_info}>    
            <div className={estilos.invest}>
                <h1>Retorno médio de <span>8%</span></h1>
                <Link href="#banner">INVESTIR AGORA</Link>
            </div>
            <div className={estilos.vantagem}>
                <h1>O caminho certo para o <span>sucesso</span></h1>
                <div className={estilos.cards}>
                    <div className={estilos.card}>
                        <h3>Planeje seu Investimento</h3>
                        <p>Analise suas metas e escolha o melhor caminho com apoio profissional.</p>
                    </div>
                    <div className={estilos.card}>
                        <h3>Preencha o Formulário</h3>
                        <p>Informe seus dados e preferências para iniciarmos o atendimento.</p>
                    </div>
                    <div className={estilos.card}>
                        <h3>Aguarde o Contato do Consultor</h3>
                        <p>Um de nossos especialistas entrará em contato para entender suas necessidades.</p>
                    </div>
                    <div className={estilos.card}>
                        <h3>Receba seus Lucros</h3>
                        <p>Acompanhe o crescimento do seu investimento com segurança e transparência.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}