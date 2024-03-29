// Context
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

// Img
import WellDone from "../img/welldone.svg";


// Styles 
import "./GameOver.css";

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="gameover">
            <h2>Fim do Jogo!</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas.</p>
            <img src={WellDone} alt="Fim do Quiz" />
            <button onClick={() => dispatch({type: "NEW_GAME"}) }>Reiniciar</button>
        </div>
    )
}

export default GameOver