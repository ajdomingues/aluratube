import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    // const mensagem = 'Bem-vindo ao Alura Tube!'
    const estilosDaHomePage = {
        // backgroundColor: "red" 
    };

    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    // console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                {/* {mensagem} */}
                {/* Prop Drilling */}
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
                    Conteúdo
                </Timeline>
                <Favoritos />
            </div>
        </>
    );
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

const StyledHeader = styled.div`
img{
    width:80px;
    height:80px;
    border-radius:50%;
    margin-top: 10px;
}
.user-info{
    /* margin-top: 50px; */
    display:flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
}
.banner{
width: 1512px;
height: 230px;
margin-top: 50px;
/* margin-bottom: -75px; */
position: relative;
left:0px;
border-radius: 0%;
background-color: blue;
background-image: url(${({ bg }) => bg});
height: 230px;

}
`;
const StyledBanner = styled.div`
    /* background-image: url(${config.bg}); */
`;

function Header() {
    return (
        <StyledHeader>
            {/* banner             */}
            {/* <StyledBanner bg={config.banner}/> */}
            <img className="banner" src={config.banner} />
            {/* informações de usuário */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}
// ou props
function Timeline({ searchValue, ...propriedades }) {
    // console.log("Dentro do componente", props.playlists);
    const playlistNames = Object.keys(propriedades.playlists);
    // Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                // console.log(playlistsName);
                // console.log(videos);
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {/* filter é um comando da array do JS */}
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                })
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>
                    </section>
                )
            })}
            {/* Frontend
            Jogos */}
            {/* </div> */}
        </StyledTimeline>
    )
}
function Favoritos() {
    <h2>Favoritos AluraTubes</h2>
}