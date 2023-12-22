import React, { useEffect, useState } from 'react'
import Show from './Show';


const Home = () => {

    const [shows, setShows] = useState([]);

    const fetchShowData = async () => {
        try {
            const res = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
            const data = await res.json();
            setShows(data);
        }
        catch (err) {
            console.log("Error in fetching data")
        }
    }

    useEffect(() => {
        fetchShowData();
    }, [])



    return (
        <div className='bg-black w-full flex flex-col items-center justify-center  gap-4 '>
            <h1 className="text-red-700 text-7xl font-bold my-4">ShowTV</h1>
            <div>
                {
                    shows.length > 0 ?
                        <div className='w-[90vw] flex flex-wrap items-center justify-center gap-4 '>
                            {
                                shows.map((show) => (
                                    <div key={show.show.id}>
                                        <Show show={show} />

                                    </div>
                                ))
                            }
                        </div>
                        :
                        <div>Loading...</div>
                }
            </div>
        </div>
    )
}

export default Home