import { useState } from 'react'
import { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = 'Dyamis Portfolio';
  }, []);

  return (
    <>
   <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
           <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
           <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Dyami's Portfolio</h1>
      <div className="card">
        <h2>About Me</h2>
        <p>
          Hi, I'm Dyami, a full-stack web developer with expertise in React, Vite, and modern web technologies. I specialize in building dynamic, responsive web applications that deliver exceptional user experiences.
        </p>
      </div>
      <div className="card">
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="https://project1.example.com" target="_blank" rel="noopener noreferrer">Project 1</a> - A brief description of Project 1.
          </li>
          <li>
            <a href="https://project2.example.com" target="_blank" rel="noopener noreferrer">Project 2</a> - A brief description of Project 2.
          </li>
          <li>
            <a href="https://project3.example.com" target="_blank" rel="noopener noreferrer">Project 3</a> - A brief description of Project 3.
          </li>
        </ul>
      </div>
      <div className="card">
        <h2>Contact</h2>
        <p>
          Feel free to reach out to me through my <a href="mailto:john.doe@example.com">email</a> or connect with me on <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more about the technologies I use.
      </p>
    </>
  )
}

export default App
