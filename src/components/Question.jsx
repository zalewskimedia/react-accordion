import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa"
const Question = ({ id, title, info, activeId, toggleQuestion }) => {
    const isActive = id === activeId

    return (
        <article className="border-solid border-teal-500 border-2 mb-4 px-4 py-2 rounded-lg">
            <header
                className="flex justify-between items-center py-4 cursor-pointer"
                onClick={() => toggleQuestion(id)}>
                <h2 className="text-xl font-bold">{title}</h2>
                <span className="bg-teal-500 rounded-full p-3">
                    {isActive ? (
                        <FaMinus className=" text-white " />
                    ) : (
                        <FaPlus className="text-white" />
                    )}
                </span>
            </header>
            {isActive && <p>{info}</p>}
        </article>
    )
}
export default Question
