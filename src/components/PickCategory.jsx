// Context 
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

// imgs
import Category from "../img/category.svg";

// Styles
import "./PickCategory.css";

const PickCategory = () => {
    const [quizSate, dispatch] = useContext(QuizContext);

    function chooseCategoryAndReorderQuestions(category) {
        dispatch({type: "START_GAME", payload: category});

        dispatch({type: "REORDER_QUESTIONS"});
    }

    return (
        <div id="category">
            <h2>Escolha uma catefgoria</h2>
            <p>As perguntas serão referentes a uma das linguagens abaixo</p>
            <div>
                {quizSate.questions.map((question) => (
                    <button onClick={() => chooseCategoryAndReorderQuestions(question.category) } key={question.category}>{question.category}</button>
                ))}
            </div>
            <img src={Category} alt="Categorias do Quiz" />
        </div>
    )
}

export default PickCategory