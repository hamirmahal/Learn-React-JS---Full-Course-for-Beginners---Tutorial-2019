import React from 'react'

function ToDoComponent(props) {
    return (
        <section className="todo-component">
            <input
                type="checkbox"
                checked={props.completed}
                onChange={() => props.method(props.id)}
            />
            <p style={
                { color: props.completed && "gray",
                fontStyle: props.completed && "italic",
                textDecoration: props.completed &&
                "line-through" }
                }
            >
                {props.text}
            </p>
        </section>
    );
}

export default ToDoComponent;