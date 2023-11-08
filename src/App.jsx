import { useState } from "react"
import data from "../data"
import Questions from "./components/Questions"

function App() {
    const [questions, setQuestions] = useState(data)
    const [activeId, setActiveId] = useState(null)
    const toggleQuestion = id => {
        const newActiveId = id === activeId ? null : id
        setActiveId(newActiveId)
    }

    return (
        <div className="container mx-auto px-8 py-16">
            <h1 className="text-3xl font-bold text-center mb-8">Q&A</h1>
            <Questions
                questions={questions}
                activeId={activeId}
                toggleQuestion={toggleQuestion}
            />
        </div>
    )
}

export default App
