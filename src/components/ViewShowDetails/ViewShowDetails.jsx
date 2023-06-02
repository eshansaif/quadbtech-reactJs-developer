import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ViewShowDetails = () => {
    const { id } = useParams();
    const [showDetails, setShowDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Define an async function to fetch the show details based on the showId
        const fetchShowDetails = async () => {
            try {
                // Perform the API request to fetch the show details based on showId
                const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
                const data = await response.json();
                console.log(data);
                // Update the state with the fetched show details
                setShowDetails(data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };

        // Call the fetchShowDetails function when the component mounts
        fetchShowDetails();
    }, [id]);

    // Render the show details
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {showDetails ? (
                <div>
                    <div class="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img src={showDetails.image.original} alt="Show" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{showDetails.name}
                                <div class="badge badge-secondary">{showDetails.status}</div>
                            </h2>
                            <p dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
                            <p className='flex items-center '>Rating: <Rating
                                style={{ maxWidth: 180 }}
                                value={showDetails.rating.average}
                                readOnly
                            />

                            </p>
                            <p>Language: {showDetails.language}</p>
                            <p className="font-bold">Schedule: Day - {showDetails.schedule.days[0]}, Time - {showDetails.schedule.time} </p>
                            <p className="font-bold">Runtime: {showDetails.runtime} mins</p>

                            <div class="card-actions justify-end">
                                <button onClick={() => window.my_modal_1.showModal()} class="btn btn-primary">Book Movie Ticket</button>
                            </div>
                        </div>
                    </div>
                    {/* Render other show details */}
                </div>
            ) : (
                <div>Show details not found.</div>
            )}

            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Show Name</span>
                            </label>
                            <input type="text" defaultValue={showDetails.name} readOnly className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Day & Time</span>
                            </label>
                            <input type="text" defaultValue={`Day: ${showDetails.schedule.days[0]} & Time: ${showDetails.schedule.time}`} readOnly className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Premiered On</span>
                            </label>
                            <input type="text" defaultValue={showDetails.premiered} readOnly className="input input-bordered" />
                        </div>
                        <label className="label">
                            <p>Type: {showDetails.type}</p>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">CONFIRM TICKET</button>
                        </div>
                    </div>
                </form>
            </dialog>
        </div>
    );
};


export default ViewShowDetails;