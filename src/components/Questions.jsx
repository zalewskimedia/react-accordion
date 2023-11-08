import Question from "./Question"

const Questions = ({ questions, activeId, toggleQuestion }) => {
    return (
        <div className="max-w-2xl mx-auto p-4 shadow-lg rounded-md">
            {questions.map(question => {
                return (
                    <Question
                        key={question.id}
                        {...question}
                        activeId={activeId}
                        toggleQuestion={toggleQuestion}
                    />
                )
            })}
        </div>
    )
}
export default Questions
