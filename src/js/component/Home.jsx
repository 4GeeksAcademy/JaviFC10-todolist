import React from "react";
import { ToDoList } from "./ToDoList.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1>Mi lista de tareas</h1>
			<ToDoList/>
		</div>
	);
};

export default Home;

