import React from 'react';
export default function Button({stateChanger, data}) {
    return (
      <button className='Button' onClick={event => {stateChanger(data)}}></button> 
    )
}