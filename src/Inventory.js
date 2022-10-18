import sedan from "./sedan.jpg";
import bronco from "./bronco.jpg";
import camry from "./camry.jpg";
import Car from "./Car";
import React from 'react'

const Inventory = () => {
    return (
        <div className="wrapper">
            <h1>Inventory</h1>
            <div className='inventory'>
                <Car 
                make="Honda" 
                model="Civic Sedan" 
                src={sedan} 
                description="A series of automobiles manufactured by Honda since 1972."/>
                <Car 
                make="Ford" 
                model="Bronco" 
                src={bronco} 
                description="A model line of sport utility vehicles manufactured and marketed by Ford." />
                <Car 
                make="Toyota" 
                model="Camry" 
                src={camry} 
                description="An automobile sold internationally by the Japanese auto manufacturer Toyota since 1982, spanning multiple generations."/>
            </div>
        </div>
    )
}

export default Inventory;