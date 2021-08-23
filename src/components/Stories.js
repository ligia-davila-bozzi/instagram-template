import styled from 'styled-components';

import storyBackgroundImg from './assets/img/story-circle.svg';
import teamCherry from './assets/imgs/team-cherry.png';
import supergiant from './assets/imgs/supergiant.jpg';
import jonathanBlow from './assets/imgs/jonathan-blow.jpg';
import playdead from './assets/imgs/playdead.jpg';
import tobyfox from './assets/imgs/toby-fox.jpg';
import reLogic from './assets/imgs/re-logic.png';
import oneshot from './assets/imgs/oneshot.jpg';
import compulsion from './assets/imgs/compulsion-games.jpg';

export default function Stories() {
    const stories = [
        { img: teamCherry, user: "team-cherry" },
        { img: supergiant, user: "supergiant" },
        { img: jonathanBlow, user: "jonathan-blow" },
        { img: playdead, user: "playdead" },
        { img: tobyfox, user: "tobyfox" },
        { img: reLogic, user: "re-logic" },
        { img: oneshot, user: "oneshot" },
        { img: compulsion, user: "compulsion" }
    ]
    return (
        <StoriesBox>
            {stories.map((s, index) => (
                <Story key={index}>
                    <Imagem><img alt ="" src={s.img} /></Imagem>
                    <Usuario>{s.user}</Usuario>
                </Story>
            ))}
            <Setinha>
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </Setinha>
        </StoriesBox>
    )
}


const StoriesBox = styled.div`
    display: flex;
    align-items: center;
    height: 118px;
    border-radius: 3px;
    border: 1px solid #DBDBDB;
    background: #FFF;
    padding: 0 18px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    @media (max-width: 614px) {
        background-color: transparent;
        border: none;
        width: 100%;
    }
`;

const Setinha = styled.div`
    position: absolute;
    right: 10px;
    top: 45px;
    height: 32px;
    width: 32px;
    color: #FFF;
    font-size: 28px;
    cursor: pointer;
    box-sizing: border-box;
    @media (max-width: 614px) {
        display: none;
    }
`;

const Story = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px 0;
    font-size: 12px;
    cursor: pointer;
    margin-right: 10px;
    box-sizing: border-box;
`;
  
const Imagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 66px;
    width: 66px;
    background-image: url(${storyBackgroundImg});
    box-sizing: border-box;
    img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
`;
  
const Usuario = styled.div`
    width: 66px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    height: 14px;
    box-sizing: border-box;
    margin-top: 4px;
`;