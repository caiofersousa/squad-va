import CampoTexto from "../CampoDeTexto";
import './Formulario.css';
const Forumulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do dev</h2>
                <CampoTexto label="Nome" placeholder="Digite seu Nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
                <CampoTexto label="Imagem" placeholder="Digite seu Imagem" />
            </form>


        </section>

    );
}

export default Forumulario