import { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts"

function App() {

  useEffect(() => {
    document.title = 'Dyamis Portfolio';
  }, []);

    const data = [
    { name: "Typescript", percent: 63 },
    { name: "JavaScript", percent: 8 },
    { name: "CSS", percent: 22 },
    { name: "HTML", percent: 7 },
  ];



  return (
    <>
      <h1>Dyami Delia</h1>
      <div className="card">
        <img src= "https://media.licdn.com/dms/image/D5635AQFN715BScpYFg/profile-framedphoto-shrink_400_400/0/1720821885215?e=1723831200&v=beta&t=XGqqUgviRNP5zLbxzaZgigp3wsdp5fFEfUKNAlj8A8o" className="logo react" alt="React logo" />
      
        <h2>About Me</h2>
        <p>
          Hi, I'm Dyami, a full-stack web developer with expertise in React, Vite, and modern web technologies. I specialize in building dynamic, responsive web applications that deliver exceptional user experiences.
        </p>
      </div>
      <div className="card">
        <h2>Graphs and Chart of Languagues used in this Site</h2>
        <ul>
              I am comfortable using Data visualization libraries like D3, Recharts or implementing custom solutions.
              <div style={{ textAlign: "center" }}>
      <div className="App">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="percent" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
                <PieChart width={400} height={400}>
          <Pie
            dataKey="percent"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>

    </div>
          
          <h2>Git Based Code Control</h2>
          <p>
          Proficient in using a Git-based workflow for managing code, including branching, merging, and conducting peer reviews. 
          <br />
         
          <a href="https://github.com/dyamidelia/notesapp" target="_blank" rel="noopener noreferrer"> Github for this site.</a> 
          </p>
          <h2> CI / CD pipelines </h2>
           Skilled in implementing CI/CD pipelines for the seamless deployment. This site uses AWS Amplify but I have expirence using Jenkins, Gitlab, Travis CI and Bamboo.
          <br />
     

           <h2>Application Functionality and Cloud Infrastructure </h2>

            <a href="https://project3.example.com" target="_blank" rel="noopener noreferrer">Project 3</a> - A brief description of Project 3.

        </ul>
      </div>
      <div className="card">
        <h2>Contact</h2>
        <p>
          Feel free to reach out to me through email at <a href="mailto:dyami.delia@gmaail.com">Dyami.Delia@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/in/hiredyami/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </div>
         <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
           <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
           <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more about the technologies I use.
      </p>
    </>
  )
}

export default App
