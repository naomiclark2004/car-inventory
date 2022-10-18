import React from 'react'
// import ReactDOM from 'react-dom';
const Car = ({make, model, src, description}) =>{

 return(
    <div className='card'>
        <img src={src} alt={model} ></img>
        <div className='container'>
            <h1>{make} {model}</h1>
            <p>{description}</p>
        </div>
    </div>

 )
}

export default Car;