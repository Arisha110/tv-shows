import React from 'react'

const Bookticket = ({ show, setBookTicket }) => {

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className='text-black absolute top-[5vh] left-[10vw] bg-white w-[80vw] h-[80vh] mt-4 '>

      <button onClick={() => setBookTicket((prev) => !prev)} >close</button>
      <form onSubmit={handleSubmit}>
        <h1 className=' text-3xl font-bold p-4'>Book Tickets for Movie ID: {show.id}</h1>
        <h5 className='text-3xl font-bold p-4'>Show name: {show.name}</h5>
        <h5 className='text-3xl font-bold p-4'>Show timing: 6 P.M to 9 P.M</h5>
        <h5 className='text-2xl font-bold p-4'>No. Of seats: 2</h5>
        <button className='bg-red-700 w-60 p-2 m-4 text-white rounded-md hover:bg-red-800'>Confirm</button>

      </form>
    </div>
  )
}

export default Bookticket


