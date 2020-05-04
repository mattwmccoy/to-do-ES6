
let todos = getSavedTodos()


//render start

const filters = {
    searchText: ""
}

renderTodos(todos, filters)

//render end

document.querySelector("#search-text").addEventListener("input", (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', (e) => { 
    const text = e.target.elements.text.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text, //ES6 - same as text: text,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
        e.target.elements.text.value = " "
    }
})

document.querySelector("#hide-completed").addEventListener("change", (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
