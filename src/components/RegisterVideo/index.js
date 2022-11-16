import React from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";
// Whiteboarding
// Custom Hook

//busca tumbnail
function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v"[1])}/hqdefault.jpg`;
}

// busca info de vídeos do YouTube, dados gerais
// function getVideoId(url) {
//     const getVideoId = url.split("v=")[1];
//     const ampersandPosition = videoId.indexOf("&");
//     if (ampersandPosition !== -1) {
//         return videoId.substring(0, ampersandPosition);
//     }
//     return videoId;
// }


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

const PROJECT_URL = "https://ivwptwduqxtxhylwgkuu.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2d3B0d2R1cXh0eGh5bHdna3V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1Mzc5MTIsImV4cCI6MTk4NDExMzkxMn0.XcD1bWFKpmkJP8grGo-0DrHDhWOyHMZ_dyaGAlE-n5c"
// const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export default function RegisterVideo() {
    const formCadastro = useForm({
        // initialValues: { titulo: "aaaa", url: "bbbbbb" }
        initialValues: { titulo: "" }
    });
    const [formVisivel, setFormVisivel] = React.useState(true);
    //  console.log();
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

                        // interface entre front e backend
                        supabase.from("video").insert({
                            title: formCadastro.values.titulo,
                            url: formCadastro.values.url,
                            thumb: getThumbnail(formCadastro.values.url),
                            playlist: "jogos",
                        })
                            .then((oqueveio) => {
                                console.log(oqueveio);
                            })
                            .catch((err) => {
                                console.log(err);
                            })
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