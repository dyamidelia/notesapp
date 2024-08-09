import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


    
 <div className="container">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src="vite-logo.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src="react-logo.png" className="logo" alt="React logo" />
        </a>
      </div>
      <h1>My Portfolio</h1>
      <div className="card">
        <p>Welcome to my portfolio! Explore my projects and learn more about what I do.</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>



    </>
  )
}

export default App
