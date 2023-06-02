import React from 'react';
import { Link } from 'react-router-dom';

const SingleShow = ({ show }) => {

    const { id, name, image, genres, status, summary } = show.show;

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image.medium} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {name}
                        <div class="badge badge-secondary">{status}</div>
                    </h2>
                    {
                        summary.length > 65 ? <p dangerouslySetInnerHTML={{ __html: summary.slice(0, 65) + "......." }} /> : <p dangerouslySetInnerHTML={{ __html: summary }} />
                    }
                    <div class="card-actions justify-end">
                        {
                            genres?.map(genre => <div class="badge badge-outline">{genre}</div>)
                        }

                        {/* <div class="badge badge-outline">Products</div> */}
                    </div>
                    <Link className="btn btn-primary" to={`/show/${id}`}><button >View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleShow;