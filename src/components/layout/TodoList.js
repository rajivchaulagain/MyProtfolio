import { useState } from "react"

const TodoList = () => {
    const id = Math.random()
    const [todo, setTodo] = useState([])
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText((e.target.value))
    }
    const NewItems = () => {
        setTodo([...todo, { id, title: text }])
    }
    const remove = (id) => {
        const removeItems = todo.filter(item => item.id !== id)
        setTodo(removeItems)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setText('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={text} type="text" onChange={handleChange} />
                <button onClick={NewItems}> +</button>
            </form>
            {
                todo.length > 0 ?
                    todo.map((item) => (
                        <div className="d-flex mt-2" key={item?.id}>
                            <li>{item.title}</li>
                            <button onClick={() => remove(item.id)}>-</button>
                        </div>
                    )) : "No todos Yet"
            }
        </div>
    )
}

export default TodoList