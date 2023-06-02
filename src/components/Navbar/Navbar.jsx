import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar bg-primary text-primary-content  mb-10">
            <Link to="/" className="btn btn-ghost normal-case text-xl">TV SHOW</Link>
        </div>
    );
};

export default Navbar;