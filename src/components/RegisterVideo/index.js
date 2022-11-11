import React from "react";
import { StyledRegisterVideo } from "./styles";

export default function RegisterVideo() {
    const [formVisivel, setFormVisivel] = React.useState(false);
    const [values, setValues] = React.useState({ titulo: "", url: "" });
    // const [url, setUrl] = React.useState("");
    /*
    - dados necessários:
        - titulo
        - url do vídeo
    - onsubimit do form
    - limpar o formulário no final
    */

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            { /* desse jeito {formVisivel &&()} ou */}
            {/* No  React vaai usar
            - Terrnário
            - Operadores de curto-circuito
        */}
            {formVisivel
                ? (

                    <form>
                        <div>
                            <button className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input placeholder="Título do vídeo"
                                value={values.titulo}
                                onChange={(evento) => {
                                    const value = evento.target.value;                                    
                                    setValues({
                                        ...values,
                                        titulo: value,
                                    });
                                }} />
                            <input placeholder="URL"
                                value={values.url}
                                onChange={(evento) => {
                                    const value = evento.target.value;
                                    setValues({
                                        ...values,
                                        url: value,
                                    });
                                }}
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}
// [ok] Botão pra add
// [ok] Modal
// [ok] -> Controlar o state
// [] -> Formulário