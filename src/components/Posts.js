import styled from 'styled-components';

import PostTopo from "./post_components/Topo.js";
import PostFundo from "./post_components/Fundo.js";

// usuariosImgs
import meowedImg from './assets/img/meowed.svg';
import barkedImg from './assets/img/barked.svg';
// conteudosImgs
import gatoImg from './assets/img/gato-telefone.svg';
import dogImg from './assets/img/dog.svg';
// curtidasImgs
import respondeaiImg from './assets/img/respondeai.svg';
import adorableAnimalsImg from './assets/img/adorable_animals.svg';

export default function Posts() {
    const posts = [
        { userImg: meowedImg, username: "meowed", conteudo: gatoImg, curtidaImg: respondeaiImg},
        { userImg: barkedImg, username: "barked", conteudo: dogImg, curtidaImg: adorableAnimalsImg}
    ]
    return (
        <div className="posts">
            {posts.map((p, index) => (
                <Post key={index}>
                    <PostTopo userImg={p.userImg} username={p.username} />
                    <div className="conteudo"><img alt="" src={p.conteudo} /></div>
                    <PostFundo curtidaImg={p.curtidaImg} />
                </Post>
            ))}
        </div>
    )
}

const Post = styled.div`
    border-radius: 3px;
    border: 1px solid #DBDBDB;
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    ion-icon, strong {
        cursor: pointer;
    }
    .conteudo {
        img {
            width: 100%;
        }
    }
    ::last-child {
        margin-bottom: 18px;
    }
    @media (max-width: 614px) {
        border-radius: 0;
        border-left: none;
        border-right: none;
        width: 100%;
        ::last-child {
            margin-bottom: 72px;
        }
        ::first-child {
            margin-top: 0;
        }
    }
`;