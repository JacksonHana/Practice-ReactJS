import React from 'react';

//    //obj destructuring
//    const student = {
//     name: "jackson",
//     age: 0,
//    };
//    const nameS = student.name;
//    const ageS = student.age;
//    const {name, age} = student;

const Cell = ({value,onClick, className}) => {

    console.log(value, onClick);


    return (
        <div className={`game-cell ${className}`} onClick={onClick}>
            {value}
            
        </div>
    );
};

export default Cell;