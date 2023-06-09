import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const Tours = () => {
    const data=[{
        id:1,
        name:"Petra",
        info:"Petra is half-built, half-carved into the rock, and is surrounded by mountains riddled with passages and gorges. It is one of the world's most famous archaeological sites, where ancient Eastern traditions blend with Hellenistic architecture. ",
        image:"https://i.pinimg.com/236x/0e/f4/4a/0ef44a73ca19a59293dc11d767081fe0.jpg",
       price:10
    },
    {
        id:2,
        name:"Jarah",
        info:"erash is considered one of the largest and most well-preserved sites of Greek and Roman architecture in the world outside Italy. And is sometimes misleadingly referred to as the  or of Asia, referring to its size, extent of excavation and level of preservation.",
        image:"https://i.pinimg.com/236x/3a/d2/f4/3ad2f46a3ca13c6dd83c3243e798fbf4.jpg",
        price:20,
    },
    ,
    {
        id:3,
        name:"Zarqa",
        info:"erash is considered one of the largest and most well-preserved sites of Greek and Roman architecture in the world outside Italy. And is sometimes misleadingly referred to as the  or of Asia, referring to its size, extent of excavation and level of preservation.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYKN3zS3PPLZEgYnAmtL-2iXnyn6w0bUOykQ&usqp=CAU"

    }
     
    ,
    {
        id:3,
        name:"Zarqa",
        info:"erash is considered one of the largest and most well-preserved sites of Greek and Roman architecture in the world outside Italy. And is sometimes misleadingly referred to as the  or of Asia, referring to its size, extent of excavation and level of preservation.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYKN3zS3PPLZEgYnAmtL-2iXnyn6w0bUOykQ&usqp=CAU"

    }
     
    ,
    {
        id:3,
        name:"Zarqa",
        info:"erash is considered one of the largest and most well-preserved sites of Greek and Roman architecture in the world outside Italy. And is sometimes misleadingly referred to as the  or of Asia, referring to its size, extent of excavation and level of preservation.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYKN3zS3PPLZEgYnAmtL-2iXnyn6w0bUOykQ&usqp=CAU"

    }
     
    ,
    {
        id:3,
        name:"Zarqa",
        info:"erash is considered one of the largest and most well-preserved sites of Greek and Roman architecture in the world outside Italy. And is sometimes misleadingly referred to as the  or of Asia, referring to its size, extent of excavation and level of preservation.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYKN3zS3PPLZEgYnAmtL-2iXnyn6w0bUOykQ&usqp=CAU"

    }
     

]
    const [tour,setTour]=useState(data)
    const [selectedTour, setSelectedTour] = useState(null);

    function showInfo(index) {
        if (selectedTour === index) {
            setSelectedTour(null);
        } else {
            setSelectedTour(index);
        }
    }


  return (
    <div>
        <div className='card'>
        {
            tour.map((place,index)=>(
                <div className='cards'>
            <p>{place.name}</p>
            <img src={place.image} alt="Jordan Place"/>
            <button onClick={()=>showInfo(index)}>Show Info</button>
            {selectedTour === index && (
            <div>
            <p>{place.info}</p>
            </div>
            )}
            </div>
            ))
        }
        </div>


    </div>
  )
}

export default Tours