import React from "react";

const obj=[
    {
        type:"Savings",
        color:"green",
        percent:45
    },
    {
        type:"Expnese",
        color:"red",
        percent:20
    },
    {
        type:"Invesment",
        color:'#f9c74f',
        percent:45
    },

]

export default function Labels() {
  return <>{obj.map((v,index)=><LabelComponent key={index} data={v}></LabelComponent>)}</>;
}

function LabelComponent({ data }) {
    if (!data) return <></>;
    
    return (
      <div className="labels d-flex justify-content-between my-5">
        <div className="d-flex gap-2 align-items-center ">
          <div className="rounded py-3" style={{ background: data.color ?? '#f9c74f', width: '10px',
            height: '8px' }}></div>
          <h3 className="text-md">{data.type ?? ''}</h3>
        </div>
        <h3 className="my-0 fw-bold">{data.percent ?? 0}%</h3>
      </div>
    );
  }
  
