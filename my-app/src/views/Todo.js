const Todo = (props) => {
    const todos = props.todos
    console.log('>>> check props ', props)
    return (
        <div className='todo-container'>
            {todos.map((item, index) => {
                return (
                    <div className='todo-child' key={item.id}>{item.title}</div>

                )
            })

            }
        </div>
    )
}
export default Todo;