import { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import DyamiImage from './assets/1720821885215.png'
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
import ReactPlayer from 'react-player'
import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import ItemCard from './ItemCard';


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

 const customOverrides = {
    image: {
      src: {DyamiImage},
      alt: "New description",
    },
    Button: {
      children: "Buy Now",
      onClick: () => alert("Button Clicked!"),
    },
    '$99 USD': {
      childr: "$89 USD",
    },
  };
    

  return (
    <>
      <h1>Dyami Delia</h1>
      <img src={DyamiImage} className="logo react" style={{ width: '200px', height: '200px' }} alt="DyamiImage" />
      <div>
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

            Expirence Creating Backend Restful APIs in Spring Boot, Node, Flask, Django and using Docker hosting on AWS, Google Cloud, Heroku and Azure. 

      
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
        Click on the Vite and React logos to learn more about the technologies I used for this site.
      </p>
    </>
  )
}

export default App
