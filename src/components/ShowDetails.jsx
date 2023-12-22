import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Bookticket from './Bookticket';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [bookTicket, setBookTicket] = useState(false);

  const fetchShowDetails = async () => {
    try {
      const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await res.json();
      setShow(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchShowDetails();
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-black text-white w-full h-screen flex justify-center items-center px-20 '>
      <div className='w-[50%]'>
        <img className="w-[60%] h-[60%]" src={show.image.medium} alt={show.name} />
      </div>
      <div className='w-[50%] flex flex-col'>
        <h1 className=' font-bold text-3xl'>{show.name}</h1>
        <h6 className=' pt-8 font-bold text-3xl'>Genre: {show.genres}</h6>
        <h6 className=' pt-8 font-bold text-3xl'>Language: {show.language}</h6>
        <p className=' text-xs py-8 width-[70%]'>{show.summary}</p>
        <button onClick={() => setBookTicket((prev) => !prev)} className='bg-red-700 hover:bg-red-800 p-2 rounded-sm'>
          Book ticket
        </button>
      </div>
      {bookTicket && (
        <div className='  '>
          <Bookticket show={show} setBookTicket={setBookTicket} />
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
