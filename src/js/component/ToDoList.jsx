import React, { useState } from "react";

export const ToDoList = () => {
    const [listInput, setListInput] = useState('');
    const [listItems, setListItems] = useState([]);

    const handleListInput = (event) => {
        setListInput(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (listInput.trim() !== '') {
            setListItems([...listItems, listInput]);
            setListInput('')
        }
    }
    const deleteTask = (elem) => {

        setListItems(listItems.filter(elemIn => elem !== elemIn))
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="text-start m-auto col-10 col-md-8 col-lg-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="itemListInput" className="form-label">Ingresa una tarea</label>
                            <input type="text" className="form-control" id="itemListInput" value={listInput} onChange={handleListInput} />
                        </div>
                    </form>

                    <ul id="itemListContainer" className="list-group">
                        {listItems.map((elemento, index) => (
                            <li className="list-group-item" key={index} id={index}>
                                <div className="borrar d-flex justify-content-between">
                                    <span>{elemento}</span> <span className="mostrarBorrar" onClick={() => deleteTask(elemento)}>
                                        <i className="fas fa-trash"></i>
                                    </span>
                                </div>
                            </li>
                        ))}
                        <li className = "list-group-item text-end bg-secondary text-white"> {listItems.length > 0 ? `TASKS LEFT: ${listItems.length}` : 'NO TASKS LEFT'} </li>
                    </ul>
                </div>

            </div>
        </div>

    )
}