import styled from 'styled-components';

import PostTopo from "./post_components/Topo.js";
import PostFundo from "./post_components/Fundo.js";

// usuariosImgs
import supergiant from './assets/imgs/supergiant.jpg';
import playdead from './assets/imgs/playdead.jpg';
import oneshot from './assets/imgs/oneshot.jpg';
import compulsion from './assets/imgs/compulsion-games.jpg';
import reLogic from './assets/imgs/re-logic.png';
import teamCherry from './assets/imgs/team-cherry.png';
// conteudosImgs
import bastion from './assets/imgs/bastion-cover3.jpg';
import robots from './assets/imgs/robots-post.gif';
import inside from './assets/imgs/inside-cover.jpg';
import oneshotPost from './assets/imgs/oneshot-post.png';
import weHappyFew from './assets/imgs/we-happy-few-post.jpg';
import terraria from './assets/imgs/terraria-post.gif';
import hollowKnight from './assets/imgs/hollow-knight-cover4.jpg';
// curtidasImgs
import user from './assets/imgs/user.png';
import bob from './assets/imgs/gamer-icon.jpg';

export default function Posts() {
    const posts = [
        { userImg: supergiant, username:"supergiant", conteudo: bastion, curtidaImg: bob},
        { userImg: user, username:"indie-games", conteudo: robots, curtidaImg: bob},
        { userImg: playdead, username:"playdead", conteudo: inside, curtidaImg: bob},
        { userImg: oneshot, username:"onsehot", conteudo: oneshotPost, curtidaImg: bob},
        { userImg: compulsion, username:"compulsion", conteudo: weHappyFew, curtidaImg: bob},
        { userImg: reLogic, username:"re-logic", conteudo: terraria, curtidaImg: bob},
        { userImg: teamCherry, username:"indie-games", conteudo: hollowKnight, curtidaImg: bob}
    ]
    return (
        <PostsBox>
            {posts.map((p, index) => (
                <Post key={index}>
                    <PostTopo userImg={p.userImg} username={p.username} />
                    <div className="conteudo"><img alt="" src={p.conteudo} /></div>
                    <PostFundo curtidaImg={p.curtidaImg} />
                </Post>
            ))}
        </PostsBox>
    )
}

const PostsBox = styled.div`
    
`;

const Post = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    box-sizing: border-box;
    ion-icon, strong {
        cursor: pointer;
    }
    .conteudo {
        display: flex;
        justify-content: center;
        img {
            width: 99.5%;
            height: 100%;
        }
    }
    :last-child {
        margin-bottom: 18px;
    }
    @media (max-width: 614px) {
        border-radius: 0;
        border-left: none;
        border-right: none;
        width: 100%;
        :last-child {
            margin-bottom: 72px;
        }
        :first-child {
            margin-top: 0;
        }
    }
`;