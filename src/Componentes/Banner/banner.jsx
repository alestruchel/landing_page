import estilos from "./banner.module.css";

export default function Banner(){
    return(
        <section className={estilos.container_banner} id="banner">
            <div className={estilos.form}>
                <form className={estilos.formu}
                action="https://formsubmit.co/seuemail@exemplo.com"
                method="POST">
                    <h2>ENTRE EM CONTATO</h2>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome" required/>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" required/>
                    <label htmlFor="telefone">Telefone</label>
                    <input type="number" name="telefone" id="telefone" required/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div className={estilos.texto}>
                    <h1>Invista com inteligência, cresça com segurança.</h1>    
                    <h3>O que você pode conquistar:</h3>
                    <ul>
                        <li>Valor claro e real para o seu perfil</li>
                        <li>Planejamento que se adapta aos seus objetivos</li>
                        <li>Entendimento das suas necessidades financeiras</li>
                    </ul>
            </div>
        </section>
    )
}