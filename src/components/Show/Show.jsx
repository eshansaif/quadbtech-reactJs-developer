import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleShow from '../SingleShow/SingleShow';

const Show = () => {

    const shows = useLoaderData();
    console.log(shows);

    return (
        <div className="grid md:grid-cols-3 gap-4 mt-10">
            {
                shows.map(show => <SingleShow
                    key={show.show.id}
                    show={show}
                >
                </SingleShow>)
            }
        </div>
    );
};

export default Show;