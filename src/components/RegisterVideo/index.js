import React from "react";
import { StyledRegisterVideo } from "./styles";

// Whiteboarding
// Cuustoom Hook
function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name;
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        // initialValues: { titulo: "aaaa", url: "bbbbbb" }
        initialValues: { titulo: "", url: "" }
    });
    const [formVisivel, setFormVisivel] = React.useState(true);
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
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        // console.log(values);
                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input placeholder="Título do vídeo"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                            // onChange={(evento) => {
                            //     const value = evento.target.value;
                            //     setValues({
                            //         ...values,
                            //         titulo: value,
                            //     });
                            // }} 
                            />
                            <input placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}

                            // onChange={(evento) => {
                            //     const value = evento.target.value;
                            //     setValues({
                            //         ...values,
                            //         url: value,
                            //     });
                            // }}
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