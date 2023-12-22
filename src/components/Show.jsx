import React from 'react'
import { Link } from 'react-router-dom'
import pic from "../Images/poster.jpeg"


const Show = ({ show }) => {
    return (
        <div className='w-[300px]  rounded-lg  justify-center items-center m-4 p-2 text-white'>

            <Link to={`/show/${show.show.id}`} className='flex flex-col items-center justify-center'>
                <img
                    src={show.show.image ? show.show.image.medium : { pic }}
                    alt={`${show.show.name}`}></img>
                <p className="text-center my-4 text-xl text-md font-bold">{show.show.name}</p>

            </Link>

        </div>
    )
}

export default Show