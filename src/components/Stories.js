import styled from 'styled-components';

import story9gag from './assets/img/9gag.svg';
import storyMeowed from './assets/img/meowed.svg';
import storyBarked from './assets/img/barked.svg';
import storyNathanwpylestrangeplanet from './assets/img/nathanwpylestrangeplanet.svg';
import storyWawacomics from './assets/img/wawawicomics.svg';
import storyRespondeai from './assets/img/respondeai.svg';
import storyFilomoderna from './assets/img/filomoderna.svg';
import storyMemeriagourmet from './assets/img/memeriagourmet.svg';

export default function Stories() {
    const stories = [
        { img: story9gag, user: "9gag" },
        { img: storyMeowed, user: "meowed" },
        { img: storyBarked, user: "barked" },
        { img: storyNathanwpylestrangeplanet, user: "nathanwpylestrangeplanet" },
        { img: storyWawacomics, user: "wawawicomics" },
        { img: storyRespondeai, user: "respondeai" },
        { img: storyFilomoderna, user: "filomoderna" },
        { img: storyMemeriagourmet, user: "memeriagourmet" }
    ]
    return (
        <StoriesBox>
            {stories.map(s => (
                <Story>
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
    padding: 0 18px;
    overflow: hidden;
    position: relative;
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
    color: #c6c6c6;
    font-size: 28px;
    cursor: pointer;
`;

const Story = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 14px 0;
    font-size: 12px;
    cursor: pointer;
    margin-right: 10px;
`;
  
const Imagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 66px;
    width: 66px;
    background-image: url('../assets/img/story-circle.svg');
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
`;