import React from 'react'
import {Doughnut } from 'react-chartjs-2';
import {Chart,ArcElement} from 'chart.js'
import Labels from './Labels'
Chart.register(ArcElement)


  const config={
    data:{ 
         datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
      borderRadius:25,
      spacing:8
    }]

    },
    options:{
    cutout:120
    }
  }
export default function Graph() {
  return (
    <div className='d-flex justify-content max-w-xs mx-aouto'>
        <div className='item'>
            <div className='chart'>
                <Doughnut {...config}></Doughnut>
                <h3 className='mb-3 font-bold title'>Total<br/>
                    <span className='block text-3xl text-success'>₹{0}</span>
                </h3>
            </div>
        <div className='d-flex flec-col py-6 gap-4'></div>
        <Labels></Labels>
        </div>

    </div>
  )
}
