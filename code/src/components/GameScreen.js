import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { playGame } from "reducers/game";
import styled from "styled-components";
import { TextContainer } from "./StartScreen";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  padding: 10px;
  background-image: url(../images/image.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  h3 {
    margin: 10px;
    font-size: 16px;
  }

  p {
    font-size: 12px;
  }

  button {
    font-size: 10px;
  }

  @media (min-width: 667px) {
    p {
      font-size: 16px;
    }

    button {
      font-size: 14px;
    }
  }
`;

const GameScreen = () => {
  const gameData = useSelector((store) => store.game.gameData);
  //   const history = useSelector((store) => store.game.history);
  //   const username = useSelector((store) => store.game.username);

  const dispatch = useDispatch();

  const onNextStep = (type, direction) => {
    dispatch(playGame(type, direction));
  };

  const ActionCard = ({ description, type, direction }) => (
    <div className="action-card">
      <p>{description}</p>
      <button onClick={() => onNextStep(type, direction)}>
        Head {direction.toLowerCase()}
      </button>
    </div>
  );

  return (
    <GameContainer>
      <TextContainer>
        {/* <h3>Now the adventure begins</h3> */}
        <p>{gameData.description}</p>
        {gameData.actions.map((item) => (
          <ActionCard key={item.direction} {...item} />
        ))}
      </TextContainer>
    </GameContainer>
  );
};

export default GameScreen;
