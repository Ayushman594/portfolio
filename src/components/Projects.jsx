import React from 'react'
import projectimg1 from '../images/Tic Tac Toe.png';
import projectimg2 from '../images/Basic Calculator.png';
import projectimg3 from '../images/To Do list.png';
import '../components/Projects.css';
function Projects() {
  return (
    <div className="p1 bg-secondary p-5">
      <h2 className='text-center text-info'>Projects</h2>
      <div className="project fs-4 text-light">
        <h3 className="mb-3 mt-5">1. Tic-Tac-Toe</h3>
        <p className="para">Tic-tac-toe is a two-player game where players take turns marking a 3x3 grid with X or O. It is a game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid. The first player to get three marks in a row ,column or diagonal wins. If the board is full and no player has three marks in a row, column or diagonal, the game is a tie.</p>
        <img src={projectimg1}  alt="Tic Tac Toe" />
      </div>
      <div className="project fs-4 text-light">
        <h3 className="mb-3">2. Basic Calculator</h3>
        <p className="para">A basic calculator is a device that can perform the four basic arithmetic operations: addition, subtraction, multiplication, and division. It's also known as a four-function calculator. They are useful for quick and straightforward mathematical calculations, making them essential tools for students, professionals, and everyday users. While they lack advanced functions like scientific or graphing calculators, they serve as an efficient and accessible tool for fundamental math operations. The goal of this project is to develop a functional calculator that can perform arithmetic operations.</p>
        <img src={projectimg2} alt="Basic Calculator" />
      </div>
      <div className="project fs-4 text-light">
        <h3 className="mb-3">3. To-Do list</h3>
        <p className="para">To Do list is used for tracking people's Tasks. Here,people can add, Edit and Delete their tasks. In this project, I have implemented not only the usual add , edit and delete button but also people can delete an entire set of task all at once using clear all button. There is a delete button at the end of each added task using that button, you can delete a specific task one by one. Edit button is also there , next to the delete button using which you can edit a specific Task. I have also implemented a function where when user adds a task, Time and Date will also get displayed at the same time.</p>
        <img src={projectimg3} alt="To Do List" />
      </div>
    </div>
  )
}

export default Projects
