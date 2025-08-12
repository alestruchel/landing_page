import estilos from "./beneficios.module.css";

export default function Beneficios(){
    return(
        <div className={estilos.container_beneficios}>
            <h1>Por que investir <span>conosco</span>?</h1>
            <div className={estilos.cards}>
                <div className={estilos.card}>
                    <h3>Análise Financeira</h3>
                    <p>Tenha clareza sobre sua situação financeira e descubra como otimizar seus investimentos com segurança e estratégia.</p>
                </div>
                <div className={estilos.card}>
                    <h3>Planejamento de Investimentos</h3>
                    <p>Construa um futuro sólido com estratégias alinhadas ao seu perfil e objetivos financeiros.</p>
                </div>
                <div className={estilos.card}>
                    <h3>Consultoria Empresarial</h3>
                    <p>Impulsione os resultados da sua empresa com uma gestão mais eficiente e decisões financeiras bem fundamentadas.</p>
                </div>
            </div>
        </div>
    )
}