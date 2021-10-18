import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

export function LineChart ({info,settings}){
const [xValues, setXValues]= useState([])
const [yValues, setYValues]= useState([])

const data = {
    labels: xValues,
    datasets: [
      {
        label: settings.label,
        data: yValues,
        fill: settings.fill,
        backgroundColor: settings.bg,
        borderColor: settings.border,
        order:1
      },{
          label:"Goals",
          backgroundColor: 'red',
          borderColor: settings.border,
          data:yValues,
          type: 'bar',
          order:2
      }
    ],
  };

  const options = {
    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
    scales: {
      y: {
        min:0,
        max:100,
        beginAtZero: settings.zero
      }
    }
  };
    

    useEffect(()=>{
        setXValues([])
        setYValues([])
        info.forEach(i=>{
            setXValues(oldData=>[...oldData,i.x])
            setYValues(oldData=>[...oldData,i.y])
        })
    },[info])

     

    return (
        <div style={{width:"100%"}}>
            <Line data={data} options={options} />
        </div>
    )}