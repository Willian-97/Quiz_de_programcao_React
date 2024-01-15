// Hooks
import { useContext } from "react"

// context 
import { QuizContext } from "../context/quiz";

// Imgs
import Quiz from "../img/quiz.svg";

// Styles
import "./Welcome.css";

const Welcome = () => {
  const [ quizState, dispatch ] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar: </p>
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>Iniciar</button>
      <img src={Quiz} alt="Inicio do quiz" />
    </div>
  )
}

export default Welcome