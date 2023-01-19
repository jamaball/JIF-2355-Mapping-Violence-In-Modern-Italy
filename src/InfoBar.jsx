import React from 'react';
export default function InfoBar({desc, isActive}) {
    let output = JSON.stringify(desc)
    output = output.replace("{", '').replace("}", '').replaceAll('"', '').replaceAll(":", ": ")
    output = output.replaceAll(", ", "!!!")
    let dataArray = output.split(",")
    
    const listData = dataArray.map((element) => 
      <li>{element.replaceAll("!!!", ", ")}</li>
    );
  
    return (
      <div className="InfoBar">
        <div>{isActive ? listData : null}</div>
      </div>
    );
  }