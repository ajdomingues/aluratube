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

    // console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "Column",
                flex: 1,
            }}>
                {/* {mensagem} */}
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} >
                    Conteúdo
                </Timeline>
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
    border-radius:40px;
}
.user-info{
    margin-top: 50px;
    display:flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
}
.banner{
width: 1512px;
height: 230px;
margin-top: 56px;
position: relative;
left:0px;
border-radius: 0px;
}
`;
function Header() {
    return (
        <StyledHeader>
            <img className="banner" src={config.banner} />
            {/* <div> */}
            {/* <img src="banner" /> */}

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
            {/* {config.github}
                {config.portifolio} */}
            {/* Header */}
            {/* </div> */}
        </StyledHeader>
    )
}

function Timeline(props) {
    // console.log("Dentro do componente", props.playlists);
    const playlistsNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistsNames.map((playlistsName) => {
                const videos = props.playlists[playlistsName];
                console.log(playlistsName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistsName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
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