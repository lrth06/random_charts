import './App.css';
import {LineChart} from './line';
import {useEffect, useState} from 'react'
function App() {
  const [rand1, setRand1]= useState()
  const [rand2, setRand2]= useState()
  const [rand3, setRand3]= useState()
  const [rand4, setRand4]= useState()
  const [rand5, setRand5]= useState()
  const [rand6, setRand6]= useState()
  const [rand7, setRand7]= useState()
const info = [
  {
   "x":"Monday",
   "y":rand1
  },
  {
   "x":"Tuesday",
   "y":rand2
 },
 {
   "x":"Wednesday",
   "y":rand3
  },
  {
   "x":"Thursday",
   "y":rand4
  },
  {
   "x":"Friday",
   "y":rand5
 },
 {
   "x":"Saturday",
   "y":rand6
  },
  {
    "x":"Sunday",
    "y":rand7
  },
]


const settings = {
  "label":"Speed",
  "fill":false,
  "bg":"white",
  "border":"lightGrey",
  "zero":"false"

}

  useEffect(() => {
    const interval = setInterval(() =>{
      setRand1(Math.floor(Math.random() * 100))
      setRand2(Math.floor(Math.random() * 100))
      setRand3(Math.floor(Math.random() * 100))
      setRand4(Math.floor(Math.random() * 100))
      setRand5(Math.floor(Math.random() * 100))
      setRand6(Math.floor(Math.random() * 100))
      setRand7(Math.floor(Math.random() * 100))
    },1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{width:"50vw"}}>
        <LineChart settings={settings} info={info}/>
       
       </div>
      </header>
    </div>
  );
}

export default App;
