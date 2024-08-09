import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="intro">
        <h1>Hello, I'm [Your Name]</h1>
        <p>Welcome to my portfolio. I'm a web developer with expertise in React, Node.js, and more.</p>
      </div>
      <div className="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
      <footer>
        <p>Contact me at: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
      </footer>
    </>
  );
}

export default App
